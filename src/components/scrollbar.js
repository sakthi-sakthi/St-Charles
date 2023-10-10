import React from "react";

function Scrollbar() {
  return (
    <>
      <div className="scrollbar">
        <div className="container">
          <div className="row flex-wrap justify-content-center justify-content-lg-between align-items-lg-center">
            <div className="col-12 col-lg-2 d-flex">
              {/* <label className="buttonflash" style={{ position: "relative" }}>
                Flash News
              </label> */}
              <div class="label ripple">Flash News</div>
            </div>
            <div className="col-12 col-lg-10 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
              <div className="marqueenews">
                <div className="marquee">
                  <p>
                    <img
                      src="images/logos/output-onlinegiftools.gif"
                      style={{
                        maxWidth: "40px",
                      }}
                      alt=""
                    />
                    Welcome to The Sisters of St. Charles Borromeo Eastern
                    province
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scrollbar;
