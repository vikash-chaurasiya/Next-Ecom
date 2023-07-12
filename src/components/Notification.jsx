"use client";
import React, { useState } from "react";

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative inline-block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none"
        >
          <svg
            className="w-5 h-5 text-gray-800 dark:text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C10.8954 22 10 21.1046 10 20H14C14 21.1046 13.1046 22 12 22ZM20 19H4V17L6 16V10.5C6 7.038 7.421 4.793 10 4.18V2H13C12.3479 2.86394 11.9967 3.91762 12 5C12 5.25138 12.0187 5.50241 12.056 5.751H12C10.7799 5.67197 9.60301 6.21765 8.875 7.2C8.25255 8.18456 7.94714 9.33638 8 10.5V17H16V10.5C16 10.289 15.993 10.086 15.979 9.9C16.6405 10.0366 17.3226 10.039 17.985 9.907C17.996 10.118 18 10.319 18 10.507V16L20 17V19ZM17 8C16.3958 8.00073 15.8055 7.81839 15.307 7.477C14.1288 6.67158 13.6811 5.14761 14.2365 3.8329C14.7919 2.5182 16.1966 1.77678 17.5954 2.06004C18.9942 2.34329 19.9998 3.5728 20 5C20 6.65685 18.6569 8 17 8Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        {isOpen && (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-0 z-20 w-64 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-lg sm:w-80 dark:bg-gray-800"
          >
            <div className="py-2">
              <a
                href="#"
                className="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
              >
                <img
                  className="flex-shrink-0 object-cover w-11 h-11 mx-3 rounded-full"
                  src=""
                  alt="product"
                />
                <div className="ms-6">
                <p>Product Name</p>
                <p className=" text-sm text-gray-600 dark:text-white">
                  Added 02 May 2023
                </p>
                </div>
              </a>
            </div>
            <a
              href="#"
              className="block py-2 font-bold text-center text-white bg-gray-800 dark:bg-gray-700 hover:underline"
            >
              Clear all notifications
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Notification;
