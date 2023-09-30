import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Modal } from "react-bootstrap";
import { format } from "date-fns";

function Churchstatic() {
  const pdfLinks = [
    {
      name: "PDF 1",
      url: "https://salemdiocese.org/wp-content/uploads/2023/09/News-Letter_compressed.pdf",
      size: "2.5 MB",
    },
    {
      name: "PDF 2",
      url: "https://salemdiocese.org/wp-content/uploads/2023/09/News-Letter_compressed.pdf",
      size: "3.2 MB",
    },
    {
      name: "PDF 3",
      url: "https://salemdiocese.org/wp-content/uploads/2023/09/News-Letter_compressed.pdf",
      size: "1.8 MB",
    },
  ];

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
                <div className="cause-content-wrap">
                  <header className="entry-header d-flex flex-wrap align-items-center"></header>
                  <div className="entry-content" id="calcont">
                    {pdfLinks.map((pdf, index) => (
                      <div
                        key={index}
                        className="pdf-link d-flex align-items-center"
                      >
                        <div className="pdf-logo">
                          <i className="far fa-file-pdf mr-2"></i>
                        </div>
                        <div className="pdf-info">
                          <a
                            href={pdf.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {pdf.name}
                          </a>
                          <span className="pdf-size">{pdf.size}</span>
                        </div>
                        <div className="pdf-download ml-auto">
                          <a
                            href={pdf.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fas fa-download"></i> Download
                          </a>
                        </div>
                      </div>
                    ))}
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
