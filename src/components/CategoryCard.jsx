import React from "react";
import CardLoading from "./common/loading";
import Link from "next/link";

const CategoryCard = ({
  imgUrl,
  heading,
  subHeading,
  price,
  isLoading,
  isSuccess,
  id,
}) => {
  return (
    <>
      <main className="mx-2 border shadow-sm h-full rounded-sm">
        {isLoading ? (
          <CardLoading />
        ) : !isSuccess ? (
          "Server error"
        ) : (
          <>
          <Link href={`product/${id}`}>
            <div className="h-52 rounded-sm">
              <img src={imgUrl} alt="thumbnails" className="h-full w-full" />
            </div>
            <div className="text-slate-800  text-center mt-10 h-28">
              <h6 className="text-sm font-medium line-clamp-2">{heading}</h6>
              <h6 className="text-green-700 my-3">{price}</h6>
              <h6 className="text-sm text-slate-500">{subHeading}</h6>
            </div>
          </Link>
          </>
        )}
      </main>
    </>
  );
};

export default CategoryCard;
