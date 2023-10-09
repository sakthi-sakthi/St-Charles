import React from "react";

function Footer() {
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
                      }}>
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
                    }}>
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
                  <ul class="quick-links">
                    <li>
                      <i class="fas fa-history"></i>
                      <a href="/obitury">Obituary</a>
                    </li>
                    <li>
                      <i class="fas fa-graduation-cap"></i>
                      <a href="/events-and-celebrations">
                        Events & Celebration
                      </a>
                    </li>
                    <li>
                      <i class="fas fa-bullhorn"></i>
                      <a href="/overseas-mission">Overseas Mission</a>
                    </li>
                    <li>
                      <i class="fas fa-envelope"></i>
                      <a href="/scb-associates"> SCB Associates</a>
                    </li>
                    <li>
                      <i class="fas fa-cogs"></i>
                      <a href="/statistics"> Statistics</a>
                    </li>
                    <li>
                      <i class="fas fa-images"></i>
                      <a href="/significant-dates"> Significant Dates</a>
                    </li>
                    <li>
                      <i class="fas fa-users"></i>
                      <a href="/location">Location</a>
                    </li>
                    <li>
                      <i class="fas fa-users"></i>
                      <a href="/videos"> Videos</a>
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
                      <i className="fa fa-phone" />
                      <a href="tel:+919865910951">+91 98659 10951</a>
                    </li>
                    <li>
                      <i className="fa fa-envelope" />
                      <a href="mailto:scbprovincialatechennai@gmail.com">
                        scbprovincialatechennai@gmail.com
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-map-marker" />
                      <span>
                        <p style={{ color: "#fff" }}>
                          Adrien Villa, # 28 Surappatu Main Road, Vinayagapuram,
                          Kolathur P.O
                          <br />
                          Chennai 600 099
                        </p>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "-17px" }}>
              <p
                className="text-center"
                style={{ fontSize: "14px", color: "white" }}>
                Copyright © 2023 St Charles Borromeo Eastern Province, All
                rights reserved. Powered by
                <a
                  class="tech"
                  style={{ color: "#ffd700" }}
                  target="_blank"
                  href="https://www.boscosofttech.com/">
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
