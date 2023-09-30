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
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                  className="rounded-circle img-fluid"
                  alt="Maria Smantha"
                />
              </div>
              <MDBCardBody>
                <h4 className="mb-4">Maria Smantha</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  Lorem ipsum dolor sit amet eos adipisci, consectetur
                  adipisicing elit.
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
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                  className="rounded-circle img-fluid"
                  alt="Lisa Cudrow"
                />
              </div>
              <MDBCardBody>
                <h4 className="mb-4">Lisa Cudrow</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  Neque cupiditate assumenda in maiores repudi mollitia
                  architecto.
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
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                  className="rounded-circle img-fluid"
                  alt="John Smith"
                />
              </div>
              <MDBCardBody>
                <h4 className="mb-4">John Smith</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  Delectus impedit saepe officiis ab aliquam repellat rem unde
                  ducimus.
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
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                  className="rounded-circle img-fluid"
                  alt="Lisa Cudrow"
                />
              </div>
              <MDBCardBody>
                <h4 className="mb-4">Lisa Cudrow</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  Neque cupiditate assumenda in maiores repudi mollitia
                  architecto.
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
