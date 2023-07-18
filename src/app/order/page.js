"use client";
import {
  useGetAllCategoryQuery,
  useGetAllProductQuery,
} from "@/toolkit/apiSlice";
import React from "react";
import { useSelector } from "react-redux";

const Order = () => {


  const data = useSelector((state) => state.orderData.order);
  const { isLoading, isSuccess } = useGetAllProductQuery(100);


  function deliveryDate(apiDate) {
    let random = Math.floor(Math.random() * 9) + 4;
    const parseDate = new Date(apiDate);
    parseDate.setDate(parseDate.getDate() + random);
    const options = { day: "numeric", month: "long", year: "numeric" };
    const futureDateString = parseDate.toLocaleDateString("en-GB", options);

    return futureDateString;
  }

  console.log("thos is order data", data);

  return (
    <>
      <main className="mx-24">
        {isLoading ? (
          "Loading"
        ) : !isSuccess ? (
          "page error"
        ) : data.length ? (
          <>
            <section className="rounded-sm h-32 w-full flex items-center justify-center bg-gray-800">
              <h1 className="text-3xl ">Thankyou for shopping with us 😍</h1>
            </section>
            <section>
              {data.map((el) =>
                Object.keys(el).map((key) =>
                  el[key].map((item) => (
                    <div
                      key={item.id}
                      className="grid grid-flow-row grid-cols-12 h-40 p-6 bg-gray-900 my-10 rounded-sm"
                    >
                      <div className="object-cover col-span-2">
                        <img
                          src={item.thumbnail}
                          alt="product"
                          className="h-28 w-32 rounded-sm"
                        />
                      </div>
                      <div className="col-span-5">
                        <h1>{item.title}</h1>
                        <p>description</p>
                      </div>
                      <div className="col-span-2">
                        <p>₹ {item.price}</p>
                      </div>
                      <div className=" col-span-3">
                        <p className="mb-6">Delivery on {deliveryDate(item.date)}</p>
                        <p className="text-gray-600">Your item has been shipped</p>
                      </div>
                    </div>
                  ))
                )
              )}
            </section>
          </>
        ) : (
          <>
            <div className="min-h-screen flex items-center justify-center">
              <h3>Ohh! Please Order I am Waitng </h3>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Order;
