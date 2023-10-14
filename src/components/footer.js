import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

function Footer() {
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    Cookies.set("dynamicCookie", randomNumber.toString());
  }, []);
  return (
    <>
      <footer className="site-footer">
        <div className="footer-widgets">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="section-heading">
                  <h2 className="entry-title">About Us</h2>
                </div>
                <div className="row">
                  <div className="col-4">
                    <img
                      src="images/logos/leftlogo.png"
                      alt=""
                      style={{
                        display: "block",
                        marginLeft: "0",
                        maxWidth: "103px",
                        marginRight: "auto",
                      }}
                    />
                  </div>
                  <div className="col-8">
                    <p
                      style={{
                        color: "white",
                        textAlign: "justify ",
                        fontSize: "14px",
                      }}
                    >
                      "This religious House was founded in 1682 by Adrien Bresy,
                      parish priest of wez. This vigilant pastor, wishing to
                      procure for his parishioners the benefits of a Christian
                      education,
                    </p>
                  </div>
                  <p
                    style={{
                      color: "white",
                      textAlign: "justify",
                      fontSize: "14px",
                    }}
                  >
                    invited three pious girls from Lille to whom he added two
                    young persons of his parish".
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="foot-latest-news">
                  <div className="section-heading">
                    <h2 className="entry-title">Quick Links</h2>
                  </div>
                  <ul className="quick-links">
                    <li>
                      <i className="fas fa-graduation-cap"></i>
                      <Link to={"/events-and-celebrations"}>
                        Events & Celebration
                      </Link>
                    </li>
                    <li>
                      <i className="fas fa-bullhorn"></i>
                      <Link to={"/overseas-mission"}>Overseas Mission</Link>
                    </li>
                    <li>
                      <i className="fas fa-users"></i>
                      <Link to={"/scb-associates"}>SCB Associates</Link>
                    </li>
                    <li>
                      <i className="fas fa-chart-bar"></i>
                      <Link to={"/statistics"}>Statistics</Link>
                    </li>
                    <li>
                      <i className="fas fa-calendar-alt"></i>
                      <Link to={"/significant-dates"}>Significant Dates</Link>
                    </li>
                    <li>
                      <i className="fas fa-book-dead"></i>
                      <Link to={"/obitury"}>Obituary</Link>
                    </li>
                    <li>
                      <i className="fas fa-map-marker"></i>
                      <Link to={"/location"}>Location</Link>
                    </li>
                    <li>
                      <i className="fas fa-video-camera"></i>
                      <Link to={"/videos"}>Videos</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="foot-contact">
                  <div className="section-heading">
                    <h2 className="entry-title">Contact Us</h2>
                  </div>
                  <ul>
                    <li>
                      <i className="fa fa-phone mr-2" />
                      <Link to={"tel:+919865910951"}>+91 98659 10951</Link>
                    </li>
                    <li>
                      <i className="fa fa-envelope mr-2" />
                      <Link to={"mailto:scbprovincialatechennai@gmail.com"}>
                        scbprovincialatechennai@gmail.com
                      </Link>
                    </li>
                    <li>
                      <i className="fa fa-map-marker mr-2" />
                      <span>
                        <p style={{ color: "#fff" }}>
                          Adrien Villa, # 28 Surappatu Main Road, Vinayagapuram,
                          Kolathur P.O
                          <br />
                          Chennai 600 099
                        </p>
                        <li>
                          <a
                            href="https://twitter.com/share?url=https://stcharleschennai.com/index.php/events-and-celebrations&text=Events%20and%20Celebrations"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-twitter mr-2" />
                          </a>
                          &nbsp;
                          <a
                            href="https://plus.google.com/share?url=https://stcharleschennai.com/index.php/events-and-celebrations"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-google-plus mr-2" />
                          </a>
                          &nbsp;
                          <a
                            href="https://www.facebook.com/sharer.php?u=https://stcharleschennai.com/index.php/events-and-celebrations"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-facebook mr-2" />
                          </a>
                          &nbsp;
                          <a
                            href="http://www.linkedin.com/shareArticle?mini=true&url=https://stcharleschennai.com/index.php/events-and-celebrations"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "-17px" }}>
              <p
                className="text-center"
                style={{ fontSize: "14px", color: "white" }}
              >
                Copyright © 2023 St Charles Borromeo Eastern Province, All
                rights reserved. Powered by
                <a
                  className="tech"
                  style={{ color: "#ffd700" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.boscosofttech.com/"
                >
                  &nbsp;Boscosofttech
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
