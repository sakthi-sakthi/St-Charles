import React, { useState } from "react";

function Scrollbar() {
  const [isScrollingAllowed, setIsScrollingAllowed] = useState(true);

  const stopScroll = () => {
    setIsScrollingAllowed(false);
  };

  const allowScroll = () => {
    setIsScrollingAllowed(true);
  };
  return (
    <>
      <div className="scrollbar">
        <div className="container">
          <div className="row flex-wrap justify-content-center justify-content-lg-between align-items-lg-center">
            <div className="col-4 col-lg-2 d-flex">
              <div class="label ripple">Flash News</div>
            </div>
            <div className="col-8 col-lg-10 d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
              <div className="marqueenews">
                <div className="marquee">
                  <p
                    onMouseEnter={stopScroll}
                    onMouseLeave={allowScroll}
                    onTouchStart={stopScroll}
                    onTouchEnd={allowScroll}
                    style={{ overflow: isScrollingAllowed ? "auto" : "hidden" }}
                  >
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
