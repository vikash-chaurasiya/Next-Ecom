import { removeWishlistId, setWatchlist } from "@/toolkit/watchlistSlice";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import CardLoading from "./common/loading";
import { useGetAllProductQuery } from "@/toolkit/apiSlice";
import {
  setCartData,
  updateDiscount,
  updateTotalPrice,
} from "@/toolkit/cartSlice";
import { setNotification } from "@/toolkit/notifySlice";
import { priceWithoutOffer } from "@/utils/commonFunc";

const ProductCard = ({ data, isLoading }) => {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.watchlist.watchlistId);
  const cartDetails = useSelector((state) => state.cartData.cartData);

  const [heart, setHeart] = useState(false);
  const [watchlistId, setWatchlistId] = useState([]);

  const randomNum = () => {
    let random = Math.floor(Math.random() * 900) + 10;
    return random;
  };

  const today = new Date();
  const options = { day: "numeric", month: "long", year: "numeric" };
  const todayDate = today.toLocaleDateString("en-GB", options);


  const addToWachlist = (id,item) => {
    if (watchlistId.includes(id)) {
      dispatch(removeWishlistId(id));
      const notify = {
        title: item.title,
        thumbnail: item.thumbnail,
        date: todayDate,
        message: "remove from wishlist",
      }
      dispatch(setNotification(notify));
    } else {
      dispatch(setWatchlist(id));
      const notify = {
        title: item.title,
        thumbnail: item.thumbnail,
        date: todayDate,
        message: "added to wishlist",
      }
      dispatch(setNotification(notify));
    }
    let tune  = new Audio('/tune.mp3');
    tune.play();
    console.log("all product", watchlistId);
  };



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
      title: item.title,
      thumbnail: item.thumbnail,
      date: todayDate,
      message: "added to cart",
    };
    dispatch(setCartData(sendData));
    dispatch(updateDiscount());
    dispatch(updateTotalPrice());
    dispatch(setNotification(notify));

    let tune  = new Audio('/tune.mp3');
    tune.play();

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
        <main className="dark:bg-gray-900 bg-white text-white mx-2 shadow-md h-full rounded-md">
          <div>
            <div className="h-56 w-full rounded-md object-fill relative">
              <div
                className="absolute text-slate-400 cursor-pointer -top-4 right-0"
                onClick={() => addToWachlist(data.id,data)}
              >
                <div
                  className={`heart ${
                    watchlistId.includes(data.id) ? "is-active" : ""
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
            <div className="text-center ">
              <Link href={`product/${data.id}`}>
                <h6 className="capitalize text-md line-clamp-1 hover:text-blue-400 cursor-pointer">
                  {data?.title}
                </h6>
              </Link>
              <h6 className="text-sm flex gap-2 justify-center items-center my-3">
                <span className="bg-green-800 px-1 py-0.5 rounded-sm gap-1 align-middle  text-white flex  w-fit text-xs">
                  {data?.rating?.toFixed(1)} <AiFillStar fontSize={15} />
                </span>
                <span className="text-xs">({randomNum()})</span>
              </h6>
              <h6 className="pb-4">
                <span className="text-md font-medium text-slate-100">
                  ₹ {data?.price}
                </span>
                <s className="text-sm mx-2 text-slate-400">
                  {priceWithoutOffer(data?.price, data?.discountPercentage)}
                </s>
                <span className="text-green-700 text-xs">
                  {data?.discountPercentage}% off
                </span>
              </h6>
            </div>
            <div className="m-2 text-center mt-auto pb-3">
              {cartDetails?.some((item) => item.id === data.id) ? (
                <Link href={'/cart'}>
                  <button className="w-11/12 rounded-md center hover:bg-green-500 bg-green-600 text-white font-medium  text-sm py-2">
                    Go To Cart
                  </button>
                </Link>
              ) : (
                <button
                  onClick={() => addToCart(data)}
                  className="w-11/12 rounded-md center hover:bg-green-500 bg-green-600 text-white font-medium text-sm py-2"
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default ProductCard;
