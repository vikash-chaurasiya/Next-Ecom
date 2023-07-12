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
          <div className="flex items-center gap-4 pt-1 bg-white mb-4 h-16 rounded-sm ps-4 shadow-md">
            <div className="w-12 h-12 rounded-full bg-slate-300"></div>
            <div className="">
              <h6 className="text-xs font-medium text-slate-700">Hello,</h6>
              <h6>VIkash Chaurasia</h6>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-sm px-6 pt-3 ">
            <div className="flex gap-2 items-center h-12 border-b-2 pb-2">
              <span className="text-blue-700">
                <ImFolderUpload fontSize={18} />
              </span>
              <span className="ms-3 font-semibold text-slate-500">
                MY ORDERS
              </span>
              <span className="ms-auto">
                <FaChevronRight />
              </span>
            </div>
            <div className="border-b-2 pb-8">
              <h6 className="flex items-center gap-4 font-semibold text-slate-500 mt-5">
                <span className="text-blue-700">
                  {" "}
                  <FaUser fontSize={18} />
                </span>{" "}
                ACCOUNT SETTINGS
              </h6>
              <div className="ms-9 mt-5 ">
                <ul>
                  <li style={{color : router === '/profile' && "blue", fontWeight : router === '/profile' && '500' }} className="text-sm text-slate-800 hover:text-blue-700 mt-4">
                    <Link href={"/profile"}>Profile Information</Link>
                  </li>
                  <li style={{color : router === '/profile/address' && "blue", fontWeight : router === '/profile/address' && '500' }} className={`text-sm text-slate-800 hover:text-blue-700 mt-4`}>
                    {" "}
                    <Link href={"/profile/address"}> Manage Address</Link>
                  </li>
                  <li style={{color : router === '/profile/pan' && "blue", fontWeight : router === '/profile/pan' && '500' }} className="text-sm text-slate-800 hover:text-blue-700 mt-4">
                    <Link href={"/profile/pan"}> PAN Card Information </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-b-2 pb-8">
              <h6 className="flex items-center gap-4 font-semibold text-slate-500 mt-5">
                <span className="text-blue-700">
                  {" "}
                  <FaAddressCard fontSize={18} />
                </span>{" "}
                MY STUFF
              </h6>
              <div className="ms-9 mt-5 ">
                <ul>
                  <li className="text-sm text-slate-800 hover:text-blue-700 mt-4">
                    My Wishlist
                  </li>
                  <li className="text-sm text-slate-800 hover:text-blue-700 mt-4">
                    All Notification
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-b-2 pb-8">
              <h6 className="flex items-center gap-4 font-semibold text-slate-500 mt-5">
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
