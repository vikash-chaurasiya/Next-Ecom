"use client";
import Craousel from "@/components/Craousel";
import CategoryCarousel from "@/components/CategoryCraousel";
import ProductCarousel from "@/components/ProductCarousel";
import {
  useGetAllProductQuery,
  useGetProductByCategoryQuery,
} from "@/toolkit/apiSlice";
import { useEffect, useState } from "react";
import { shuffleArray } from "@/utils/commonFunc";

export default function Home() {
  const { data, isLoading, isSuccess } = useGetAllProductQuery(100);
  const [productData, setProductData] = useState([]);
  const [randomData, setRandomData] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setProductData(data.products);
      const shuffleData = shuffleArray(data.products);
      setRandomData(shuffleData);
    }
  }, [data]);


  return (
    <>
      <main className="bg-slate-200">
        <Craousel />
        <CategoryCarousel
          title="Home Decoration"
          data={productData}
          isLoading={isLoading}
          isSuccess={isSuccess}
          category={"lighting"}
          subHeading={"Rgb, Pot & more"}
          link={'home-decoration'}
          bgUrl={
            "https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <ProductCarousel
          data={randomData}
          isLoading={isLoading}
          isSuccess={isSuccess}
          start = {0}
          end = {10}
        />
        <CategoryCarousel
          title="Ladies Bags"
          data={productData}
          isLoading={isLoading}
          isSuccess={isSuccess}
          category={"womens-bags"}
          link={'womens-bags'}
          subHeading={"Levis, Exotic & more"}
          bgUrl={
            "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <ProductCarousel
          data={randomData}
          isLoading={isLoading}
          isSuccess={isSuccess}
          start = {10}
          end = {20}
        />
        <CategoryCarousel
          title="Men's Fashion"
          data={productData}
          isLoading={isLoading}
          isSuccess={isSuccess}
          link={'mens-shirts'}
          subHeading={"Hrx, Nike & more"}
          category={"mens-shirts"}
          bgUrl={
            "https://i.pinimg.com/originals/3a/12/37/3a123741a947626035d90b81610176c4.jpg"
          }
        />
        <ProductCarousel
          data={randomData}
          isLoading={isLoading}
          isSuccess={isSuccess}
          start = {20}
          end = {30}
        />
        <CategoryCarousel
          title="Sunglasses"
          data={productData}
          isLoading={isLoading}
          isSuccess={isSuccess}
          link={'sunglasses'}
          subHeading={"Gucci, Fastrack & more"}
          category={"sunglasses"}
          bgUrl={
            "https://i.pinimg.com/originals/0c/1c/f1/0c1cf104132d57bb3a70a66bc459d852.jpg"
          }
        />
        <ProductCarousel
          data={randomData}
          isLoading={isLoading}
          isSuccess={isSuccess}
          start = {30}
          end = {40}
        />
        <CategoryCarousel
          title="Ladies Fashion"
          data={productData}
          isLoading={isLoading}
          isSuccess={isSuccess}
          link={'womens-dresses'}
          subHeading={"Tops, Sweater & more"}
          category={"tops"}
          bgUrl={
            "https://cdn.pixabay.com/photo/2017/04/04/10/51/girl-2201009_1280.jpg"
          }
        />
        <ProductCarousel
          data={randomData}
          isLoading={isLoading}
          isSuccess={isSuccess}
          start = {40}
          end = {50}
        />
      </main>
    </>
  );
}
