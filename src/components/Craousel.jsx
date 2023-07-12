"use client";
import React from "react";
import { Autoplay,Navigation, Pagination } from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react'
import "../styles/globals.css";
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';


const Craousel = () => {



  return (
    <>
      <div className="bg-slate-200  shadow-slate-400 p-2">
        <Swiper
          navigation={true}
          modules={[Autoplay,Pagination, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
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
          <div className="swiper-wrapper">
            <div className="bannerImg">
              <img src="/banner4.jpg" alt="banner" />
            </div>
          </div>
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
