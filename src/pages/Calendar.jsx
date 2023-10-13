import React, { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import Footer from '../components/footer';
import Header from '../components/header';
import axios from 'axios';

function CalendarComponent() {
    const calendarRef = useRef(null);
    const [eventCalendarData, setEventCalendarData] = useState([]);
    const [newsEvents, setNewsEvents] = useState([]);

    useEffect(() => {
        if (calendarRef.current) {
            axios.get('http://172.104.57.118:7025/api/member/province/birthday/this_month/2')
                .then(response => {
                    const data = response.data;
                    if (Array.isArray(data?.data)) {
                        const events = data?.data?.map(item => {
                            const parts = item.dob.split(' - ');
                            const day = parts[0];
                            const monthName = parts[1];
                            const monthNumber = new Date(Date.parse(monthName + ' 1, 2000')).getMonth() + 1;
                            const year = new Date().getFullYear();
                            const date = `${year}-${monthNumber.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

                            return {
                                title: item.member_name,
                                date: date,
                            };
                        });

                        setEventCalendarData(events);
                    }
                })
                .catch(error => {
                    console.error('Error fetching events from API', error);
                });

            axios.get('http://testscb.cristolive.org/api/news/province/2')
                .then(response => {
                    const data = response.data.data;
                    if (Array.isArray(data)) {
                        const events = data.map(item => {
                            const parts = item.date.split('-');
                            if (parts.length === 3) {
                                const year = parts[2];
                                const month = parts[1];
                                const day = parts[0];
                                const isoDate = `${year}-${month}-${day}`;

                                return {
                                    title: item.name,
                                    date: isoDate,
                                    color: 'red', // Set the color to red for all news events
                                };
                            } else {
                                console.error('Invalid date format:', item.date);
                                return null;
                            }
                        });

                        const validEvents = events.filter(event => event !== null);
                        setNewsEvents(validEvents);
                    }
                })
                .catch(error => {
                    console.error('Error fetching news events from API', error);
                });
        }
    }, []);

    const isCurrentDate = (dateStr) => {
        const currentDate = new Date();
        const eventDate = new Date(dateStr);
        return currentDate.toDateString() === eventDate.toDateString();
    };

    return (
        <>
            <Header />
            <div className="container">
                <h1 className="entry-title">
                    <center></center>
                </h1>
                <div id="calendar">
                    <FullCalendar
                        events={[...eventCalendarData, ...newsEvents]}
                        ref={calendarRef}
                        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            start: 'prev,next today',
                            center: 'title',
                            end: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
                        }}
                        navLinks={false}
                        dayMaxEventRows={2}
                        eventContent={(arg) => {
                            if (isCurrentDate(arg.event.start)) {
                                return (
                                    <>
                                        <div className="event-title"><center>{arg.event.title}</center></div>
                                        <div className="event-image">
                                            <img
                                                src="/images/sisters/graphics-happy-birthday.gif"
                                                alt="Birthday GIF"
                                                style={{ width: '100px', height: '57px', marginLeft: '26px' }}
                                            />
                                        </div>
                                    </>
                                );
                            } else {
                                return (
                                    <>
                                        <div className="event-title"><center>{arg.event.title}</center></div>
                                    </>
                                );
                            }
                        }}
                        editable={true} // Enable event dragging
                        eventResizable={true} // Enable event resizing
                    />
                </div>
            </div>
            <br />
            <Footer />
        </>
    );
}

export default CalendarComponent;
