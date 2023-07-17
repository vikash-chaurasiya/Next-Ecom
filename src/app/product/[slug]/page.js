"use client";
import { useGetProductByIdQuery } from "@/toolkit/apiSlice";
import { setCartData, updateDiscount, updateTotalPrice } from "@/toolkit/cartSlice";
import { setWatchlist } from "@/toolkit/watchlistSlice";
import { priceWithoutOffer } from "@/utils/commonFunc";
import React from "react";
import { useDispatch } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Product = ({ params }) => {

  const dispatch = useDispatch();
  const { data, isLoading, isSuccess } = useGetProductByIdQuery(params.slug);


  const randomReviews = Math.floor(Math.random() * 200) + 50;
  const date = new Date();
  const options = { day: "numeric", month: "long", year: "numeric" };
  const today = date.toLocaleDateString("en-GB",options)


  const addToCart =(item)=>{
    const sendData = {
      id : item.id,
      title : item.title,
      brand : item.brand,
      price : item.price,
      category : item.category,
      discount : item.discountPercentage,
      stock : item.stock,
      thumbnail : item.thumbnail,
      qty :  1,
      date : today,
    };
    const notify = {
      title : item.title,
      thumbnail : item.thumbnail,
      date : todayDate,
      message : "added to cart"
    }
    dispatch(setCartData(sendData));
    dispatch(updateDiscount())
    dispatch(updateTotalPrice())
    dispatch(setNotification(notify))

    console.log(sendData);
  }

  const addToWhislist = (id) => {
    dispatch(setWatchlist(id));
  }

  return (
    <>
      {isLoading ? (
        "Loading"
      ) : !isSuccess ? (
        "page error"
      ) : (
        <section className="text-gray-300 body-font overflow-hidden mx-20">
          <div className="container px-5 py-12 mx-auto">
            <div className="lg:w-6/6 mx-auto grid grid-cols-2 gap-10">
              <div className="w-5/6 ml-auto">
                <Carousel
                  showThumbs={true}
                  showIndicators={false}
                  showStatus={false}
                >
                  {data.images.map((el, index) => (
                    <div key={index} className="w-full h-96">
                      <img src={el} alt="product" className="w-full h-full rounded-sm" />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="bg-gray-900 lg:w-5/5 w-full lg:pl-10 lg:py-6 mt-6 pe-20 max-w-xl lg:mt-0">
                <h2 className="mb-4 mt-1 text-base title-font text-gray-500 tracking-widest capitalize">
                  {data.brand}
                </h2>
                <h1 className="mb-5 text-gray-100 text-3xl title-font font-medium mb-1">
                  {data.title}
                </h1>
                <div className="flex mb-6 mt-2">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="text-gray-600 ml-3">
                      {randomReviews} Reviews
                    </span>
                  </span>
                  <span className="flex ml-3 gap-2 pl-3 items-center border-l-2 text-gray-500 border-gray-200 space-x-2s">
                    <span className="capitalize">stock</span>
                    <span className="text-gray-200">{data.stock}</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500 mx-2">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <p className="leading-relaxed mb-3">{data.description}</p>
                <div className="flex mt-8  items-center pb-8 border-b-2 border-gray-500 mb-8">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select className="text-black rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">
                    ₹ {data.price}
                    <s className="text-xl mx-5 text-slate-400 ">
                      ₹
                      {priceWithoutOffer(data?.price, data?.discountPercentage)}
                    </s>
                    <span className="text-green-700 text-xl">
                      {data?.discountPercentage}% off
                    </span>
                  </h1>
                </div>
                <div className="flex mt-8 pb-10">
                  <button onClick={()=>addToCart(data)} className="capitalize text-white w-2/4 h-12 text-base bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Add to Cart
                  </button>
                  <button onClick={()=>addToWhislist(data.id)} className="rounded-full w-11 h-11 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-6">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Product;
