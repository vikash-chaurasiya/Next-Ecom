"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "../styles/globals.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Craousel = () => {
  return (
    <>
      <div className="bg-slate-100 shadow-lg shadow-slate-400 p-2">
        <Swiper
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
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
          <SwiperSlide>
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
