import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="home-page-welcome">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 order-2 order-lg-1">
              <div className="welcome-content">
                <header className="entry-header">
                  <h2 className="entry-title">
                    Welcome to St Charles Borromeo <br />
                    Eastern Province
                  </h2>
                </header>
                <div className="entry-content mt-2">
                  "This religious House was founded in 1682 by Adrien Bresy,
                  parish priest of wez. This vigilant pastor, wishing to procure
                  for his parishioners the benefits of a Christian education,
                  invited three pious girls from Lille to whom he added two
                  young persons of his parish"
                </div>
                <Link to="https://stcharlesborromeo.pages.dev/history" target="_blank">
                  <center>
                    <button className="btn btn-primary mt-3">Read More</button>
                  </center>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
