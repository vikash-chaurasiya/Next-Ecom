"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Craousel = () => {
  return (
    <>
      <div className="bg-slate-200  shadow-slate-400 p-2">
        <Swiper
          // slidesPerView={1}
          spaceBetween={0}
          navigation={true}
          centeredSlides={true}
          modules={[Navigation,Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bannerImg">
              <img src="/banner1.jpg" alt="banner" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bannerImg">
              <img src="/banner2.jpg" alt="banner" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bannerImg">
              <img src="/banner3.jpg" alt="banner" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-wrapper">
            <div className="bannerImg">
              <img src="/banner4.jpg" alt="banner" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bannerImg">
              <img src="/banner5.jpg" alt="banner" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bannerImg">
              <img src="/banner6.jpg" alt="banner" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bannerImg">
              <img src="/banner7.jpg" alt="banner" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bannerImg">
              <img src="/banner8.jpg" alt="banner" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Craousel;
