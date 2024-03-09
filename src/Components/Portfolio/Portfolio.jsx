import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

const Portfolio = () => {

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src='./images/musicapp.png' alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src='./images/sidebar.png' alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src='./images/ecommerce.png' alt="" />     
           </SwiperSlide>
        <SwiperSlide>
        <img src='./images/hoc.png' alt="" />        </SwiperSlide>
      </Swiper>

    </div>
  );
};

export default Portfolio;