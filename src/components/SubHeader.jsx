"use client";

import { useGetAllCategoryQuery, useGetAllProductQuery } from "@/toolkit/apiSlice";
import React from "react";

const SubHeader = () => {
  const categories = useGetAllCategoryQuery();
//   const product = useGetAllProductQuery()

  console.log("this is category", categories);

  return (
    <>
      <main className="bg-white h-10 w-full px-14 border-b-2 border-slate-200">
        <section className="flex align-middle text-sm pt-2 h-full justify-between text-slate-800 font-semibold ">
            <h6 className="hover:text-blue-600 cursor-pointer">Grocery</h6>
            <h6 className="hover:text-blue-600 cursor-pointer">Smartphone</h6>
            <h6 className="hover:text-blue-600 cursor-pointer">Laptop</h6>
            <h6 className="hover:text-blue-600 cursor-pointer">Fashion</h6>
            <h6 className="hover:text-blue-600 cursor-pointer">Furniture</h6>
            <h6 className="hover:text-blue-600 cursor-pointer">Two Whellers</h6>
            <h6 className="hover:text-blue-600 cursor-pointer">Home Decor</h6>
            <h6 className="hover:text-blue-600 cursor-pointer">Skin Care</h6>
        </section>
      </main>
    </>
  );
};

export default SubHeader;
