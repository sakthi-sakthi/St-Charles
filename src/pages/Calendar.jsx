import React, { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import Footer from '../components/footer';
import Header from '../components/header';
import { useLocation } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

function CalendarComponent() {
    const calendarRef = useRef(null);
    const [showModal, setShowModal] = useState(false);
    const [eventData, setEventData] = useState({ title: '', date: '' });
    const location = useLocation();
    const [eventCalendarData, setEventcalendarData] = useState()

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const title = searchParams.get('title');
        const date = searchParams.get('date');

        if (title && date) {
            setEventData({ title, date });
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }, [location]);


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
                        setEventcalendarData(events)
                    }

                })
                .catch(error => {
                    console.error('Error fetching events from API', error);
                });
        }
    }, []);

    const handleCloseModal = () => {
        setShowModal(false);
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
                        events={eventCalendarData}
                        ref={calendarRef}
                        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            start: 'prev,next today',
                            center: 'title',
                            end: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
                        }}
                        eventClick={(info) => {
                            setShowModal(true);
                        }}
                    />
                </div>
            </div>
            <Footer />

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Event Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Event Title: {eventData.title}</p>
                    <p>Event Date: {eventData.date}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CalendarComponent;
