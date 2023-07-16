import { setWatchlist } from "@/toolkit/watchlistSlice";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import CardLoading from "./common/loading";
import { useGetAllProductQuery } from "@/toolkit/apiSlice";
import { setCartData, updateDiscount, updateTotalPrice } from "@/toolkit/cartSlice";
import { setNotification } from "@/toolkit/notifySlice";

const ProductCard = ({ data, isLoading }) => {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.watchlist.watchlistId);

  const [heart, setHeart] = useState(false);
  const [watchlistId, setWatchlistId] = useState([]);

  // console.log("all product",watchlistId)

  const randomNum = () => {
    let random = Math.floor(Math.random() * 900) + 10;
    return random;
  };

  const priceWithoutOffer = (price, discount) => {
    let res = (100 / (100 - discount)) * price;
    return res.toFixed(1);
  };

  const addToWachlist = (id) => {
    dispatch(setWatchlist(id));
  };

  const today = new Date();
  const options = { day: "numeric", month: "long", year: "numeric" };
  const todayDate = today.toLocaleDateString("en-GB", options);

  const addToCart = (item) => {
    const sendData = {
      id: item.id,
      title: item.title,
      brand: item.brand,
      price: item.price,
      category: item.category,
      discount: item.discountPercentage,
      stock: item.stock,
      thumbnail: item.thumbnail,
      qty: 1,
      date: todayDate,
    };
    const notify = {
      title : item.title,
      thumbnail : item.thumbnail,
      date : todayDate,
      message : "added to cart"
    }
    dispatch(setCartData(sendData));
    dispatch(updateDiscount());
    dispatch(updateTotalPrice());
    dispatch(setNotification(notify))

    console.log("data send ", sendData);
  };

  useEffect(() => {
    if (res) {
      setWatchlistId(res);
    }
  }, [res]);

  return (
    <>
      {isLoading ? (
        <CardLoading />
      ) : (
        <main className="text-black dark:bg-gray-800 bg-white text-white mx-2 shadow-md h-full rounded-md">
          <div>
            <div className="h-56 w-full rounded-md object-fill relative">
              <div
                className="absolute text-slate-400 cursor-pointer -top-4 right-0"
                onClick={() => addToWachlist(data.id)}
              >
                <div
                  className={`heart ${
                    watchlistId.includes(data.id) || heart ? "is-active" : ""
                  }`}
                  onClick={() => setHeart(!heart)}
                ></div>
              </div>
              <Link href={`product/${data.id}`}>
                <img
                  src={data?.thumbnail}
                  alt="thumbnail"
                  className="w-full h-52 rounded-t-sm"
                />
              </Link>
            </div>
            <div className="pt-8 text-center ">
              <Link href={`product/${data.id}`}>
                <h6 className="text-md line-clamp-1 hover:text-blue-400 cursor-pointer">
                  {data?.title}
                </h6>
              </Link>
              <h6 className="text-sm flex gap-2 justify-center items-center my-4">
                <span className="bg-green-700 px-1.5 py-0.5 rounded-sm gap-1 align-middle  text-white flex  w-fit text-xs">
                  {data?.rating?.toFixed(1)} <AiFillStar fontSize={15} />
                </span>
                <span>({randomNum()})</span>
              </h6>
              <h6 className="pb-8 ">
                <span className="text-md font-medium text-slate-700">
                  ₹ {data?.price}
                </span>
                <s className="text-sm mx-2 text-slate-400">
                  ₹{priceWithoutOffer(data?.price, data?.discountPercentage)}
                </s>
                <span className="text-green-700 text-sm">
                  {data?.discountPercentage}% off
                </span>
              </h6>
            </div>
            <div className="m-2 text-center mt-auto">
              <button
                onClick={() => addToCart(data)}
                className="w-10/12 rounded-md center hover:bg-blue-500 bg-blue-600 text-white py-3 "
              >
                Add To Cart
              </button>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default ProductCard;
