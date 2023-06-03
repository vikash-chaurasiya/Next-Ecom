"use client";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { login } from "@/toolkit/userSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let validate = true;

    if (!userData.email) {
      validate = false;
      toast.error("Please enter email");
    } else if (userData.email) {
      let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
      let emailValidation = regex.test(userData.email);
      if (!emailValidation) {
        alert("Please enter valid Email");
        validate = false;
      }
    }
    if (!userData.password) {
      validate = false;
      alert("enter password please");
    } else if (userData.password.length < 6) {
      validate = false;
      alert("Please enter password minimum 6 letter");
    }
    return validate;
  };

  const submitForm = () => {
    const valid = validateForm();
    if (valid) {
      dispatch(login({ email: userData.email, pwd: userData.password }));
      router.push("/");
    }
  };

  return (
    <>
      <div className="flex min-h-full justify-center px-6 py-12 lg:px-8 bg-slate-700">
        <div className="bg-white w-1/3 py-12 px-10 rounded-md">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium  leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    value={userData.email}
                    type="email"
                    onChange={handleChange}
                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={submitForm}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
              <div>
                <button className="rounded-full border-red-200  border-2 p-1  text-white shadow-sm w-12 h-12">
                  <span className="flex justify-center align-bottom">
                    {/* <FaGoogle /> */}
                    <img width="96" height="96" src="https://img.icons8.com/color/96/google-logo.png" alt="google-logo"/>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
