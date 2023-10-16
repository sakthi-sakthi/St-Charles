import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Upcoming() {
  // birthday api start

  const [birthdayData, setBirthdayData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://172.104.57.118:7025/api/member/province/birthday/this_month/2"
      )
      .then((response) => {
        if (response?.data?.data != null) {
          const extractedData = response?.data?.data.map((item) => ({
            membername: item.member_name,
            dob: item.dob,
            image: item.image,
          }));
          setBirthdayData(extractedData);
        }
      });
  }, []);

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const upcomingBirthdays = birthdayData.filter((item) => {
    const dobParts = item.dob.split(" - ");
    const dobDay = parseInt(dobParts[0], 10);
    const dobMonth = dobParts[1].trim();
    if (dobMonth === currentMonth) {
      return dobDay >= currentDay;
    }
    return true;
  });

  // provincial program api start

  const [eventsData, setEventsData] = useState([]);
  useEffect(() => {
    axios
      .get("http://testscb.cristolive.org/api/news/province/2")
      .then((response) => {
        if (Array.isArray(response.data)) {
        }
        const data = response.data.data;
        data.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
        setEventsData(data.reverse());
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  // News and Events api start
  const [upcomeData, setUpcomeData] = useState([]);

  useEffect(() => {
    axios
      .get("http://testscb.cristolive.org/api/news/province/2")
      .then((response) => {
        if (Array.isArray(response.data)) {
        }
        const data = response.data.data;
        data.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
        setUpcomeData(data.reverse());
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  function formatEventName(name, maxLength) {
    if (name.length <= maxLength) {
      return capitalizeEveryWord(name);
    } else {
      const truncatedName = name.slice(0, maxLength);
      return capitalizeEveryWord(truncatedName) + "...";
    }
  }

  function capitalizeEveryWord(str) {
    const words = str.split(" ");
    const capitalizedWords = words.map((word) => {
      // Handle empty words
      if (word.length === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return capitalizedWords.join(" ");
  }

  return (
    <>
      <div className="home-page-events">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="upcoming-events">
                <div className="section-heading">
                  <h2 className="entry-title">News & Events</h2>
                </div>
                <div className="scrollable-content" id="provinceprog">
                  {upcomeData.slice(0, 5).map((upcomeevent, index) => (
                    <div
                      className="event-wrap d-flex flex-wrap justify-content-between"
                      key={index}
                    >
                      <figure className="m-0" id="upcome">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3364/3364789.png"
                          style={{
                            borderRadius: "50%",
                            width: "48px",
                            height: "48px",
                          }}
                          alt=""
                        />
                      </figure>
                      <div className="event-content-wrap" id="upcevent">
                        <header className="entry-header d-flex flex-wrap align-items-center">
                          <h3 className="entry-title w-100 m-0">
                            <a
                              href="/calendar?Iscal"
                              style={{
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              {formatEventName(upcomeevent.name, 69)}
                            </a>
                          </h3>
                          <div className="posted-date">
                            <a
                              href="/calendar?Iscal"
                              style={{
                                fontSize: "14px",
                                color: "#6b1d2f",
                              }}
                            >
                              {upcomeevent.date}
                            </a>
                          </div>
                        </header>
                      </div>
                    </div>
                  ))}

                  {upcomeData.length === 0 && (
                    <p style={{ color: "black", fontWeight: "bold" }}>
                      No News Available
                    </p>
                  )}

                  {upcomeData.length > 5 && (
                    <div className="d-flex justify-content-center mt-4">
                      <Link
                        to={"/news-events"}
                        className="btn btn-primary"
                        style={{ color: "white" }}
                      >
                        View More
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="upcoming-events">
                <div className="section-heading" id="province-section-heading">
                  <h2 className="entry-title">Provincial Program</h2>
                </div>
                <div className="scrollable-content" id="provincialprog">
                  {eventsData.slice(0, 5).map((event, index) => (
                    <div
                      className="event-wrap d-flex flex-wrap justify-content-between"
                      key={index}
                    >
                      <figure className="m-0" id="upccome">
                        <img
                          src="https://www.clipartkey.com/mpngs/m/294-2947450_music-festival-icon-png.png"
                          style={{
                            borderRadius: "50%",
                            width: "48px",
                            height: "48px",
                          }}
                          alt=""
                        />
                      </figure>
                      <div className="event-content-wrap" id="upccevent">
                        <header className="entry-header d-flex flex-wrap align-items-center">
                          <h3 className="entry-title w-100 m-0">
                            <Link
                              to="/calendar?Iscal"
                              style={{
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              {formatEventName(event.name, 69)}
                            </Link>
                          </h3>
                          <div className="posted-date">
                            <Link
                              to="/calendar?Iscal"
                              style={{
                                fontSize: "14px",
                                color: "#6b1d2f",
                              }}
                            >
                              {event.date}
                            </Link>
                          </div>
                        </header>
                      </div>
                    </div>
                  ))}

                  {eventsData.length === 0 && (
                    <p style={{ color: "black", fontWeight: "bold" }}>
                      No Province Program Available
                    </p>
                  )}

                  {eventsData.length > 5 && (
                    <div className="d-flex justify-content-center mt-4">
                      <Link
                        to={"/provincial-programs"}
                        className="btn btn-primary"
                        style={{ color: "white" }}
                      >
                        View More
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="upcoming-events">
                <div id="birthday-section-heading" class="section-heading">
                  <h2 id="birthday-entry-title" class="entry-title">
                    Birthday / Feast
                  </h2>
                </div>
                <div className="scrollable-content" id="birthfeast">
                  {upcomingBirthdays.length > 0 ? (
                    upcomingBirthdays.map((item, index) => {
                      const dobParts = item.dob.split(" - ");
                      const dobDay = parseInt(dobParts[0], 10);
                      const dobMonth = dobParts[1].trim();
                      const isBirthdayToday =
                        dobDay === currentDay && dobMonth === currentMonth;
                      const imageSrc = item.image
                        ? item.image
                        : "/images/logos/sisters1.png";

                      return (
                        <div
                          className="event-wrap d-flex flex-wrap justify-content-flex-start"
                          key={index}
                        >
                          <figure className="m-0" id="upcome">
                            <img
                              style={{
                                borderRadius: "50%",
                                width: "48px",
                                height: "48px",
                              }}
                              src={imageSrc}
                              alt=""
                            />
                          </figure>
                          <div className="event-content-wrap" id="bfevent">
                            <header className="entry-header d-flex flex-wrap align-items-center">
                              <h3 className="entry-title w-100 m-0">
                                <Link
                                  to={"/calendar"}
                                  style={{
                                    fontSize: "15px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {item.membername}
                                </Link>
                              </h3>

                              <div className="posted-date">
                                <Link
                                  to={"/calendar"}
                                  style={{
                                    fontSize: "15px",
                                    color: "#6b1d2f",
                                  }}
                                >
                                  {item.dob}
                                </Link>
                              </div>
                              {isBirthdayToday && (
                                <img
                                  src="/images/sisters/graphics-happy-birthday.gif"
                                  alt="Happy Birthday GIF"
                                  className="birthday-gif"
                                />
                              )}
                            </header>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p style={{ color: "black", fontWeight: "bold" }}>
                      No Birthday Wishes Available
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Upcoming;
