"use client";
import { useGetAllProductQuery } from "@/toolkit/apiSlice";
import { setCartData, setCartProduct, updateDiscount, updateTotalPrice } from "@/toolkit/cartSlice";
import { setNotification } from "@/toolkit/notifySlice";
import { removeWishlistId } from "@/toolkit/watchlistSlice";
import { priceWithoutOffer } from "@/utils/commonFunc";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = () => {

  const dispatch = useDispatch();
  const dataId = useSelector((state) => state.watchlist);
  const cart = useSelector((state)=>state.cartData.cartData)
  const { data, isLoading, isSuccess } = useGetAllProductQuery(100);

  const [productId, setProductId] = useState([]);
  const [products, setProducts] = useState([]);


  console.log("this is cart data",cart)


  const [qty, setQty] = useState({});

  const removeProduct = (id) => {
    dispatch(removeWishlistId(id));
  };

  const today = new Date();
  const options = { day: "numeric", month: "long", year: "numeric" };
  const todayDate = today.toLocaleDateString("en-GB", options);

  const updateQty = (id, newQty) => {
    if (newQty >= 0 && newQty <= 10) {
      setQty((prev) => ({
        ...prev,
        [id]: newQty,
      }));
    }
  };

  const addToCart = (item) => {
    const sendData = {
      id : item.id,
      title : item.title,
      brand : item.brand,
      price : item.price,
      category : item.category,
      discount : item.discountPercentage,
      stock : item.stock,
      thumbnail : item.thumbnail,
      qty : qty[item.id]?? 1,
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
    // dispatch(setNotification(notify))

    console.log(sendData);
  };

  useEffect(() => {
    setProductId(dataId.watchlistId);
    if (isSuccess) {
      setProducts(data.products);
    }

  }, [data, dataId]);

  return (
    <>
      <main className="text-white ps-10 pt-8 min-h-screen min-w-full bg-gray-900 flex flex-col gap-8 pb-10">
        <div className="h-full w-full ">
          <h2 className="text-3xl font-semibold">My Wishlist</h2>
        </div>

        {isLoading ? (
          "loading"
        ) : !isSuccess ? (
          "Page error"
        ) : (
          <>
            {products
              .filter((pro) => productId.includes(pro.id))
              .map((product, index) => {
                const currentQty = qty[product.id] || 0;
                return (
                  <div
                    key={index}
                    className="max-w-4xl h-60 flex overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
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
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                          {product.description}
                        </p>
                        <div className="text-sm flex gap-4 mt-3">
                          <p className="text-slate-400">
                            Brand :
                            <span className="text-white">{product.brand}</span>
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
                            <span className="text-white">{product.stock}</span>
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
                              product?.discountPercentage
                            )}
                          </s>
                          <span className="text-green-700 text-sm">
                            {product?.discountPercentage}% off
                          </span>
                        </h1>
                        <div className="custom-number-input  w-28">
                          <div className="flex flex-row h-9 w-full rounded-lg relative bg-transparent mt-1">
                            <button
                              onClick={() =>
                                updateQty(
                                  product.id,
                                  currentQty - 1
                                )
                              }
                              className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-14 rounded-l cursor-pointer outline-none"
                            >
                              <span className="m-auto text-2xl font-thin">
                                −
                              </span>
                            </button>
                            <div className="w-16 text-lg bg-gray-200 text-center text-black font-semibold pt-1">
                              {qty[product.id] || 1}
                            </div>
                            <button
                              onClick={() =>
                                updateQty(
                                  product.id,
                                  currentQty + 1
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
                          {
                            cart?.some((item) => item.productId === product.id ) ? (
                              <Link href={"/cart"}>
                              <button
                              className="px-2 h-9 w-24 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-yellow-100 rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                            >
                              Go to Cart
                            </button>
                            </Link>
                            ) : (
                              <button
                              onClick={() => addToCart(product)}
                              className="px-2 py-1  text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                            >
                              add to cart
                            </button>
                              )
                            }

                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </>
        )}
      </main>
    </>
  );
};

export default Wishlist;
