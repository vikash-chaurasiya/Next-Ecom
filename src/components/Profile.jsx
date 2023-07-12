"use client";

import React, { useState } from "react";
import Input from "./common/Input";
import MyButton from "./common/MyButton";
import { handleChange, handleError } from "@/utils/commonFunc";
import { emailRegex, phoneRegex } from "@/utils/regex";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "@/toolkit/userdetailsSlice";

const Profile = () => {

  const dispatch = useDispatch()
  const profile = useSelector((state)=>state.profile.profile)

  const [personalData, setPersonalData] = useState({
    fname: profile?.fname ?? "",
    lname: profile?.lname ?? "",
    gender: profile?.gender ?? "",
    email: profile?.email ?? "",
    phone: profile?.phone ?? "",
  });

  const [error, setError] = useState("");



  const handleValidate = () => {
    let validate = true;
    if (!personalData.fname) {
      validate = false;
      handleError("fname", "Please enter First name", setError);
    }
    if (!personalData.lname) {
      validate = false;
      handleError("lname", "Please enter Last name", setError);
    }
    if (!personalData.gender) {
      validate = false;
      handleError("gender", "Please select Gender ", setError);
    }
    if (!personalData.email) {
      validate = false;
      handleError("email", "Please enter Email Address", setError);
    }
    else if(! emailRegex.test(personalData.email)){
      validate = false;
      handleError("email", "Please enter valid email address",setError)
    }
    if (!personalData.phone) {
      validate = false;
      handleError("phone", "Please enter Phone Number", setError);
    }
    else if(!phoneRegex.test(personalData.phone)){
      validate = false;
      handleError("phone", "Please enter valid Phone number",setError)
    }
    return validate;
  };

  const handleSubmit = () => {
    if (handleValidate()) {
      dispatch(setProfile(personalData))
    }
  };

  return (
    <>
      <main className="py-6 px-8">
        <section>
          <div className="flex gap-6 items-center">
            <h6 className="font-lg font-semibold">Personal Information</h6>
            <p className="text-blue-600 cursor-pointer font-semibold text-sm">
              Edit
            </p>
          </div>
          <div className="mt-5 flex gap-3">
            <Input
              type="text"
              name="fname"
              placeholder={"First Name"}
              error={error.fname}
              value={personalData.fname}
              onChange={(e)=>handleChange(e,setPersonalData,setError)}
            />
            <Input
              type="text"
              name="lname"
              placeholder={"Last Name"}
              error={error.lname}
              value={personalData.lname}
              onChange={(e)=>handleChange(e,setPersonalData,setError)}
            />
          </div>
          <div className="mt-5">
            <h6 className="text-sm">Your Gender</h6>
            <div className="flex gap-8">
              <div className="mt-3">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value={"male"}
                  checked={personalData.gender === "male"}
                  onChange={(e)=>handleChange(e,setPersonalData,setError)}
                />
                <label htmlFor="male" className="text-slate-500 ms-3">
                  Male
                </label>
              </div>
              <div className="mt-3">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value={"female"}
                  checked={personalData.gender === "female"}
                  onChange={(e)=>handleChange(e,setPersonalData,setError)}
                />
                <label htmlFor="female" className="text-slate-500 ms-3">
                  Female
                </label>
              </div>
            </div>
          </div>
          {error.gender && (
            <p className="text-red-500 text-xs">{error.gender}</p>
          )}
        </section>
        <section className="mt-10">
          <div className="flex gap-6 items-center">
            <h6 className="font-lg font-semibold">Email Address</h6>
            <p className="text-blue-600 cursor-pointer font-semibold text-sm">
              Edit
            </p>
          </div>
          <div className="mt-6">
            <Input
              type={"text"}
              placeholder={"Email Address"}
              name={"email"}
              value={personalData.email}
              error={error.email}
              onChange={(e)=>handleChange(e,setPersonalData,setError)}
            />
          </div>
        </section>
        <section className="mt-10">
          <div className="flex gap-6 items-center">
            <h6 className="font-lg font-semibold">Mobile Number</h6>
            <p className="text-blue-600 cursor-pointer font-semibold text-sm">
              Edit
            </p>
          </div>
          <div className="mt-6">
            <Input
              type={"text"}
              placeholder={"Phone Number"}
              name={"phone"}
              value={personalData.phone}
              error={error.phone}
              maxLength={10}
              onChange={(e)=>handleChange(e,setPersonalData,setError)}
            />
          </div>
        </section>
        <div className="mt-10">
          <MyButton onClick={handleSubmit} />
        </div>
      </main>
    </>
  );
};

export default Profile;
