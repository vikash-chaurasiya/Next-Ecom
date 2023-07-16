"use client";
import Input from "@/components/common/Input";
import MyButton from "@/components/common/MyButton";
import { setPan } from "@/toolkit/userdetailsSlice";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PanNumber = () => {
  const dispatch = useDispatch();
  const pan = useSelector((state)=>state.profile.pan)
  const [panNumber, setPanNumber] = useState(pan?? "");
  const [enableInput,setEnableInput] = useState(true)
  const [error, setError] = useState("")

  const handleValidate = () => {
    let validate = true;
    if(!panNumber){
      validate = false;
      setError("please enter pan number")
    }
    else if (panNumber.length !== 10){
      validate = false;
      setError("please enter valid pan number")
    }
    return validate;
  }

  const handleSubmit = () => {
    if (handleValidate()){
      setError("")
      dispatch(setPan(panNumber))
    }
  }

  return (
    <>
      <main className="px-8 py-6 bg-gray-900 text-white h-full">
        <section className="mb-14">
          <div className="flex gap-6 items-center mb-4">
            <h6 className="font-lg font-semibold">Pan Number</h6>
            <p
              className="text-blue-600 cursor-pointer font-semibold text-sm"
              onClick={() => setEnableInput(!enableInput)}
            >
              Edit
            </p>
          </div>

          <Input
            placeholder={"pan number"}
            name={"pan"}
            value={panNumber}
            maxLength={10}
            type={"text"}
            onChange={(e) => setPanNumber(e.target.value)}
            disabled={ panNumber ? enableInput : false}
            error={error}
          />
        </section>
        <section>
          <MyButton onClick={handleSubmit}/>
        </section>
      </main>
    </>
  );
};

export default PanNumber;
