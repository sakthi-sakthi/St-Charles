import React, { useEffect, useState } from "react";
import axios from "axios";

function Upcoming() {
  return (
    <>
      <div className="home-page-events">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="upcoming-events">
                <div className="section-heading">
                  <h2 className="entry-title">Upcoming Events</h2>
                </div>
                <div className="event-wrap d-flex flex-wrap justify-content-between">
                  <figure className="m-0" id="upcome">
                    <img src="images/event-1.jpg" alt="" />
                  </figure>
                  <div className="event-content-wrap" id="upcevent">
                    <header className="entry-header d-flex flex-wrap align-items-center">
                      <h3 className="entry-title w-100 m-0">
                        <a href="#">Fundraiser for Kids</a>
                      </h3>
                      <div className="posted-date">
                        <a href="#">Aug 25, 2018 </a>
                      </div>
                    </header>
                    <div className="entry-footer">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="event-wrap d-flex flex-wrap justify-content-between">
                  <figure className="m-0" id="upcome">
                    <img src="images/event-2.jpg" alt="" />
                  </figure>
                  <div className="event-content-wrap" id="upcevent">
                    <header className="entry-header d-flex flex-wrap align-items-center">
                      <h3 className="entry-title w-100 m-0">
                        <a href="#">Bring water to the childrens</a>
                      </h3>
                      <div className="posted-date">
                        <a href="#">Aug 25, 2018 </a>
                      </div>
                    </header>
                    <div className="entry-footer">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="event-wrap d-flex flex-wrap justify-content-between">
                  <figure className="m-0" id="upcome">
                    <img src="images/event-3.jpg" alt="" />
                  </figure>
                  <div className="event-content-wrap" id="upcevent">
                    <header className="entry-header d-flex flex-wrap align-items-center">
                      <h3 className="entry-title w-100 m-0">
                        <a href="#">Bring water to the childrens</a>
                      </h3>
                      <div className="posted-date">
                        <a href="#">Aug 25, 2018 </a>
                      </div>
                    </header>
                    <div className="entry-footer">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="upcoming-events">
                <div className="section-heading">
                  <h2 className="entry-title">Upcoming Events</h2>
                </div>
                <div className="event-wrap d-flex flex-wrap justify-content-between">
                  <figure className="m-0" id="upcome">
                    <img src="images/event-1.jpg" alt="" />
                  </figure>
                  <div className="event-content-wrap" id="upcevent">
                    <header className="entry-header d-flex flex-wrap align-items-center">
                      <h3 className="entry-title w-100 m-0">
                        <a href="#">Fundraiser for Kids</a>
                      </h3>
                      <div className="posted-date">
                        <a href="#">Aug 25, 2018 </a>
                      </div>
                    </header>
                    <div className="entry-footer">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="event-wrap d-flex flex-wrap justify-content-between">
                  <figure className="m-0" id="upcome">
                    <img src="images/event-2.jpg" alt="" />
                  </figure>
                  <div className="event-content-wrap" id="upcevent">
                    <header className="entry-header d-flex flex-wrap align-items-center">
                      <h3 className="entry-title w-100 m-0">
                        <a href="#">Bring water to the childrens</a>
                      </h3>
                      <div className="posted-date">
                        <a href="#">Aug 25, 2018 </a>
                      </div>
                    </header>
                    <div className="entry-footer">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="event-wrap d-flex flex-wrap justify-content-between">
                  <figure className="m-0" id="upcome">
                    <img src="images/event-3.jpg" alt="" />
                  </figure>
                  <div className="event-content-wrap" id="upcevent">
                    <header className="entry-header d-flex flex-wrap align-items-center">
                      <h3 className="entry-title w-100 m-0">
                        <a href="#">Bring water to the childrens</a>
                      </h3>
                      <div className="posted-date">
                        <a href="#">Aug 25, 2018 </a>
                      </div>
                    </header>
                    <div className="entry-footer">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="upcoming-events">
                <div className="section-heading">
                  <h2 className="entry-title">Birthday / Feast</h2>
                </div>
                <div className="event-wrap d-flex flex-wrap justify-content-between">
                  <figure className="m-0" id="upcome">
                    <img src="images/logos/sisters1.png" alt="" />
                  </figure>
                  <div className="event-content-wrap" id="upcevent">
                    <header className="entry-header d-flex flex-wrap align-items-center">
                      <h3 className="entry-title w-100 m-0">
                        <a href="#">Fundraiser for Kids</a>
                      </h3>
                      <div className="posted-date">
                        <a href="#">Aug 25, 2018 </a>
                      </div>
                    </header>
                  </div>
                </div>
                <div className="event-wrap d-flex flex-wrap justify-content-between">
                  <figure className="m-0" id="upcome">
                    <img src="images/logos/sisters1.png" alt="" />
                  </figure>
                  <div className="event-content-wrap" id="upcevent">
                    <header className="entry-header d-flex flex-wrap align-items-center">
                      <h3 className="entry-title w-100 m-0">
                        <a href="#">Bring water to the childrens</a>
                      </h3>
                      <div className="posted-date">
                        <a href="#">Aug 25, 2018 </a>
                      </div>
                    </header>
                  </div>
                </div>
                <div className="event-wrap d-flex flex-wrap justify-content-between">
                  <figure className="m-0" id="upcome">
                    <img src="images/logos/sisters1.png" alt="" />
                  </figure>
                  <div className="event-content-wrap" id="upcevent">
                    <header className="entry-header d-flex flex-wrap align-items-center">
                      <h3 className="entry-title w-100 m-0">
                        <a href="#">Bring water to the childrens</a>
                      </h3>
                      <div className="posted-date">
                        <a href="#">Aug 25, 2018 </a>
                      </div>
                    </header>
                  </div>
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
