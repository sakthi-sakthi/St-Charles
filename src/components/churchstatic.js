import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Modal } from "react-bootstrap";
import { format } from "date-fns";

function Churchstatic() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([
    {
      date: new Date(2023, 8, 5), // September 5, 2023
      title: "Event 1",
      description: "Description for Event 1",
    },
    {
      date: new Date(2023, 8, 10), // September 10, 2023
      title: "Event 2",
      description: "Description for Event 2",
    },
    // Add more static events as needed
  ]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const handleDayClick = (clickedDate) => {
    const event = events.find((event) => {
      return (
        event.date.getDate() === clickedDate.getDate() &&
        event.date.getMonth() === clickedDate.getMonth() &&
        event.date.getFullYear() === clickedDate.getFullYear()
      );
    });

    if (event) {
      setSelectedEvent(event);
    }
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <div className="featured-cause">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="cause-wrap d-flex flex-wrap justify-content-between">
                <div className="cause-content-wrap">
                  <header className="entry-header d-flex flex-wrap align-items-center"></header>
                  <div className="entry-content" id="calcont">
                    <Calendar
                      onChange={onChange}
                      value={date}
                      onClickDay={handleDayClick}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="cause-wrap d-flex flex-wrap justify-content-between">
                <figure className="m-0">
                  <img src="images/logos/house.jpg" alt="" />
                </figure>
                <div className="cause-content-wrap">
                  <header className="entry-header d-flex flex-wrap align-items-center">
                    <h3 className="entry-title w-100 m-0">
                      <a href="#">Mother House</a>
                    </h3>
                  </header>
                  <div className="entry-content">
                    <p className="m-0">
                      "This religious House was founded in 1682 by Adrien Bresy,
                      parish priest of Wez. This vigilant pastor, wishing to
                      procure for his parishioners the benefits of a Christian
                      education, invited three pious girls from..."
                    </p>
                  </div>
                  <div className="entry-footer mt-5">
                    <a href="#" className="btn gradient-bg mr-2">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <Modal show={!!selectedEvent} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedEvent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Date: {format(selectedEvent.date, "MMMM dd, yyyy")}</p>
            <p>Description: {selectedEvent.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={closeModal}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default Churchstatic;
