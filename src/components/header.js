import React from "react";

function Header() {
  return (
    <>
      <header className="site-header">
        <div className="top-header-bar">
          <div className="container">
            <div className="row flex-wrap justify-content-center justify-content-lg-between align-items-lg-center">
              <div className="col-12 col-lg-8 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                <div className="header-bar-email" style={{ fontSize: "15px" }}>
                  <i
                    className="fa fa-envelope"
                    style={{ color: "#f6c93f" }}></i>
                  <a href="mailto:scbprovincialatechennai@gmail.com">
                    <span
                      className="__cf_email__"
                      style={{ marginLeft: "0.5rem" }}>
                      scbprovincialatechennai@gmail.com
                    </span>
                  </a>
                </div>
                <div
                  className="header-bar-text align-items-center justify-content-center"
                  style={{ fontSize: "15px" }}>
                  <i className="fa fa-phone" style={{ color: "#f6c93f" }}></i>
                  <a href="tel:+919865910951" style={{ marginLeft: "0.3rem" }}>
                    +91 98659 10951
                  </a>
                </div>
              </div>
              <div className="col-12 col-lg-4 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
                <div className="social-icons">
                  <div className="social-icon">
                    <a href="/">
                      <i className="fab fa-facebook" />
                    </a>
                  </div>
                  <div className="social-icon">
                    <a href="/">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                  <div className="social-icon">
                    <a href="/">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="sp-section-2">
          <div className="container" id="headbanner">
            <div className="row">
              <div id="sp-left-logo" className="col-xs-2 col-sm-2 col-md-2">
                <div className="sp-column">
                  <div className="sp-module right-menu-in">
                    <div className="sp-module-content">
                      <div className="custom right-menu-in">
                        <p>
                          <img
                            style={{
                              display: "block",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                            src="images/logos/leftlogo.png"
                            alt=""
                          />
                          <img
                            style={{
                              display: "block",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                            src="/images/logo-2.png"
                            alt=""
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="sp-center-in" className="col-xs-8 col-sm-8 col-md-8">
                <div className="sp-column">
                  <div className="sp-module main-tile-text">
                    <div className="sp-module-content">
                      <div className="custom main-tile-text">
                        <div className="text-center">
                          <h1 style={{ textAlign: "center" }}>
                            The Sisters of St. Charles Borromeo
                            <br />
                            Eastern Province
                          </h1>
                          <h2 className="site-description">
                            Adrien Villa, / 28 Surappatu Main Road,
                            Vinayagapuram,
                            <br />
                            Kolathur P.O Chennai 600 099
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="sp-right-logo" className="col-xs-2 col-sm-2 col-md-2">
                <div className="sp-column">
                  <div className="sp-module">
                    <div className="sp-module-content">
                      <div className="custom">
                        <p>
                          <img
                            style={{
                              display: "block",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                            src="images/logos/founderlogo.png"
                            alt=""
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <nav class="navbar navbar-expand-lg navbar-light" id="test">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav" id="commonNavbar">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Foundation
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="/motherhouse">
                    Mother House
                  </a>
                  <a class="dropdown-item" href="/founder">
                    Founder
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/history"
                  id="navbarDropdownMenuLink2"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Eastern Province
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink2">
                  <a class="dropdown-item" href="/provincial-council">
                    Provincial Council
                  </a>
                  <a class="dropdown-item" href="/history">
                    History
                  </a>
                  <a class="dropdown-item" href="/the-motto-of-the-province">
                    The Motto of the Province
                  </a>
                  <a class="dropdown-item" href="/newsletter">
                    News Letter / Circular
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/general-administration">
                  General Administration
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdownMenuLink3"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Commission
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink3">
                  <a class="dropdown-item" href="/cosaf">
                    Cosaf
                  </a>
                  <a class="dropdown-item" href="/fac">
                    Fac
                  </a>
                  <a class="dropdown-item" href="/msp">
                    Msp
                  </a>
                  <a class="dropdown-item" href="/ecep">
                    Ecep
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle community"
                  href="/"
                  id="navbarDropdownMenuLink4"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Community
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink4">
                  <a class="dropdown-item" href="/">
                    Ranipet
                  </a>
                  <a class="dropdown-item" href="/">
                    Jolarpet
                  </a>
                  <a class="dropdown-item" href="/">
                    Yercaud
                  </a>
                  <a class="dropdown-item" href="/">
                    Chilakaluripet
                  </a>
                  <a class="dropdown-item" href="/">
                    Yelagiri
                  </a>
                  <a class="dropdown-item" href="/">
                    Madurai
                  </a>
                  <a class="dropdown-item" href="/">
                    Thirupattur
                  </a>
                  <a class="dropdown-item" href="/">
                    Perambur
                  </a>
                  <a class="dropdown-item" href="/">
                    Kanapparu
                  </a>
                  <a class="dropdown-item" href="/">
                    Kadakkal
                  </a>
                  <a class="dropdown-item" href="/">
                    Perumon
                  </a>
                  <a class="dropdown-item" href="/vilathikulam">
                    Vilathikulam
                  </a>
                  <a class="dropdown-item" href="/vinayagapuram">
                    Vinayagapuram
                  </a>
                  <a class="dropdown-item" href="/ammoor">
                    Ammoor
                  </a>
                  <a class="dropdown-item" href="/puliampatty">
                    Puliyampatty
                  </a>
                  <a class="dropdown-item" href="/gummidipoondi">
                    Gummidipoondi
                  </a>
                  <a class="dropdown-item" href="/mugandanur">
                    Mugandanu
                  </a>
                  <a class="dropdown-item" href="/kizhakkambalam">
                    Kizhakkambalam
                  </a>
                  <a class="dropdown-item" href="/ponnapally">
                    Ponnapally
                  </a>
                  <a class="dropdown-item" href="/periakottai">
                    Periakottai
                  </a>
                  <a class="dropdown-item" href="/dindigul">
                    Dindigul
                  </a>
                  <a class="dropdown-item" href="/muttom">
                    Muttom
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/gallery">
                  Gallery
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdownMenuLink5"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Formation
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink5">
                  <a class="dropdown-item" href="/formation">
                    Formation
                  </a>
                  <a class="dropdown-item" href="/candidacy">
                    Candidacy
                  </a>
                  <a class="dropdown-item" href="/postulancy">
                    Posultancy
                  </a>
                  <a class="dropdown-item" href="/novitiate">
                    Novitiate
                  </a>
                  <a class="dropdown-item" href="/juniorate">
                    Juniorate
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/vocation-promotion">
                  Vocation Promotion
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact-us">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
