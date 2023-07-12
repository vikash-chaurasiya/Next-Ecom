"use client";

import Link from "next/link";
import React from "react";

const SubHeader = () => {

  return (
    <>
      <main className="bg-white h-12 w-full px-14 border-b-2 border-slate-200">
          <ul className="flex items-center text-sm  h-full justify-between text-slate-800 font-semibold ">
            <li>
              <Link href="/grocery">
                <h6 className="hover:text-blue-600 cursor-pointer ">Grocery</h6>
              </Link>
            </li>
            <li>
              <Link href="/smartphone">
                <h6 className="hover:text-blue-600 cursor-pointer">
                  Smartphone
                </h6>
              </Link>
            </li>
            <li>
              <Link href="/laptop">
                <h6 className="hover:text-blue-600 cursor-pointer">Laptop</h6>
              </Link>
            </li>
            <li>
              <Link href="/fashion">
                <h6 className="hover:text-blue-600 cursor-pointer">Fashion</h6>
              </Link>
            </li>
            <li>
              <Link href="/furniture">
                <h6 className="hover:text-blue-600 cursor-pointer">
                  Furniture
                </h6>
              </Link>
            </li>
            <li>
              <Link href="/twowheller">
                <h6 className="hover:text-blue-600 cursor-pointer">
                  Two Whellers
                </h6>
              </Link>
            </li>
            <li>
              <Link href="/homedecor">
                <h6 className="hover:text-blue-600 cursor-pointer">
                  Home Decor
                </h6>
              </Link>
            </li>
            <li>
              <Link href="/skincare">
                <h6 className="hover:text-blue-600 cursor-pointer">
                  Skin Care
                </h6>
              </Link>
            </li>
          </ul>
      </main>
    </>
  );
};

export default SubHeader;
