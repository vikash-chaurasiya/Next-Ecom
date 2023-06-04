import React from "react";
import CategoryCard from "./CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode,Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import 'swiper/css/navigation'

const CategoryCraousel = () => {
  return (
    <>
      <main className="mx-2  h-80 bg-white shadow-md rounded-sm">
        <div className="rounded-s-sm float-left text-center h-full w-64 bg-slate-400 text-slate-900">
          <h1 className="mt-16 text-3xl">Best of <br /> Electronics</h1>
          <button className="mt-7 bg-blue-600 text-white shadow-md hover:bg-blue-500 transition-all rounded-sm text-sm w-24 h-10">
            View All
          </button>
        </div>
        <div className="block  pt-3">
          <Swiper
            slidesPerView={5}
            spaceBetween={8}
            freeMode={true}
            navigation={true}
            modules={[FreeMode,Navigation]}
            className="mySwiper"
            slidesPerGroup={5}
          >
            <SwiperSlide>
              <CategoryCard
                heading={"Premium PowerBank"}
                subHeading={"From ₹ 799"}
                lastHeading={"Mi, realme & more"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard
                heading={"Premium PowerBank"}
                subHeading={"From ₹ 799"}
                lastHeading={"Mi, realme & more"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard
                heading={"Premium PowerBank"}
                subHeading={"From ₹ 799"}
                lastHeading={"Mi, realme & more"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard
                heading={"Premium PowerBank"}
                subHeading={"From ₹ 799"}
                lastHeading={"Mi, realme & more"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard
                heading={"Premium PowerBank"}
                subHeading={"From ₹ 799"}
                lastHeading={"Mi, realme & more"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard
                heading={"Premium PowerBank"}
                subHeading={"From ₹ 799"}
                lastHeading={"Mi, realme & more"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard
                heading={"Premium PowerBank"}
                subHeading={"From ₹ 799"}
                lastHeading={"Mi, realme & more"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </main>
    </>
  );
};

export default CategoryCraousel;
