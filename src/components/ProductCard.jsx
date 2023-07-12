import { setWatchlist } from "@/toolkit/watchlistSlice";
import React from "react";

import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({data}) => {

  const dispatch = useDispatch();
  const dataId = useSelector((state) => state.watchlist)


  const randomNum = () => {
    let random =   Math.floor(Math.random()*900)+10
    return random;
  }

  const priceWithoutOffer = (price,discount) => {
    let res = (100/(100-discount)) * price;
    return res.toFixed(1);
  }

  const addToWachlist = (id) => {
    console.log("working ", id)
    dispatch(setWatchlist(id))
    console.log("data",dataId)
  }


  return (
    <>
      <main className="text-black bg-white mx-2 shadow-md h-full rounded-md">
        <div>
          <div className="h-56 w-full rounded-md object-fill relative">
            <div className="absolute text-slate-400 cursor-pointer top-2 right-3"
              onClick={()=>addToWachlist(data.id)}
            ><AiFillHeart fontSize={22}/> </div>
            <img src={data?.thumbnail} alt="thumbnail"  className="w-full h-52 rounded-t-sm"/>

          </div>
          <div className="pt-8 text-center ">
            <h6 className="text-md">{data?.title}</h6>
            <h6 className="text-sm flex gap-2 justify-center items-center my-4">
              <span className="bg-green-700 px-1.5 py-0.5 rounded-sm gap-1 align-middle  text-white flex  w-fit text-xs">
              {(data?.rating)?.toFixed(1)} <AiFillStar fontSize={15}  />
              </span>
              <span>({randomNum()})</span>
            </h6>
            <h6 className="pb-8 ">
              <span className="text-md font-medium text-slate-700">₹ {data?.price}</span>
              <s className="text-sm mx-2 text-slate-400">₹{priceWithoutOffer(data?.price,data?.discountPercentage)}</s>
              <span className="text-green-700 text-sm">{data?.discountPercentage}% off</span>
            </h6>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductCard;
