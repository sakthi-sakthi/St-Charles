import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import axios from "axios";

function Slider() {
  const slideshowRef = useRef(null);
  const [sliderData, setSliderData] = useState([]); // Initialize as an empty array

  useEffect(() => {
    // Fetch data from your API
    axios
      .get("http://127.0.0.1:8000/api/get/slider")
      .then((response) => {
        setSliderData(response.data.data);
        initializeSlider();
      })
      .catch((error) => {
        console.error("Error fetching slider data:", error);
      });
  }, []);

  const initializeSlider = () => {
    const swiper = new Swiper(slideshowRef.current, {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 1,
      spaceBetween: 20,
    });

    const interval = setInterval(() => {
      swiper.slideNext();
    }, 8000);

    return () => {
      clearInterval(interval);
      swiper.destroy();
    };
  };

  return (
    <div className="swiper-container hero-slider" ref={slideshowRef}>
      <div className="swiper-wrapper">
        {sliderData?.map((item, index) => (
          <div className="swiper-slide hero-content-wrap" key={index}>
            <img src={item?.image} alt={`Slide ${index + 1}`} />
            <div className="hero-content-overlay position-absolute w-100 h-100">
              <div className="container h-100"></div>
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
