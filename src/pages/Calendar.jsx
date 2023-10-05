import React, { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import Footer from '../components/footer';
import Header from '../components/header';
import axios from 'axios';

function CalendarComponent() {
    const calendarRef = useRef(null);
    const [eventCalendarData, setEventcalendarData] = useState([]);



    useEffect(() => {
        if (calendarRef.current) {
            axios.get('/member/province/birthday/this_month/2')
                .then(response => {
                    const data = response.data;
                    if (Array.isArray(data?.data)) {
                        const events = data?.data?.map(item => {
                            // Parse the "04 - October" format date
                            const parts = item.dob.split(' - ');
                            const day = parts[0];
                            const monthName = parts[1];

                            // Convert month name to month number (1-based index)
                            const monthNumber = new Date(Date.parse(monthName + ' 1, 2000')).getMonth() + 1;

                            // Create a date string in "yyyy-mm-dd" format
                            const year = new Date().getFullYear(); // You may need to replace this with the actual year
                            const date = `${year}-${monthNumber.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

                            return {
                                title: item.member_name,
                                date: date,
                                editable: true,
                                eventResizableFromStart: true,
                            };
                        });
                        setEventcalendarData(events);
                    }
                })
                .catch(error => {
                    console.error('Error fetching events from API', error);
                });
        }
    }, []);


    return (
        <>
            <Header />
            <div className="container">
                <h1 className="entry-title">
                    <center></center>
                </h1>
                <div id="calendar">
                    <FullCalendar
                        events={eventCalendarData}
                        ref={calendarRef}
                        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            start: 'prev,next today',
                            center: 'title',
                            end: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
                        }}
                        navLinks={false} // Prevent navigation to event date
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CalendarComponent;
