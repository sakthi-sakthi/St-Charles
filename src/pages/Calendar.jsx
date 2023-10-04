import React, { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import Footer from '../components/footer';
import Header from '../components/header';
import { useLocation } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

function CalendarComponent() {
    const calendarRef = useRef(null);
    const [showModal, setShowModal] = useState(false);
    const [eventData, setEventData] = useState({ title: '', date: '' });
    const location = useLocation();

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
        if (calendarRef.current && eventData.date) {
            const calendarApi = calendarRef.current.getApi();
            const parsedDate = new Date(eventData.date);

            if (!isNaN(parsedDate.getTime())) {
                calendarApi.gotoDate(parsedDate);
            }
        }
    }, [eventData.date]);

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
                        ref={calendarRef}
                        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                        initialView="dayGridMonth"
                        events={[
                            {
                                title: "Church Event 1",
                                start: "2023-09-15",
                                end: "2023-09-16",
                                editable: true,
                                eventResizableFromStart: true,
                            },
                        ]}
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
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Birthday Details</Modal.Title>
                </Modal.Header>
            <Modal.Body>
                <p>Member Name: {eventData.title}</p>
                <p>Date of Birth: {eventData.date}</p>
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
