import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Modal } from "react-bootstrap";
import { format } from "date-fns";
import axios from "axios";
import ApiUrl from "./API/Api";

function Churchstatic() {
  const [pdfLinks, setPdfLinks] = useState([]);
  const [pdfPageIndex, setPdfPageIndex] = useState(0);
  const pdfsPerPage = 4;
  const [date, setDate] = useState(new Date());
  const [events] = useState([
    {
      date: new Date(2023, 8, 5),
      title: "Event 1",
      description: "Description for Event 1",
    },
    {
      date: new Date(2023, 8, 10),
      title: "Event 2",
      description: "Description for Event 2",
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);

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

  useEffect(() => {
    axios
      .get(`${ApiUrl}/get/Newsletter`)
      .then((response) => {
        setPdfLinks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="featured-cause">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="cause-wrap d-flex flex-wrap justify-content-between">
                <div className="cause-content-wrap">
                  <div className="section-heading">
                    <h2 className="entry-title">Calendar</h2>
                  </div>
                  <div className="entry-content" id="calcont">
                    <Calendar
                      onChange={setDate}
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
                  <div className="section-heading">
                    <h2 className="entry-title">News Letter</h2>
                  </div>
                  <div className="entry-content" id="newscont">
                    {pdfLinks.data && pdfLinks.data.length > 0 ? (
                      pdfLinks.data
                        ?.slice(
                          pdfPageIndex * pdfsPerPage,
                          (pdfPageIndex + 1) * pdfsPerPage
                        )
                        .map((pdf, index) => (
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
                              <a href={pdf?.file_url} rel="noopener noreferrer">
                                {pdf.title}
                              </a>
                              <br />
                              <span className="pdf-size">{pdf.file_id}</span>
                            </div>
                            <div className="pdf-download ml-auto">
                              <a
                                href={pdf.file_url}
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-sm"
                              >
                                <i className="fas fa-download"></i>
                              </a>
                            </div>
                          </div>
                        ))
                    ) : (
                      <p style={{fontWeight:"500",textAlign:"center",fontSize:"16px"}}>No News Letter Available</p>
                    )}
                    <br />
                    <div className="pagination-container" id="btnnext">
                      <button
                        onClick={() => {
                          if (pdfPageIndex > 0) {
                            setPdfPageIndex(pdfPageIndex - 1);
                          }
                        }}
                        disabled={pdfPageIndex === 0}
                        className="btn btn-primary"
                      >
                        Previous
                      </button>
                      &nbsp;&nbsp;
                      <button
                        onClick={() => {
                          if (
                            (pdfPageIndex + 1) * pdfsPerPage <
                            (pdfLinks.data?.length || 0)
                          ) {
                            setPdfPageIndex(pdfPageIndex + 1);
                          }
                        }}
                        disabled={
                          (pdfPageIndex + 1) * pdfsPerPage >=
                          (pdfLinks.data?.length || 0)
                        }
                        className="btn btn-primary"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
