import React, { useState, useEffect } from "react";
import axios from "axios";

function Upcoming() {
  const [birthdayData, setBirthdayData] = useState([]);

  useEffect(() => {
    axios.get("/member/province/birthday/this_month/2").then((response) => {
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

  // Filter out members with birthdays that have already passed
  const upcomingBirthdays = birthdayData.filter((item) => {
    const dobParts = item.dob.split(" - ");
    const dobDay = parseInt(dobParts[0], 10);
    const dobMonth = dobParts[1].trim();

    // Compare the birthday with the current date
    if (dobMonth === currentMonth) {
      return dobDay >= currentDay;
    }
    return true; // Include all other birthdays
  });

  const eventsData = [
    {
      title: "Fundraiser for Kids",
      date: "Aug 25, 2018",
      imageSrc: "images/event-1.jpg",
    },
    {
      title: "Bring water to the children",
      date: "Aug 25, 2018",
      imageSrc: "images/event-2.jpg",
    },
    {
      title: "Another Event",
      date: "Aug 25, 2018",
      imageSrc: "images/event-3.jpg",
    },
    {
      title: "Another Event",
      date: "Aug 25, 2018",
      imageSrc: "images/event-3.jpg",
    },
  ];
  const upcomeData = [
    {
      title: "Fundraiser for Kids",
      date: "sept 25, 2018",
      imageSrc: "images/event-1.jpg",
    },
    {
      title: "Bring water to the children",
      date: "Aug 25, 2018",
      imageSrc: "images/event-2.jpg",
    },
    {
      title: "Another Event",
      date: "Aug 25, 2018",
      imageSrc: "images/event-3.jpg",
    },
    {
      title: "Another Event",
      date: "Aug 25, 2018",
      imageSrc: "images/event-3.jpg",
    },
  ];
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
                  {upcomeData.map((upcomeevent, index) => (
                    <div className="event-wrap d-flex flex-wrap justify-content-between">
                      <figure className="m-0" id="upcome">
                        <img src={upcomeevent.imageSrc} alt="" />
                      </figure>
                      <div className="event-content-wrap" id="upcevent">
                        <header className="entry-header d-flex flex-wrap align-items-center">
                          <h3 className="entry-title w-100 m-0">
                            <a
                              href={`/calendar?title=${encodeURIComponent(
                                upcomeevent.title
                              )}&date=${encodeURIComponent(upcomeevent.date)}`}
                            >
                              {upcomeevent.title}
                            </a>
                          </h3>
                          <div className="posted-date">
                            <a href="/">{upcomeevent.date}</a>
                          </div>
                        </header>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="upcoming-events">
                <div className="section-heading">
                  <h2 className="entry-title">Provincial Program</h2>
                </div>
                <div className="scrollable-content" id="provincialprog">
                  {eventsData.map((event, index) => (
                    <div className="event-wrap d-flex flex-wrap justify-content-between">
                      <figure className="m-0" id="upcome">
                        <img src={event.imageSrc} alt="" />
                      </figure>
                      <div className="event-content-wrap" id="upcevent">
                        <header className="entry-header d-flex flex-wrap align-items-center">
                          <h3 className="entry-title w-100 m-0">
                            <a href="/">{event.title}</a>
                          </h3>
                          <div className="posted-date">
                            <a href="/">{event.date}</a>
                          </div>
                        </header>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="upcoming-events">
                <div className="section-heading">
                  <h2 className="entry-title">Birthday / Feast</h2>
                </div>
                <div className="scrollable-content" id="birthfeast">
                  {upcomingBirthdays.length > 0 ? (
                    upcomingBirthdays.map((item, index) => {
                      // Extract the day and month from the 'dob' field
                      const dobParts = item.dob.split(" - ");
                      const dobDay = parseInt(dobParts[0], 10);
                      const dobMonth = dobParts[1].trim(); // Remove leading/trailing spaces

                      // Check if it's the member's birthday today
                      const isBirthdayToday =
                        dobDay === currentDay && dobMonth === currentMonth;

                      // Define the image source based on API data or static image
                      const imageSrc = item.image
                        ? item.image
                        : "/images/sisters/NoImage.png";

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
                                <a
                                  href={`/calendar?title=${item.membername}&date=${item.dob}`}
                                  style={{
                                    fontSize: "15px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {item.membername}
                                </a>
                              </h3>

                              <div className="posted-date">
                                <a
                                  href="/"
                                  style={{
                                    fontSize: "15px",
                                    color: "#6b1d2f",
                                  }}
                                >
                                  {item.dob}
                                </a>
                                {isBirthdayToday && (
                                  <img
                                    src="/images/sisters/graphics-happy-birthday.gif"
                                    alt="Happy Birthday GIF"
                                    className="birthday-gif"
                                  />
                                )}
                              </div>
                            </header>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p style={{ color: "black", fontWeight: "bold" }}>
                      No birthday wishes available
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
