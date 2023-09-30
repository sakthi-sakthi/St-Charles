import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import { MDBCard, MDBCardBody, MDBContainer, MDBIcon } from "mdb-react-ui-kit";

export default function App() {
  const swiperRef = React.createRef();

  useEffect(() => {
    new Swiper(swiperRef.current, {
      slidesPerView: 3, // Set the number of slides to display at once
      spaceBetween: 20, // Optional: Add space between slides
      autoplay: {
        delay: 5000,
      },
      keyboard: {
        enabled: true,
      },
    });
  }, [swiperRef]);

  return (
    <MDBContainer className="py-5">
      <div className="section-heading">
        <h2 className="entry-title">Testimonials</h2>
      </div>
      <div className="swiper-container" ref={swiperRef}>
        <div className="swiper-wrapper">
          {/* Slide 1 */}
          <div className="swiper-slide">
            <MDBCard className="testimonial-card">
              <div
                className="card-up"
                style={{ backgroundColor: "#9d789b" }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <img
                  src="images/logos/t1.png"
                  className="rounded-circle img-fluid"
                  alt="Ms. G.Abineya"
                />
              </div>
              <MDBCardBody>
                <h4 className="mb-4">Ms. G.Abineya</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  St. Charles College of Education is an amazing institute. The
                  campus is extraordinarily beautiful; the professors are
                  outstanding and professional. The alumni are very supportive.
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>

          {/* Slide 2 */}
          <div className="swiper-slide">
            <MDBCard className="testimonial-card">
              <div
                className="card-up"
                style={{ backgroundColor: "#7a81a8" }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <img
                  src="images/logos/t2.png"
                  className="rounded-circle img-fluid"
                  alt="Ms.Jesintha"
                />
              </div>
              <MDBCardBody>
                <h4 className="mb-4">Ms.Jesintha</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon fas icon="quote-left" className="pe-2" />I am very
                  grateful to the Sisters of St Charles who were instrumental
                  for the bright future that I am enjoying now. They brought me
                  from lower level to the higher level in the society by giving
                  education.
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>

          {/* Slide 3 */}
          <div className="swiper-slide">
            <MDBCard className="testimonial-card">
              <div
                className="card-up"
                style={{ backgroundColor: "#6d5b98" }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <img
                  src="images/logos/t3.png"
                  className="rounded-circle img-fluid"
                  alt="Ms.Betsy"
                />
              </div>
              <MDBCardBody>
                <h4 className="mb-4">Ms.Betsy</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon fas icon="quote-left" className="pe-2" />I am very
                  grateful to the Sisters of St Charles who were instrumental
                  for the bright future that I am enjoying now. They brought me
                  from lower level to the higher level in the society by giving
                  education.
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>

          {/* Slide 4 */}
          <div className="swiper-slide">
            <MDBCard className="testimonial-card">
              <div
                className="card-up"
                style={{ backgroundColor: "#7a81a8" }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <img
                  src="images/logos/t1.png"
                  className="rounded-circle img-fluid"
                  alt="Ms. G.Abineya"
                />
              </div>
              <MDBCardBody>
                <h4 className="mb-4">Ms. G.Abineya</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  St. Charles College of Education is an amazing institute. The
                  campus is extraordinarily beautiful; the professors are
                  outstanding and professional. The alumni are very supportive.
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
        {/* 
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div> */}
      </div>
    </MDBContainer>
  );
}
