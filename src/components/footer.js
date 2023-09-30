import React from "react";

function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-widgets">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="foot-about">
                  <h2>About Us</h2>
                  {/* <a class="foot-logo" href="#"
              ><img src="" style="width: 7rem;" alt
            /></a> */}
                  <p>
                    "This religious House was founded in 1682 by Adrien Bresy,
                    parish priest of wez. This vigilant pastor, wishing to
                    procure for his parishioners the benefits of a Christian
                    education, invited three pious girls from Lille to whom he
                    added two young persons of his parish"
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="foot-latest-news">
                  <h2>Location</h2>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.8340195275639!2d80.20046119999999!3d13.1406683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526490ea28d1db%3A0xb566a6a8834544cf!2sThe%20Sisters%20of%20St.%20Charles%20Borromeo%20%E2%80%93%20Eastern%20Province!5e0!3m2!1sen!2sin!4v1695706446822!5m2!1sen!2sin"
                    width={250}
                    height={150}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="foot-contact">
                  <h2>Contact</h2>
                  <ul>
                    <li>
                      <i className="fa fa-phone" />
                      <a href="tel:+919865910951">+91 98659 10951</a>
                    </li>
                    <li>
                      <i className="fa fa-envelope" />
                      <a href="mailto:scbprovincialatechennai@gmail.com">
                        &nbsp;&nbsp;scbprovincialatechennai@gmail.com
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-map-marker" />
                      <span>
                        <p style={{ color: "#fff" }}>
                          Adrien Villa, # 28 Surappatu Main Road, Vinayagapuram,
                          Kolathur P.O Chennai 600 099
                        </p>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
