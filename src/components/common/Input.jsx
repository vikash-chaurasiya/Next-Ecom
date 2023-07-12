import React from "react";

const Input = ({ type, placeholder, name, value, error, maxLength,onChange,disabled}) => {
  return (
    <>
      <div className="relative mb-2">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          maxLength={maxLength}
          onChange={onChange}
          disabled ={disabled}
          className="border-2 py-3 px-5 w-72 rounded-sm"
        />
        <p className="absolute text-red-500 text-xs ms-1 mt-1">{error}</p>
      </div>
    </>
  );
};

export default Input;
