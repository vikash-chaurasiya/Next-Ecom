import React from "react";

const CategoryCard = ({imgUrl,heading,subHeading,lastHeading}) => {
  return (
    <>
      <main className="mx-4 ">
        <div className="bg-slate-400 h-52 rounded-sm">
            img container
        </div>
        <div className="text-slate-800 text-center mt-3">
            <h6 className="text-sm font-medium">{heading}</h6>
            <h6 className="text-green-600">{subHeading}</h6>
            <h6 className="text-sm text-slate-500 pt-1">{lastHeading}</h6>
        </div>
      </main>
    </>
  );
};

export default CategoryCard;
