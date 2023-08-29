import React from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";

const ProductCarousel = ({ data, isLoading, isSuccess, start, end }) => {
  return (
    <>
      <main className="m-2 pt-1 h-auto rounded-sm shadow-md">
        <section className="px-8 py-2 text-slate-800 flex justify-between align-middle bg-white border-gray-600 border-b-2">
          <div className="">
            <h2 className="font-semibold text-lg text-black">Suggested Items</h2>
            <h6 className="font-medium text-sm  text-slate-600">
              Based On Your Activity
            </h6>
          </div>
          <div>
            <Link href={"category/all"}>
              <button className="mt-2 text-sm rounded-sm text-white bg-blue-600 hover:bg-blue-500 shadow-md h-9 w-24">
                View All
              </button>
            </Link>
          </div>
        </section>
        <section className="pt-2 bg-gray-500">
          {isLoading ? (
            "Loading"
          ) : !isSuccess ? (
            "Page Error"
          ) : (
            <Swiper
              slidesPerView={6}
              spaceBetween={8}
              navigation={true}
              modules={[Navigation]}
              slidesPerGroup={6}
              breakpoints = {{
                // when window width is >= 320px
                320: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 3,
                  spaceBetween: 30
                },
                // when window width is >= 640px
                840: {
                  slidesPerView: 4,
                  spaceBetween: 40
                }
              }}
              className="mySwiper"
            >
              {data.slice(start, end).map((el, index) => (
                <div key={el.id}>
                  <SwiperSlide key={index}>
                    <ProductCard
                      data={el}
                      isLoading={isLoading}
                      isSuccess={isSuccess}
                    />
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          )}
        </section>
      </main>
    </>
  );
};

export default ProductCarousel;
