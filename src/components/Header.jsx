"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsBookmarkHeart, BsBoxSeamFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import Notification from "./Notification";
import "../styles/globals.css";
import { logout } from "@/toolkit/userSlice";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="flex  px-20 py-4 justify-between shadow-xl bg-gray-900">
        <Link href={"/"}>
          <div className="logo flex gap-3 cursor-pointer pt-1">
            <Image src="/flipkart-icon.svg" alt="logo" width={24} height={80} />
            <span className="text-1xl font">Flipkart</span>
          </div>
        </Link>
        <div className="nav w-2/5">
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
              name="search"
            />
          </label>
        </div>
        <div className="flex gap-5 justify-center align-middle cursor-pointer">
          {!user.isAuthenticated ? (
            <Link href="/login">
              <button className="bg-white h-8 text-black rounded-md px-5 font-semibold">
                Login
              </button>
            </Link>
          ) : (
            <div className="flex gap-10">
              <div className="relative menuHover group h-full">
                <h6 className="capitalize pt-1 flex items-center gap-1 ">
                  Hi , {user.user.email.split("@", 1)}{" "}
                  <span className="text-slate-400 group-hover:rotate-180 transition-all">
                    {" "}
                    <IoIosArrowDown />{" "}
                  </span>
                </h6>
                <div
                  style={{ top: "40px", left: "-50px" }}
                  className="menu z-50 shadow-sm shadow-slate-500 overflow-hidden absolute bg-white  text-slate-800 px-4 w-44 rounded-sm text-sm"
                >
                  <ul className="py-2">
                    <li>
                      <Link href={"/profile"}>
                        <span className="flex align-middle gap-2 mt-2 mb-3 border-b-2 border-slate-500 pb-1 hover:text-green-800 hover:font-semibold">
                          <HiOutlineUserCircle size={16} /> Profile
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/watchlist"}>
                        <span className="flex align-middle gap-2 mt-2 mb-3 border-b-2 border-slate-500 pb-1 hover:text-green-800 hover:font-semibold">
                          <BsBookmarkHeart size={16} /> Wishlist
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/order"}>
                        <span className="flex align-middle gap-2 mt-2 mb-3 border-b-2 border-slate-500 pb-1 hover:text-green-800 hover:font-semibold">
                          <BsBoxSeamFill size={16} /> Order
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/cart"}>
                        <span className="flex align-middle gap-2 mt-2 mb-3 border-b-2 border-slate-500 pb-1 hover:text-green-800 hover:font-semibold">
                          <AiOutlineShoppingCart size={16} /> Cart
                        </span>
                      </Link>
                    </li>
                    <li
                      onClick={handleLogout}
                      className="flex align-middle gap-2 mt-2 mb-2 text-red-600 hover:font-semibold"
                    >
                      <BiLogOut size={16} /> Logout
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Notification />
              </div>
            </div>
          )}
          <h3 className="flex align-middle justify-between gap-1 pt-1">
            <Link href={"/cart"}>
              <span className="flex align-middle gap-2 ">
                <AiOutlineShoppingCart size={22} /> Cart
              </span>
            </Link>
          </h3>
        </div>
        {/* <div
          className="sidebar w-60 text-center absolute top-16 rounded shadow-xl z-10 bg-pink-400 right-0 p-5 transition-transform translate-x-full"
        >
          <h1 className=" font-semibold text-xl">Shopping Cart</h1>
          <ol>
            <li>
              <div className="flex justify-between mt-4">
                <h4>Tshirt green</h4>
                <div className="flex ">
                  <h1 className="bg-black w-7 text-center pt-0.5 cursor-pointer rounded text-md">
                    <i className="fa-solid fa-minus"></i>
                  </h1>
                  <h1 className="mx-2 text-xl">2</h1>
                  <h1 className="bg-black w-7 text-center pt-0.5 cursor-pointer text-md rounded">
                    <i className="fa-solid fa-plus"></i>
                  </h1>
                </div>
              </div>
            </li>
            <li>
              <div className="flex justify-between mt-4">
                <h4>Tshirt green</h4>
                <div className="flex ">
                  <h1 className="bg-black w-7 text-center pt-0.5 cursor-pointer rounded text-md">
                    <i className="fa-solid fa-minus"></i>
                  </h1>
                  <h1 className="mx-2 text-xl">2</h1>
                  <h1 className="bg-black w-7 text-center pt-0.5 cursor-pointer text-md rounded">
                    <i className="fa-solid fa-plus"></i>
                  </h1>
                </div>
              </div>
            </li>
            <li>
              <div className="flex justify-between mt-4">
                <h4>Tshirt green</h4>
                <div className="flex ">
                  <h1 className="bg-black w-7 text-center pt-0.5 cursor-pointer rounded text-md">
                    <i className="fa-solid fa-minus"></i>
                  </h1>
                  <h1 className="mx-2 text-xl">2</h1>
                  <h1 className="bg-black w-7 text-center pt-0.5 cursor-pointer text-md rounded">
                    <i className="fa-solid fa-plus"></i>
                  </h1>
                </div>
              </div>
            </li>
          </ol>
          <button className="bg-gray-900 hover:bg-white hover:text-black font-semibold px-3 py-1 rounded-lg  mt-5">
            Buy Now
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Header;
