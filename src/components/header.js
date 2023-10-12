import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();
  const Foundation = {
    motherhouse: "/motherhouse",
    founder: "/founder",
  };
  const Eastern = {
    "provincial-council": "/provincial-council",
    history: "/history",
    "the-motto-of-the-province": "/the-motto-of-the-province",
    newsletter: "/newsletter",
  };
  const commission = {
    cosaf: "/cosaf",
    fac: "/fac",
    msp: "/msp",
    ecep: "/ecep",
  };
  const formationdata = {
    formation: "/formation",
    candidacy: "/candidacy",
    postulancy: "/postulancy",
    novitiate: "/novitiate",
    juniorate: "/juniorate",
  };
  const Community = {
    ranipet: "/ranipet",
    jolarpet: "/jolarpet",
    yercaud: "/yercaud",
    chilakaluripet: "/chilakaluripet",
    yelagiri: "/yelagiri",
    madurai: "/madurai",
    thirupattur: "/thirupattur",
    perambur: "/perambur",
    kanapparu: "/kanapparu",
    kadakkal: "/kadakkal",
    perumon: "/perumon",
    vilathikulam: "/vilathikulam",
    vinayagapuram: "/vinayagapuram",
    ammoor: "/ammoor",
    puliampatty: "/puliampatty",
    gummidipoondi: "/gummidipoondi",
    mugandanur: "/mugandanur",
    kizhakkambalam: "/kizhakkambalam",
    ponnapally: "/ponnapally",
    periakottai: "/periakottai",
    dindigul: "/dindigul",
    muttom: "/muttom",
  };
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
                    <a
                      href="https://www.facebook.com/sharer.php?u=https://stcharleschennai.com/index.php/events-and-celebrations"
                      target="_blank"
                      rel="noreferrer">
                      <i className="fab fa-facebook" />
                    </a>
                  </div>
                  <div className="social-icon">
                    <a
                      href="https://youtu.be/JgRNH5FqY-0"
                      target="_blank"
                      rel="noreferrer">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                  <div className="social-icon">
                    <a href="/" target="_blank" rel="noreferrer">
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
        <nav class="navbar navbar-expand-lg navbar-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li
                className={`nav-item ${
                  location.pathname === "/" ? "active" : ""
                }`}>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li
                className={`nav-item dropdown ${
                  Object.values(Foundation).some((value) =>
                    location.pathname.includes(value)
                  )
                    ? "active"
                    : ""
                }`}>
                <NavLink
                  to="/"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Foundation
                </NavLink>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink">
                  <NavLink
                    to="/motherhouse"
                    className="dropdown-item"
                    activeClassName="active">
                    Mother House
                  </NavLink>
                  <NavLink
                    to="/founder"
                    className="dropdown-item"
                    activeClassName="active">
                    Founder
                  </NavLink>
                  {/* Add more NavLink items for other Foundation links */}
                </div>
              </li>
              <li
                className={`nav-item dropdown ${
                  Object.values(Eastern).some((value) =>
                    location.pathname.includes(value)
                  )
                    ? "active"
                    : ""
                }`}>
                <NavLink
                  to="/history"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink2"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Eastern Province
                </NavLink>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink2">
                  <NavLink
                    to="/provincial-council"
                    className="dropdown-item"
                    activeClassName="active">
                    Provincial Council
                  </NavLink>
                  <NavLink
                    to="/history"
                    className="dropdown-item"
                    activeClassName="active">
                    History
                  </NavLink>
                  <NavLink
                    to="/the-motto-of-the-province"
                    className="dropdown-item"
                    activeClassName="active">
                    The Motto of the Province
                  </NavLink>
                  <NavLink
                    to="/newsletter"
                    className="dropdown-item"
                    activeClassName="active">
                    News Letter / Circular
                  </NavLink>
                  {/* Add more NavLink items for other Eastern Province links */}
                </div>
              </li>

              <li
                className={`nav-item ${
                  location.pathname === "/general-administration"
                    ? "active"
                    : ""
                }`}>
                <Link to="/general-administration" className="nav-link">
                  General Administration
                </Link>
              </li>

              <li
                className={`nav-item dropdown ${
                  Object.values(commission).some((value) =>
                    location.pathname.includes(value)
                  )
                    ? "active"
                    : ""
                }`}>
                <NavLink
                  to="/"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink3"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Commission
                </NavLink>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink3">
                  <NavLink
                    to="/cosaf"
                    className="dropdown-item"
                    activeClassName="active">
                    COSAF
                  </NavLink>
                  <NavLink
                    to="/fac"
                    className="dropdown-item"
                    activeClassName="active">
                    FAC
                  </NavLink>
                  <NavLink
                    to="/msp"
                    className="dropdown-item"
                    activeClassName="active">
                    MSP
                  </NavLink>
                  <NavLink
                    to="/ecep"
                    className="dropdown-item"
                    activeClassName="active">
                    ECEP
                  </NavLink>
                  {/* Add more NavLink items for other commission links */}
                </div>
              </li>

              <li
                className={`nav-item dropdown ${
                  Object.values(Community).some((value) =>
                    location.pathname.includes(value)
                  )
                    ? "active"
                    : ""
                }`}>
                <NavLink
                  to="/"
                  className="nav-link dropdown-toggle community"
                  id="navbarDropdownMenuLink4"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Community
                </NavLink>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink4">
                  <NavLink
                    to="/ranipet"
                    className="dropdown-item"
                    activeClassName="active">
                    Ranipet
                  </NavLink>
                  <NavLink
                    to="/jolarpet"
                    className="dropdown-item"
                    activeClassName="active">
                    Jolarpet
                  </NavLink>
                  <NavLink
                    to="/yercaud"
                    className="dropdown-item"
                    activeClassName="active">
                    Yercaud
                  </NavLink>
                  <NavLink
                    to="/chilakaluripet"
                    className="dropdown-item"
                    activeClassName="active">
                    Chilakaluripet
                  </NavLink>
                  <NavLink
                    to="/yelagiri"
                    className="dropdown-item"
                    activeClassName="active">
                    Yelagiri
                  </NavLink>
                  <NavLink
                    to="/madurai"
                    className="dropdown-item"
                    activeClassName="active">
                    Madurai
                  </NavLink>
                  <NavLink
                    to="/thirupattur"
                    className="dropdown-item"
                    activeClassName="active">
                    Thirupattur
                  </NavLink>
                  <NavLink
                    to="/perambur"
                    className="dropdown-item"
                    activeClassName="active">
                    Perambur
                  </NavLink>
                  <NavLink
                    to="/kanapparu"
                    className="dropdown-item"
                    activeClassName="active">
                    Kanapparu
                  </NavLink>
                  <NavLink
                    to="/kadakkal"
                    className="dropdown-item"
                    activeClassName="active">
                    Kadakkal
                  </NavLink>
                  <NavLink
                    to="/perumon"
                    className="dropdown-item"
                    activeClassName="active">
                    Perumon
                  </NavLink>
                  <NavLink
                    to="/vilathikulam"
                    className="dropdown-item"
                    activeClassName="active">
                    Vilathikulam
                  </NavLink>
                  <NavLink
                    to="/vinayagapuram"
                    className="dropdown-item"
                    activeClassName="active">
                    Vinayagapuram
                  </NavLink>
                  <NavLink
                    to="/ammoor"
                    className="dropdown-item"
                    activeClassName="active">
                    Ammoor
                  </NavLink>
                  <NavLink
                    to="/puliampatty"
                    className="dropdown-item"
                    activeClassName="active">
                    Puliyampatty
                  </NavLink>
                  <NavLink
                    to="/gummidipoondi"
                    className="dropdown-item"
                    activeClassName="active">
                    Gummidipoondi
                  </NavLink>
                  <NavLink
                    to="/mugandanur"
                    className="dropdown-item"
                    activeClassName="active">
                    Mugandanur
                  </NavLink>
                  <NavLink
                    to="/kizhakkambalam"
                    className="dropdown-item"
                    activeClassName="active">
                    Kizhakkambalam
                  </NavLink>
                  <NavLink
                    to="/ponnapally"
                    className="dropdown-item"
                    activeClassName="active">
                    Ponnapally
                  </NavLink>
                  <NavLink
                    to="/periakottai"
                    className="dropdown-item"
                    activeClassName="active">
                    Periakottai
                  </NavLink>
                  <NavLink
                    to="/dindigul"
                    className="dropdown-item"
                    activeClassName="active">
                    Dindigul
                  </NavLink>
                  <NavLink
                    to="/muttom"
                    className="dropdown-item"
                    activeClassName="active">
                    Muttom
                  </NavLink>
                </div>
              </li>

              <li
                className={`nav-item dropdown ${
                  Object.values(formationdata).some((value) =>
                    location.pathname.includes(value)
                  )
                    ? "active"
                    : ""
                }`}>
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdownMenuLink5"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Formation
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink5">
                  <NavLink to="/formation" className="dropdown-item">
                    Formation
                  </NavLink>
                  <NavLink to="/candidacy" className="dropdown-item">
                    Candidacy
                  </NavLink>
                  <NavLink to="/postulancy" className="dropdown-item">
                    Postulancy
                  </NavLink>
                  <NavLink to="/novitiate" className="dropdown-item">
                    Novitiate
                  </NavLink>
                  <NavLink to="/juniorate" className="dropdown-item">
                    Juniorate
                  </NavLink>
                </div>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/vocation-promotion" ? "active" : ""
                }`}>
                <Link to="/vocation-promotion" className="nav-link">
                  Vocation Promotion
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/gallery" ? "active" : ""
                }`}>
                <Link to="/gallery" className="nav-link">
                  Gallery Us
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/contact-us" ? "active" : ""
                }`}>
                <Link to="/contact-us" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
