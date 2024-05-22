"use client";
import React from "react";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import CardK from "@/components/UI/BuyerPage/Card2k/CardK";
import PopularProperties from "@/components/UI/BuyerPage/PopularProperties/PopularProperties";
import ListedProperties from "@/components/UI/BuyerPage/ListedProperties/ListedProperties";
import Testimonial from "@/components/UI/BuyerPage/Testimonial/Testimonial";
import BuyCard from "./BuyCard/BuyCard";
import { useAppSelector } from "@/redux/hooks";
import { toogleThemes } from "@/redux/themeSlice/themeSlice";

const Buy = () => {
  const darkMode = useAppSelector(toogleThemes);

  return (
    <div
      className={`${
        darkMode ? "text-white bg-[#3C0753]" : "text-black bg-white"
      }`}
    >
      <div className="relative">
        <HeroSection
          sx={{
            height: "309px",
            width: "100%",
            backgroundImage: `url('https://i.ibb.co/YDfnK3M/Frame-108.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
      <div className="absolute top-1/4 lg:left-60 w-[980px]">
        <BuyCard />
      </div>
      <div className="py-[60px] mt-60">
        <CardK />
      </div>
      <div className="py-[70px]">
        <PopularProperties />
      </div>
      <div className="py-[70px]">
        <ListedProperties />
      </div>
      <div className="py-6">
        <Testimonial />
      </div>
    </div>
  );
};

export default Buy;
