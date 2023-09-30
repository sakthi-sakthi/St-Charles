import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Modal } from "react-bootstrap";
import { format } from "date-fns";

function Churchstatic() {
  const pdfLinks = [
    {
      name: "Salem Diocese",
      url: "https://salemdiocese.org/wp-content/uploads/2023/09/News-Letter_compressed.pdf",
      size: "2.5 MB",
    },
    {
      name: "Chengai Diocese",
      url: "https://salemdiocese.org/wp-content/uploads/2023/09/News-Letter_compressed.pdf",
      size: "3.2 MB",
    },
    {
      name: "De La Salle Brothers",
      url: "https://salemdiocese.org/wp-content/uploads/2023/09/News-Letter_compressed.pdf",
      size: "1.8 MB",
    },
    {
      name: "Ascension Church",
      url: "https://salemdiocese.org/wp-content/uploads/2023/09/News-Letter_compressed.pdf",
      size: "1.8 MB",
    },
    {
      name: "Ascension Church",
      url: "https://salemdiocese.org/wp-content/uploads/2023/09/News-Letter_compressed.pdf",
      size: "1.8 MB",
    },
    {
      name: "Ascension Church",
      url: "https://salemdiocese.org/wp-content/uploads/2023/09/News-Letter_compressed.pdf",
      size: "1.8 MB",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filter pdfLinks to only show items for the current page
  const pdfsToShow = pdfLinks.slice(startIndex, endIndex);

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
                  <header className="entry-header d-flex flex-wrap align-items-center">
                    {/* <h2 className="entry-title">Calendar</h2> */}
                  </header>
                  <div className="entry-content" id="calcont">
                    <Calendar
                      onChange={onChange}
                      value={date}
                      onClickDay={handleDayClick}
                      setEvents={date}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="cause-wrap d-flex flex-wrap justify-content-between">
                <div className="cause-content-wrap">
                  <header className="entry-header d-flex flex-wrap align-items-center">
                    {/* <h2 className="entry-title">News Letter</h2> */}
                  </header>
                  <div className="entry-content" id="calcont">
                    {pdfsToShow.map((pdf, index) => (
                      <div
                        key={index}
                        className="pdf-display d-flex flex-wrap align-items-center pdffree"
                      >
                        <div className="pdf-logo">
                          <i
                            className="fa fa-file-pdf-o"
                            style={{ fontSize: "35px", color: "red" }}
                          ></i>
                        </div>
                        <div className="pdf-info">
                          <a
                            href={pdf.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {pdf.name}
                          </a>
                          <br />
                          <span className="pdf-size">{pdf.size}</span>
                        </div>
                        <div className="pdf-download ml-auto">
                          <a
                            href={pdf.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fas fa-download"></i>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Bootstrap Pagination */}
                  <ul className="pagination" style={{ marginTop: "7px" }}>
                    {Array.from({
                      length: Math.ceil(pdfLinks.length / itemsPerPage),
                    }).map((_, index) => (
                      <li
                        key={index}
                        className={`page-item ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(index + 1)}
                        >
                          {index + 1}
                        </button>
                      </li>
                    ))}
                  </ul>
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
