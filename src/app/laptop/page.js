"use client";

import ProductCard from "@/components/ProductCard";
import React, { useEffect } from "react";
import {
  useGetAllProductQuery,
  useGetProductByCategoryQuery,
} from "@/toolkit/apiSlice";
import { useState } from "react";
import { shuffleArray } from "@/utils/commonFunc";
import CardLoading from "@/components/common/loading";


const Laptop = () => {
  const res = useGetProductByCategoryQuery("laptops");
  const allProductRes = useGetAllProductQuery(100);

  const [data, setData] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    if (res.isSuccess) {
      setData(res.data.products);
    }
    if (allProductRes.isSuccess) {
      const shuffleData = shuffleArray(allProductRes.data.products)
      setAllProducts(shuffleData);
    }
  }, [res,allProductRes]);


  return (
    <>
      <main className="bg-slate-100 text-black pt-5  px-24">
        {res.isLoading ? <CardLoading/> :  !res.isSuccess ? (
          "page error"
        ) : (
          <div className="grid grid-cols-4  gap-10">
            {data.map((el, index) => (
              <div className="" key={index}>
                <ProductCard data={el} />
              </div>
            ))}
          </div>
        )}
        <section className="pb-5">
          <div className="my-10 bg-red-500 text-white py-4 ps-5 rounded-lg">
          <h2 className="font-medium text-xl">Our Trendiong Products 🔥</h2>
          </div>
          {allProductRes.isLoading ? <CardLoading/> : !allProductRes.isSuccess ? (
            "page error"
          ) : (
            <div className="grid grid-cols-4  gap-10">
              {allProducts.slice(0,16).map((el, index) => (
                <div className="" key={index}>
                  <ProductCard data={el} />
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Laptop;
