"use client";
import { useGetAllProductQuery } from "@/toolkit/apiSlice";
import React, { useState } from "react";
import { priceWithoutOffer } from "@/utils/commonFunc";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCartItem,
  updateDiscount,
  updateProductQty,
  updateTotalPrice,
} from "@/toolkit/cartSlice";
import { AiOutlineSafety } from "react-icons/ai";

const Cart = () => {
  const dispatch = useDispatch();
  const cartDetails = useSelector((state) => state.cartData.cartData);
  const cartTotalPrice = useSelector((state) => state.cartData.totalPrice);
  const cartTotalDiscount = useSelector(
    (state) => state.cartData.totalDiscount
  );
  const { data, isLoading, isSuccess } = useGetAllProductQuery(100);


  console.log("data", cartDetails);

  function deliveryDate(apiDate){

    let random = Math.floor(Math.random()*9) +4;

    const parseDate = new Date(apiDate);
    parseDate.setDate(parseDate.getDate() + random);
    const options = { day: "numeric", month: "long", year: "numeric" };
    const futureDateString = parseDate.toLocaleDateString("en-GB", options);

    return futureDateString;
  }


  const removeProduct = (id) => {
    console.log("id", id);
    dispatch(removeCartItem(id));
    dispatch(updateTotalPrice());
    dispatch(updateDiscount());
  };

  const updateQty = (id, newQty, stock) => {
    if (newQty >= 1 && newQty <= 10 && newQty <= stock) {
      dispatch(updateProductQty({ id: id, quantity: newQty }));
      dispatch(updateTotalPrice());
      dispatch(updateDiscount());
    }
  };

  return (
    <>
      <main className="grid min-h-screen grid-cols-3 mx-20">
        <section className="col-span-2">
          <div>
            {isLoading ? (
              "loading"
            ) : !isSuccess ? (
              "Page error"
            ) : (
              <>
                {cartDetails?.length &&
                  cartDetails.map((product, index) => {
                    // const currentQty = qty[product.id] || product.qty;
                    return (
                      <div
                        key={index}
                        className="max-w-4xl h-60  my-10 flex overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
                      >
                        <div className="h-60 w-2/6 bg-red-600">
                          <img
                            className="object-cover w-full h-full "
                            src={product.thumbnail}
                            alt="NIKE AIR"
                          />
                        </div>
                        <div className="px-6 flex w-3/4 flex-col py-2">
                          <div>
                            <h1 className="text-xl my-2 font-semibold text-gray-800 uppercase dark:text-white">
                              {product.title}
                            </h1>
                            <div className="text-sm flex gap-4 mt-3">
                              <p className="text-slate-400">
                                Brand :
                                <span className="text-white">
                                  {product.brand}
                                </span>
                              </p>
                              <p className="text-slate-400">
                                Rating :
                                <span className="text-white">
                                  {" "}
                                  {product.rating}
                                </span>
                              </p>
                              <p className="text-slate-400">
                                Available Stock :
                                <span className="text-white">
                                  {product.stock}
                                </span>
                              </p>
                            </div>
                            <div className="text-slate-400 text-sm mt-3">
                              <p>
                                Delivery by &nbsp;
                                <span className="text-green-600">{deliveryDate(product.date)}</span>
                                <span> | {product.price > 700 ? <span className="text-green-500">Free <s className="text-slate-500">120</s> </span> : <span>120</span>}</span>
                              </p>
                            </div>
                          </div>

                          <div className="flex mt-auto mb-3 items-center justify-between px-4 py-2 bg-gray-900">
                            <h1 className="text-lg font-bold text-white">
                              ₹ {product.price}
                              <s className="text-sm mx-2 text-slate-400">
                                ₹
                                {priceWithoutOffer(
                                  product?.price,
                                  product?.discount
                                )}
                              </s>
                              <span className="text-green-700 text-sm">
                                {product?.discount}% off
                              </span>
                            </h1>
                            <div className="custom-number-input  w-28">
                              <div className="flex flex-row h-9 w-full rounded-lg relative bg-transparent mt-1">
                                <button
                                  onClick={() =>
                                    updateQty(
                                      product.id,
                                      product.qty - 1,
                                      product.stock
                                    )
                                  }
                                  className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-14 rounded-l cursor-pointer outline-none"
                                >
                                  <span className="m-auto text-2xl font-thin">
                                    −
                                  </span>
                                </button>
                                <div className="w-16 text-lg bg-gray-200 text-center text-black font-semibold pt-1">
                                  {product.qty}
                                </div>
                                <button
                                  onClick={() =>
                                    updateQty(
                                      product.id,
                                      product.qty + 1,
                                      product.stock
                                    )
                                  }
                                  className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-14 rounded-r cursor-pointer"
                                >
                                  <span className="m-auto text-2xl font-thin">
                                    +
                                  </span>
                                </button>
                              </div>
                            </div>
                            <div className="flex gap-3">
                              <button
                                className="px-2 h-9 py-1 text-xs font-semibold text-white tracking-widest uppercase transition-colors duration-300 transform bg-red-500 rounded hover:text-black hover:bg-red-400 focus:bg-gray-400 focus:outline-none"
                                onClick={() => removeProduct(product.id)}
                              >
                                Remove
                              </button>
                              {/* <button
                                className="px-2 h-9 py-1 text-xs font-semibold text-slate-700 tracking-widest uppercase transition-colors duration-300 transform bg-slate-300 rounded hover:text-black hover:bg-slate-400 focus:bg-gray-400 focus:outline-none"
                                onClick={() => removeProduct(product.id)}
                              >
                                Save for latter
                              </button> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </>
            )}
          </div>
        </section>
        <aside className="col-span-1">
          <div className="bg-gray-800 w-full mt-10 rounded-md">
            <div className="border-b-2 border-b-slate-500 py-4 px-8 text-xl uppercase text-slate-300">
              <h2>Price Details</h2>
            </div>
            <div className="pt-6 pb-5 px-8 flex justify-between">
              <p>Price</p>
              <p>₹ {cartTotalPrice}</p>
            </div>
            <div className="pb-6 px-8 flex justify-between">
              <p>Discount</p>
              <p className="text-green-500">- &nbsp; ₹ {cartTotalDiscount}</p>
            </div>
            <div className="pb-6 mx-8 flex justify-between border-b-2 border-b-slate-600 border-dashed">
              <p>Delivery Charge</p>
              {cartTotalPrice > 600 ? (
                <p className="text-green-500">Free</p>
              ) : (
                <p>₹ 120</p>
              )}
            </div>
            <div className="pb-6 mx-8 flex justify-between text-xl mt-7 border-b-2 border-b-slate-600 border-dashed">
              <h2>Total Amount</h2>
              <h2>₹ {cartTotalPrice - cartTotalDiscount}</h2>
            </div>
            <div className="py-4 px-8 text-green-500 font-medium">
              <p> You will save ₹ 3434 in this order</p>
            </div>
          </div>
          <div className="flex gap-3 mt-8">
            <p className="text-slate-500">
              <AiOutlineSafety size={34} />
            </p>{" "}
            <p className="text-slate-500">
              Safe and Secure Payments.Easy returns.100% Authentic products.
            </p>
          </div>
        </aside>
      </main>
    </>
  );
};

export default Cart;
