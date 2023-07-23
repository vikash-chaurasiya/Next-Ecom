"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsBookmarkHeart, BsBoxSeamFill } from "react-icons/bs";
import Notification from "./Notification";
import "../styles/globals.css";
import { logout } from "@/toolkit/userSlice";
import { useGetSearchProductQuery } from "@/toolkit/apiSlice";
import { handleChange } from "@/utils/commonFunc";

const debounce = (cb, d) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

const Header = () => {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(false);
  const [listShow, setListShow] = useState(false);

  const user = useSelector((state) => state.user);
  const { data, isLoading, isSuccess } = useGetSearchProductQuery(search);
  const cartDetails = useSelector((state) => state.cartData.cartData);
  const dispatch = useDispatch();

  console.log("this is search data", search, " adn this is data ", data);

  const handleChange = debounce((e) => {
    setListShow(true)
    setSearch(e.target.value);
  }, 1000);


  const handleFocus = () => {

    setListShow(true)
  }


  const handleBlur = () => {
    setTimeout(() => {
      setListShow(false);
    }, 1000);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="flex px-20 py-3 justify-between shadow-xl bg-gray-900">
        <Link href={"/"}>
          <div className="logo flex gap-3 cursor-pointer pt-1">
            <Image src="/flipkart-icon.svg" alt="logo" width={24} height={80} />
            <span className="text-1xl font">FlashCart</span>
          </div>
        </Link>
        <div className="nav w-2/5 relative"

        >
          <label className="relative block">
            <span className="absolute inset-y-0 top-1 left-2 flex items-center pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search h-5 w-5 fill-slate-300 "
                viewBox="0 0 20 20"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
            <input
              className="placeholder:italic text-black placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-10 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for products..."
              type="text"
              name={"search"}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              autoComplete="off"
            />
          </label>
          {!!data?.products?.length && listShow && (
            <div className="absolute top-full left-0 z-10 w-full bg-white text-black mt-2 border border-slate-300 shadow-md rounded-md max-h-56 overflow-y-auto">
              <ul className="list-none p-0 m-0">
                {data.products.slice(0, 5).map((product) => (
                  <li
                    key={product.id}
                    className="px-4 py-2 border-b border-slate-300 "
                  >
                    <Link href={`product/${product.id}`} onClick={()=>setListShow(false)} className="flex justify-between">
                      <span className="mr-2 w-6/6" onClick={()=>console.log("ted")}>{product.title}</span>
                      <span className="text-green-700">₹ {product.price}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex gap-5 justify-center align-middle cursor-pointer">
          {!user.isAuthenticated ? (
            <Link href="/login">
              <button className="bg-white h-8 text-black rounded-md px-5 font-semibold">
                Login
              </button>
            </Link>
          ) : (
            <div className="relative inline-block ">
              <button
                onClick={() => setActive(!active)}
                className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md  dark:focus:ring-opacity-40  dark:text-white dark:bg-gray-800 focus:outline-none"
              >
                <span className="mx-1">
                  Hi, {user.user.email.split("@", 1)}
                </span>
                <svg
                  className="w-5 h-5 mx-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>

              {active && (
                <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800">
                  <Link
                    href="#"
                    className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <img
                      className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                      src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg"
                      alt="jane avatar"
                    />
                    <div className="mx-1">
                      <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        {user.user.email.split("@", 1)}
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {user.user.email}
                      </p>
                    </div>
                  </Link>

                  <hr className="border-gray-200 dark:border-gray-700 " />

                  <Link
                    href="/profile"
                    onClick={() => setActive(!active)}
                    className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mx-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <span className="mx-1">view profile</span>
                  </Link>

                  <Link
                    href="/profile/wishlist"
                    onClick={() => setActive(!active)}
                    className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="ml-1">
                      <BsBookmarkHeart size={18} />
                    </span>

                    <span className="mx-3">Wishlist</span>
                  </Link>

                  <Link
                    href="/order"
                    onClick={() => setActive(!active)}
                    className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="ml-2">
                      <BsBoxSeamFill size={16} />
                    </span>

                    <span className="mx-3">Orders</span>
                  </Link>

                  <Link
                    href="/cart"
                    onClick={() => setActive(!active)}
                    className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="ml-2">
                      <AiOutlineShoppingCart size={19} />
                    </span>

                    <span className="mx-3">Cart</span>
                  </Link>

                  <hr className="border-gray-200 dark:border-gray-700 " />
                  <Link
                    href="/support"
                    className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mx-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C6.47967 21.9939 2.00606 17.5203 2 12V11.8C2.10993 6.30452 6.63459 1.92794 12.1307 2.00087C17.6268 2.07379 22.0337 6.56887 21.9978 12.0653C21.9619 17.5618 17.4966 21.9989 12 22ZM11.984 20H12C16.4167 19.9956 19.9942 16.4127 19.992 11.996C19.9898 7.57928 16.4087 3.99999 11.992 3.99999C7.57528 3.99999 3.99421 7.57928 3.992 11.996C3.98979 16.4127 7.56729 19.9956 11.984 20ZM13 18H11V16H13V18ZM13 15H11C10.9684 13.6977 11.6461 12.4808 12.77 11.822C13.43 11.316 14 10.88 14 9.99999C14 8.89542 13.1046 7.99999 12 7.99999C10.8954 7.99999 10 8.89542 10 9.99999H8V9.90999C8.01608 8.48093 8.79333 7.16899 10.039 6.46839C11.2846 5.76778 12.8094 5.78493 14.039 6.51339C15.2685 7.24184 16.0161 8.57093 16 9.99999C15.9284 11.079 15.3497 12.0602 14.44 12.645C13.6177 13.1612 13.0847 14.0328 13 15Z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <span className="mx-1">Help</span>
                  </Link>
                  <div
                    href="#"
                    onClick={handleLogout}
                    className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mx-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <span className="mx-1">Sign Out</span>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="ml-10">
            <Notification />
          </div>

          <h3 className="flex align-middle justify-between gap-1 pt-1 relative">
            <Link href={"/cart"}>
              <span className="flex align-middle gap-2 ">
                <AiOutlineShoppingCart size={22} /> Cart
              </span>
              {!!cartDetails?.length && (
                <div className="text-xs absolute p-1  -top-2 right-9 text-white font-medium flex justify-center items-center rounded-full bg-red-500 w-4 h-4">
                  {cartDetails.length}
                </div>
              )}
            </Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Header;
