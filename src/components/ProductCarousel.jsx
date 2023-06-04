import React from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";

const ProductCarousel = () => {
  return (
    <>
      <main className="m-2 pt-1 h-auto bg-white rounded-sm shadow-md">
        <section className="px-8 py-3 text-slate-800 flex justify-between align-middle border-b-2">
          <div className="">
            <h2 className="font-semibold text-xl">Suggested Items</h2>
            <h6 className="font-medium text-sm mt-1 text-slate-400">
              Based On Your Activity
            </h6>
          </div>
          <div>
            <button className="mt-2 rounded-sm text-white bg-blue-600 hover:bg-blue-500 shadow-md h-10 w-24">
              View All
            </button>
          </div>
        </section>
        <section className="mt-2">
          <Swiper
            slidesPerView={6}
            spaceBetween={8}
            FreeMode={true}
            navigation={true}
            modules={[FreeMode,Navigation]}
            slidesPerGroup={6}
            className="mySwiper"
          >
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
          </Swiper>
        </section>
      </main>
    </>
  );
};

export default ProductCarousel;
