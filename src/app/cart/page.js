"use client";
import { useGetAllProductQuery } from "@/toolkit/apiSlice";
import React, { useEffect, useState } from "react";
import { priceWithoutOffer, shuffleArray } from "@/utils/commonFunc";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCartItems,
  removeCartItem,
  updateDiscount,
  updateProductQty,
  updateTotalPrice,
} from "@/toolkit/cartSlice";
import { AiOutlineSafety } from "react-icons/ai";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { setOrderData } from "@/toolkit/orderSlice";
import { setNotification } from "@/toolkit/notifySlice";

const Cart = () => {

  const dispatch = useDispatch();
  const cartDetails = useSelector((state) => state.cartData.cartData);
  const cartTotalPrice = useSelector((state) => state.cartData.totalPrice);
  const cartTotalDiscount = useSelector(
    (state) => state.cartData.totalDiscount
  );
  const { data, isLoading, isSuccess } = useGetAllProductQuery(100);

  const [allProducts, setAllProducts] = useState([]);

  function deliveryDate(apiDate) {
    let random = Math.floor(Math.random() * 9) + 4;
    const parseDate = new Date(apiDate);
    parseDate.setDate(parseDate.getDate() + random);
    const options = { day: "numeric", month: "long", year: "numeric" };
    const futureDateString = parseDate.toLocaleDateString("en-GB", options);

    return futureDateString;
  }

  const today = new Date().toLocaleDateString("en-Gb")

  console.log("data",cartDetails)

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

  const handleOrder = () => {
    const sendData = {
      [today] : cartDetails
    }

    const notify = {
      title: 'Order placed',
      thumbnail: "",
      date: today,
      message: "Your order succesful",
    };

    dispatch(setOrderData(sendData));
    dispatch(clearCartItems());
    dispatch(setNotification(notify))


    let tune  = new Audio('/tune.mp3');
    tune.play();
    console.log("send data ",sendData)
  }

  useEffect(() => {
    if (isSuccess) {
      const shuffleData = shuffleArray(data.products);
      setAllProducts(shuffleData);
    }
  }, [data]);

  return (
    <>
      <main className="min-h-screen mx-20">
        {isLoading ? (
          "loading"
        ) : !isSuccess ? (
          "Page error"
        ) : !cartDetails.length ? (
          <>
            <div className="flex justify-center items-center flex-col w-full h-96 mt-8">
              <img
                width="200"
                height="200"
                src="https://img.icons8.com/nolan/256/shopping-cart.png"
                alt="shopping-cart"
              />

              <h2 className="mt-3 mb-3 text-xl text-gray-400">
                Your <span className="text-yellow-500">Cart</span> is empty !
              </h2>
              <p className="text-slate-400">
                Explore our wide selection and find something you like
              </p>
            </div>
            <section className="pb-10">
              <div className="my-10 bg-red-950 text-white py-4 ps-5 rounded-lg">
                <h2 className="font-medium text-xl">
                  Explore Our Trending Products 🔥
                </h2>
              </div>
              <div className="grid grid-cols-4  gap-10">
                {allProducts.slice(0, 8).map((el, index) => (
                  <div className="" key={index}>
                    <ProductCard data={el} isLoading={isLoading} />
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : (
          <>
            <div className="grid grid-cols-3 gap-8">
              <section className="col-span-2">
                {cartDetails?.length &&
                  cartDetails.map((product, index) => {
                    return (
                      <div
                        key={index}
                        className="max-w-4xl h-52 my-10 flex overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
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
                                <span className="text-green-600">
                                  {deliveryDate(product.date)}
                                </span>
                                <span>
                                  {" "}
                                  |{" "}
                                  {product.price > 700 ? (
                                    <span className="text-green-500">
                                      Free <s className="text-slate-500">120</s>{" "}
                                    </span>
                                  ) : (
                                    <span>120</span>
                                  )}
                                </span>
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
              </section>
              <aside className="col-span-1 relative">
                <div className="sticky top-20">
                  <div className="bg-gray-800 w-full mt-10 rounded-md ">
                    <div className="border-b-2 border-b-slate-500 py-4 px-8 text-lg uppercase text-slate-300">
                      <h2>Price Details</h2>
                    </div>
                    <div className="pt-4 pb-5 px-8 flex justify-between">
                      <p>Price</p>
                      <p>₹ {cartTotalPrice}</p>
                    </div>
                    <div className="pb-5 px-8 flex justify-between">
                      <p>Discount</p>
                      <p className="text-green-500">
                        - &nbsp; ₹ {cartTotalDiscount}
                      </p>
                    </div>
                    <div className="pb-6 mx-8 flex justify-between border-b-2 border-b-slate-600 border-dashed">
                      <p>Delivery Charge</p>
                      {cartTotalPrice > 600 ? (
                        <p className="text-green-500">Free</p>
                      ) : (
                        <p>₹ 120</p>
                      )}
                    </div>
                    <div className="pb-4 mx-8 flex justify-between text-xl mt-4 border-b-2 border-b-slate-600 border-dashed">
                      <h2>Total Amount</h2>
                      <h2>₹ {cartTotalPrice - cartTotalDiscount}</h2>
                    </div>
                    <div className="py-6 px-8 text-green-500 font-medium">
                      <p> You will save ₹ 3434 in this order</p>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-8">
                    <p className="text-slate-500">
                      <AiOutlineSafety size={30} />
                    </p>{" "}
                    <p className="text-slate-500 text-sm">
                      Safe and Secure Payments.Easy returns.100% Authentic
                      products.
                    </p>
                  </div>
                  <div className="pb-10">
                    <Link href="/order">
                      <button onClick={handleOrder} className="uppercase w-full h-12 bg-green-600 hover:bg-green-500 text-white text-lg mt-7 tracking-wider rounded-md font-medium">
                        Buy Now
                      </button>
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Cart;
