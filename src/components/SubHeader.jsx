"use client";

import Link from "next/link";
import React, { useState } from "react";

const SubHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <>
      <main className="bg-white h-14 w-full px-14 border-b-2 border-slate-200" onClick={closeDropdown}>
        <ul className="flex items-center text-sm  h-full justify-between text-slate-800 font-semibold ">
          <li>
            <Link href="category/groceries">
              <h6 className="hover:text-blue-600 cursor-pointer ">Grocery</h6>
            </Link>
          </li>
          <li>
            <Link href="category/smartphones">
              <h6 className="hover:text-blue-600 cursor-pointer">Smartphone</h6>
            </Link>
          </li>
          <li>
            <Link href="category/laptops">
              <h6 className="hover:text-blue-600 cursor-pointer">Laptop</h6>
            </Link>
          </li>
          <li className="relative inline-block">
            <h6
              className="hover:text-blue-600 cursor-pointer flex "
              onClick={toggleDropdown}
              onMouseEnter={toggleDropdown}
              // onMouseLeave={closeDropdown}
            >
              Fashion
              <button className="relative z-10 block ms-1 border border-transparent rounded-md text-black bg-white focus:outline-none">
                <svg
                  className="w-5 h-5 text-gray-800 dark:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </h6>
            {isOpen && (
              <div
                onClick={closeDropdown}
                onMouseLeave={closeDropdown}
                className="absolute -right-10 z-20 w-64 py-2 mt-4 origin-top-right bg-white rounded-md shadow-md shadow-slate-600 border"
              >
                <p className="block px-7 py-3 text-base  text-gray-800 border-b-2 capitalize transition-colors duration-300 transform  hover:bg-gray-100 ">
                  Mens Clothing
                </p>
                <Link
                  href="category/mens-shirts"
                  className="block px-7 py-3 text-sm  text-slate-600 border-b-2 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
                >
                  mens-shirts
                </Link>
                <Link
                  href="category/mens-shoes"
                  className="block px-7 py-3 text-sm  text-slate-600 border-b-2 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
                >
                  mens-shoes
                </Link>
                <Link
                  href="category/mens-watches"
                  className="block px-7 py-3 text-sm  text-slate-600 border-b-2 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
                >
                  mens-watches
                </Link>
                <p className="block px-7 py-3 text-base  text-slate-900 border-b-2 capitalize transition-colors duration-300 transform  hover:bg-gray-100 ">
                  Womens Clothing
                </p>
                <Link
                  href="category/womens-dresses"
                  className="block px-7 py-3 text-sm  text-slate-600 border-b-2 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
                >
                  womens-dresses
                </Link>
                <Link
                  href="category/womens-shoes"
                  className="block px-7 py-3 text-sm  text-slate-600 border-b-2 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
                >
                  womens-shoes
                </Link>
                <Link
                  href="category/womens-watches"
                  className="block px-7 py-3 text-sm  text-slate-600 border-b-2 capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
                >
                  womens-watches
                </Link>
                <Link
                  href="category/womens-bags"
                  className="block px-7 py-3 text-sm  text-slate-600  capitalize transition-colors duration-300 transform  hover:bg-gray-100 "
                >
                  womens-bags
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link href="category/furniture">
              <h6 className="hover:text-blue-600 cursor-pointer">Furniture</h6>
            </Link>
          </li>
          <li>
            <Link href="category/motorcycle">
              <h6 className="hover:text-blue-600 cursor-pointer">
                Two Whellers
              </h6>
            </Link>
          </li>
          <li>
            <Link href="category/home-decoration">
              <h6 className="hover:text-blue-600 cursor-pointer">Home Decor</h6>
            </Link>
          </li>
          <li>
            <Link href="category/skincare">
              <h6 className="hover:text-blue-600 cursor-pointer">Skin Care</h6>
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
};

export default SubHeader;
