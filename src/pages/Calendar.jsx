import React, { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import Footer from '../components/footer';
import Header from '../components/header';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function CalendarComponent() {
    let IsCalendar = window.location.href;
    IsCalendar = IsCalendar.split('?');
    const calendarRef = useRef(null);
    const [eventCalendarData, setEventCalendarData] = useState([]);
    const [newsEvents, setNewsEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const size = IsCalendar[1] === "Iscal" ? "xl" : "md";
    const modaltitle = IsCalendar[1] === "Iscal" ? "Event Details" : "Birthday Details";

    const handleEventClick = (eventId) => {
        const mergedData = [...eventCalendarData, ...newsEvents];
        const foundEvent = mergedData?.find((event) => event?.id === parseInt(eventId));
        setSelectedEvent(foundEvent);
        setShowModal(true);
    };

    useEffect(() => {
        async function fetchData() {
            if (calendarRef.current) {
                if (IsCalendar[1] !== "Iscal") {
                    try {
                        const response = await axios.get('http://172.104.57.118:7025/api/member/province/birthday/this_month/2');
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
                                    id: item.id,
                                    title: item.member_name,
                                    date: date,
                                };
                            });

                            setEventCalendarData(events);
                        }
                    } catch (error) {
                        console.error('Error fetching events from API', error);
                    }
                }
                if (IsCalendar[1] === "Iscal") {
                    try {
                        const response = await axios.get('http://testscb.cristolive.org/api/news/province/2');
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
                                        id: item.id,
                                        title: item.name,
                                        date: isoDate,
                                        color: 'red',
                                        description: item.description
                                    };
                                } else {
                                    console.error('Invalid date format:', item.date);
                                    return null;
                                }
                            });

                            const validEvents = events.filter(event => event !== null);
                            setNewsEvents(validEvents);
                        }
                    } catch (error) {
                        console.error('Error fetching news events from API', error);
                    }
                }
            }
        }

        fetchData();
    }, [IsCalendar]);


    const isCurrentDate = (dateStr) => {
        const currentDate = new Date();
        const eventDate = new Date(dateStr);
        return currentDate.toDateString() === eventDate.toDateString();
    };
    function formatDate(date) {
        const d = new Date(date);
        const day = d.getDate();
        const month = d.getMonth() + 1;
        const year = d.getFullYear();
        return `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
    }
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
                            const maxTitleLength = 25; 
                            if (arg.event.title.length > maxTitleLength) {
                                const truncatedTitle = arg.event.title.slice(0, maxTitleLength) + '...';

                                if (isCurrentDate(arg.event.start) && IsCalendar[1] !== "Iscal") {
                                    return (
                                        <>
                                            <div className="event-title"><center>{truncatedTitle}</center></div>
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
                                            <div className="event-title"><center>{truncatedTitle}</center></div>
                                        </>
                                    );
                                }
                            } else {
                                if (isCurrentDate(arg.event.start) && IsCalendar[1] !== "Iscal") {
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
                            }
                        }}
                        editable={true}
                        eventResizable={true}
                        eventClick={(arg) => {
                            const eventId = arg?.event?.id;
                            handleEventClick(eventId);
                        }}
                    />

                    <Modal show={showModal} onHide={() => setShowModal(false)} size={size}>
                        <Modal.Header closeButton>
                            <Modal.Title>{modaltitle}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="scrollable-content" id="calendarbody">
                                {selectedEvent?.title && (
                                    <p>
                                        <strong>Title :</strong> {selectedEvent?.title}
                                    </p>
                                )}
                                {selectedEvent?.date && (
                                    <p>
                                        <strong>Date :</strong> {formatDate(selectedEvent.date)}
                                    </p>
                                )}
                                {selectedEvent?.description && (
                                    <>
                                        <strong>Description :</strong>
                                        <div dangerouslySetInnerHTML={{ __html: selectedEvent?.description }} />
                                    </>
                                )}
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowModal(false)}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
            <br />
            <Footer />
        </>
    );
}

export default CalendarComponent;
