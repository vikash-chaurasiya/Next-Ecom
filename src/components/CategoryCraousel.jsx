import React from "react";
import CategoryCard from "./CategoryCard";
import "../styles/globals.css";
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation,FreeMode } from "swiper";

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from "next/link";



const CategoryCraousel = ({
  bgUrl,
  subHeading,
  title,
  data,
  isLoading,
  isSuccess,
  category,
  link,
}) => {
  return (
    <>
      <main className="mx-2 h-96 bg-gray-900 shadow-md rounded-sm">
        <div className="rounded-s-sm float-left text-center h-full w-64  text-slate-900 relative">
          <div className="z-20 absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-white  font-medium mt-2 text-3xl z-20">
              Best ofs
            </h1>
            <h2 className="text-white font-medium text-3xl mt-2 z-20">
              {title}
            </h2>
            <Link href={`category/${link}`}>
            <button className="mt-7 bg-blue-600 text-white shadow-md hover:bg-blue-500 transition-all rounded-sm text-sm w-24 h-10">
              View All
            </button>
            </Link>
          </div>

          <img
            src={bgUrl}
            alt="bg"
            style={{ filter: "blur(1px)" }}
            className="absolute top-0 left-0 right-0 bottom-0 z-10 h-full w-full"
          />
        </div>

        {isLoading ? (
          "Loading"
        ) : !isSuccess ? (
          "Page Error"
        ) : (
          <div className="block  pt-3">
            <Swiper
              slidesPerView={5}
              spaceBetween={8}
              freeMode={true}
              navigation={true}
              modules={[FreeMode, Navigation]}
              className="mySwiper"
              slidesPerGroup={5}
            >
              {data
                .filter((item) => item.category === category)
                .map((el, index) => {
                  return (
                    <div key={el.id} className="">
                      <SwiperSlide key={index}>
                        <CategoryCard
                          id={el.id}
                          heading={el.title}
                          imgUrl={el.thumbnail}
                          price={"From ₹" + el.price}
                          subHeading={subHeading}
                          isLoading={isLoading}
                          isSuccess={isSuccess}
                        />
                      </SwiperSlide>
                    </div>
                  );
                })}
            </Swiper>
          </div>
        )}
      </main>
    </>
  );
};

export default CategoryCraousel;
