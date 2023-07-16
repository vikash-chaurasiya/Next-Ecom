"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaAddressCard, FaChevronRight, FaUser } from "react-icons/fa";
import { ImFolderUpload } from "react-icons/im";
import { RiLogoutCircleLine } from "react-icons/ri";

const ProfileSidebar = () => {

    const router = usePathname()
    console.log("this is pathname",router)


  return (
    <>
      <main>
        <aside className="w-80">
          <div className="flex items-center gap-4 pt-1 bg-gray-800 text-white mb-4 h-20 rounded-sm ps-4 shadow-md">
            <div className="w-12 h-12 rounded-full bg-slate-300">
              <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg" alt="dp" />
            </div>
            <div className="">
              <h6 className="text-sm font-medium">Hello,</h6>
              <h6 className="text-lg font-medium">VIkash Chaurasia</h6>
            </div>
          </div>
          <div className="bg-gray-800 text-white shadow-md rounded-sm px-6 pt-3 ">
            <div className="flex gap-2 items-center h-12 border-b-2 pb-2">
              <span className="text-blue-700">
                <ImFolderUpload fontSize={18} />
              </span>
              <span className="ms-3 font-semibold text-slate-300">
                MY ORDERS
              </span>
              <span className="ms-auto">
                <FaChevronRight />
              </span>
            </div>
            <div className="border-b-2 pb-8">
              <h6 className="flex items-center gap-4 font-semibold text-slate-300 mt-5">
                <span className="text-blue-700">
                  {" "}
                  <FaUser fontSize={18} />
                </span>{" "}
                ACCOUNT SETTINGS
              </h6>
              <div className="ms-9 mt-5 ">
                <ul>
                  <li style={{color : router === '/profile' && "white", fontWeight : router === '/profile' && '500' }} className="text-base text-slate-400 hover:text-blue-500 mt-4">
                    <Link href={"/profile"}>Profile Information</Link>
                  </li>
                  <li style={{color : router === '/profile/address' && "white", fontWeight : router === '/profile/address' && '500' }} className={`text-base text-slate-400 hover:text-blue-500 mt-4`}>
                    {" "}
                    <Link href={"/profile/address"}> Manage Address</Link>
                  </li>
                  <li style={{color : router === '/profile/pan' && "white", fontWeight : router === '/profile/pan' && '500' }} className="text-base text-slate-400 hover:text-blue-500 mt-4">
                    <Link href={"/profile/pan"}> PAN Card Information </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-b-2 pb-8">
              <h6 className="flex items-center gap-4 font-semibold text-slate-400 mt-5">
                <span className="text-blue-500">
                  {" "}
                  <FaAddressCard fontSize={18} />
                </span>{" "}
                MY STUFF
              </h6>
              <div className="ms-9 mt-5 ">
                <ul>
                  <li style={{color : router === '/profile/wishlist' && "white", fontWeight : router === '/profile/wishlist' && '500' }}  className="text-base text-slate-400 hover:text-blue-500 mt-4">
                  <Link href={"/profile/wishlist"}> My Wishlist</Link>
                  </li>
                  <li style={{color : router === '/profile/notification' && "white", fontWeight : router === '/profile/notification' && '500' }}  className="text-base text-slate-400 hover:text-blue-500 mt-4">
                  <Link href={"/profile/wishlist"}> My Notification</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pb-4 pt-3">
              <h6 className="flex items-center gap-4 font-semibold text-slate-400 mt-5">
                <span className="text-blue-700">
                  {" "}
                  <RiLogoutCircleLine fontSize={18} />
                </span>{" "}
                Logout
              </h6>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
};

export default ProfileSidebar;
