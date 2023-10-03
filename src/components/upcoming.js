import React from "react";

function Upcoming() {
  const birthData = [
    {
      title: "Fundraiser for Kids",
      date: "Aug 25, 2018",
      imageSrc: "images/logos/sisters1.png",
    },
    {
      title: "Bring water to the children",
      date: "Aug 25, 2018",
      imageSrc: "images/logos/sisters1.png",
    },
    {
      title: "Another Event",
      date: "Aug 25, 2018",
      imageSrc: "images/logos/sisters1.png",
    },
    {
      title: "Another Event",
      date: "Aug 25, 2018",
      imageSrc: "images/logos/sisters1.png",
    },
  ];
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
  return (
    <>
      <div className="home-page-events">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="upcoming-events" id="provinceprog">
                <div className="section-heading">
                  <h2 className="entry-title">Province News</h2>
                </div>
                {upcomeData.map((upcomeevent, index) => (
                  <div className="event-wrap d-flex flex-wrap justify-content-between">
                    <figure className="m-0" id="upcome">
                      <img src={upcomeevent.imageSrc} alt="" />
                    </figure>
                    <div className="event-content-wrap" id="upcevent">
                      <header className="entry-header d-flex flex-wrap align-items-center">
                        <h3 className="entry-title w-100 m-0">
                          <a href="/">{upcomeevent.title}</a>
                        </h3>
                        <div className="posted-date">
                          <a href="/">{upcomeevent.date}</a>
                        </div>
                      </header>
                      <div className="entry-footer">
                        <a href="/">Read More</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="upcoming-events" id="provincialprog">
                <div className="section-heading">
                  <h2 className="entry-title">Provincial Program</h2>
                </div>
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
                      <div className="entry-footer">
                        <a href="/">Read More</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="upcoming-events" id="birthfeast">
                <div className="section-heading">
                  <h2 className="entry-title">Birthday / Feast</h2>
                </div>
                {birthData.map((birth, index) => (
                  <div className="event-wrap d-flex flex-wrap justify-content-between">
                    <figure className="m-0" id="upcome">
                      <img src={birth.imageSrc} alt="" />
                    </figure>
                    <div className="event-content-wrap" id="upcevent">
                      <header className="entry-header d-flex flex-wrap align-items-center">
                        <h3 className="entry-title w-100 m-0">
                          <a href="/">{birth.title}</a>
                        </h3>
                        <div className="posted-date">
                          <a href="/">{birth.date}</a>
                        </div>
                      </header>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Upcoming;
