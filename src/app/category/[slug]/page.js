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

const Category = ({ params }) => {
  const { data, isLoading, isSuccess } = useGetProductByCategoryQuery(
    params.slug
  );
  const allProductRes = useGetAllProductQuery(100);

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    if (allProductRes.isSuccess) {
      const shuffleData = shuffleArray(allProductRes.data.products);
      setAllProducts(shuffleData);
    }
  }, [allProductRes]);

  return (
    <>
      <main className="text-black pt-5 px-24">
        <h1 className="text-slate-500 font-medium text-4xl ml-3  mb-8">
          Top offers on{" "}
          <span className="capitalize text-pink-600"> {params.slug}</span>
        </h1>
        {!isSuccess ? (
          "server error"
        ) : (
          <div className="grid grid-cols-4  gap-10">
            {data.products.map((el, index) => (
              <div className="" key={index}>
                <ProductCard data={el} isLoading={isLoading} />
              </div>
            ))}
          </div>
        )}

        <section className="pb-5">
          <div className="my-10 bg-red-950 text-white py-4 ps-5 rounded-lg">
            <h2 className="font-medium text-xl">Our Trendiong Products 🔥</h2>
          </div>
          {allProductRes.isLoading ? (
            <CardLoading />
          ) : !allProductRes.isSuccess ? (
            "page error"
          ) : (
            <div className="grid grid-cols-4  gap-10">
              {allProducts.slice(0, 16).map((el, index) => (
                <div className="" key={index}>
                  <ProductCard data={el} isLoading={isLoading} />
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Category;
