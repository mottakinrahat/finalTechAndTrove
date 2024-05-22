"use client";
import React from "react";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import { useAppSelector } from "@/redux/hooks";
import { toogleThemes } from "@/redux/themeSlice/themeSlice";

import ProductCategory from "@/components/UI/HomePage/ProductCategory/ProductCategory";
import TrendingProducts from "@/components/UI/HomePage/TrendingProducts/TrendingProducts";
import BrandDisplay from "@/components/UI/BuyerPage/BrandDisplay/BrandDisplay";

const HomePage = () => {
  const darkMode = useAppSelector(toogleThemes);
  return (
    <div
      className={`${
        darkMode ? "text-white bg-[#3C0753]" : "text-black bg-white"
      }`}
    >
      <HeroSection />
      <ProductCategory />
      <TrendingProducts />
      <BrandDisplay />
    </div>
  );
};

export default HomePage;
