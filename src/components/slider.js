import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";

function Slider() {
  const slideshowRef = useRef(null);
  // const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: 1,
      img: "images/logos/s1.jpg",
      title: "Bring water to the children 1",
      content:
        "  Lorem ipsum dolor sit amet, consectetur adipiscingelit. Mauris tempus vestibulum mauris.",
    },
    {
      id: 2,
      img: "images/logos/s2.png",
      title: "Bring water to the children 2",
      content:
        "  Lorem ipsum dolor sit amet, consectetur adipiscingelit. Mauris tempus vestibulum mauris.",
    },
    {
      id: 3,
      img: "images/logos/s3.png",
      title: "Bring water to the children 3",
      content:
        "  Lorem ipsum dolor sit amet, consectetur adipiscingelit. Mauris tempus vestibulum mauris.",
    },
  ];

  useEffect(() => {
    const slides = slideshowRef.current.querySelectorAll(".swiper-slide");

    const swiper = new Swiper(slideshowRef.current, {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 1,
      spaceBetween: 20,
      on: {
        slideChange: () => {
          // setCurrentSlide(swiper.realIndex);
        },
      },
    });

    const interval = setInterval(() => {
      swiper.slideNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      swiper.destroy();
    };
  }, []);

  return (
    <div className="swiper-container hero-slider" ref={slideshowRef}>
      <div className="swiper-wrapper">
        {data?.map((data) => (
          <div className="swiper-slide hero-content-wrap" key={data.id}>
            <img src={data.img} alt="Bring water to the children" />
            <div className="hero-content-overlay position-absolute w-100 h-100">
              <div className="container h-100"> </div>
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-button-next" />
      <div className="swiper-button-prev" />
    </div>
  );
}

export default Slider;
