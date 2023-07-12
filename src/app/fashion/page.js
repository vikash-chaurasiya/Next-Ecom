"use client";

import ProductCard from "@/components/ProductCard";
import React, { useEffect } from "react";
import { useGetAllProductQuery } from "@/toolkit/apiSlice";
import { useState } from "react";
import { shuffleArray } from "@/utils/commonFunc";
import CardLoading from "@/components/common/loading";

const Fashion = () => {
  const { data, isLoading, isSuccess } = useGetAllProductQuery(100);

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      const shuffleData = shuffleArray(data.products);
      setAllProducts(shuffleData);
    }
  }, [data]);

  return (
    <>
      <main className="bg-slate-100 text-black pt-5  px-24">
        {isLoading ? (
          <CardLoading />
        ) : !isSuccess ? (
          "Page Error"
        ) : (
          <div className="grid grid-cols-4  gap-10">
            {allProducts
              .filter(
                (item) =>
                  item.category === "tops" ||
                  item.category === "mens-shirts" ||
                  item.category === "mens-shoes" ||
                  item.category === "womens-dresses" ||
                  item.category === "womens-shoes" ||
                  item.category === "mens-watches" ||
                  item.category === "womens-bags" ||
                  item.category === "womens-watches"
              )
              .map((el, index) => (
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
          {isLoading ? (
            <CardLoading />
          ) : !isSuccess ? (
            "Loading"
          ) : (
            <div className="grid grid-cols-4  gap-10">
              {allProducts.slice(0, 10).map((el, index) => (
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

export default Fashion;
