import React, { useState, useEffect } from "react";
import axios from "axios";

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
                    Welcome to St Charles Borromeo - Eastern Province
                  </h2>
                </header>
                <div className="entry-content mt-5">
                  "This religious House was founded in 1682 by Adrien Bresy,
                  parish priest of wez. This vigilant pastor, wishing to procure
                  for his parishioners the benefits of a Christian education,
                  invited three pious girls from Lille to whom he added two
                  young persons of his parish"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
