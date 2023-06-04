import React from "react";
import { AiFillHeart, AiFillStar } from "react-icons/ai";

const ProductCard = () => {
  return (
    <>
      <main className="text-black mx-2 shadow-md">
        <div>
          <div className="h-52 bg-slate-300">
            <div className="flex justify-end pt-2 pe-2"><AiFillHeart fontSize={20}/></div>

          </div>
          <div className="mt-4 text-center">
            <h6 className="text-sm">Product name here</h6>
            <h6 className="text-sm flex gap-2 justify-center items-center my-2">
              <span className="bg-green-700 px-1.5 py-0.5 rounded-sm gap-1 align-middle  text-white flex  w-fit text-xs">
                3.4 <AiFillStar fontSize={15}  />
              </span>
              <span>(120)</span>
            </h6>
            <h6 className="pb-5">
              <span className="text-md font-medium text-slate-700">₹ 399</span>
              <s className="text-sm mx-2 text-slate-400">₹1099</s>
              <span className="text-green-700 text-sm">71% off</span>
            </h6>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductCard;
