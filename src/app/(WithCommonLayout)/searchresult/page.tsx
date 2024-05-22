"use client";
import React from "react";
import SearchResultTabs from "@/components/UI/search-result/SearchResultTabs";
import HomeLoan from "@/components/UI/search-result/HomeLoan";
import Testimonial from "@/components/UI/BuyerPage/Testimonial/Testimonial";
import { useAppSelector } from "@/redux/hooks";
import { toogleThemes } from "@/redux/themeSlice/themeSlice";

const SearchResultPage = () => {
  const darkMode = useAppSelector(toogleThemes);
  return (
    <div
      className={`${
        darkMode ? "text-white bg-[#3C0753]" : "text-black bg-white"
      }`}
    >
      <div className=" px-10 lg:px-[112px] ">
        <SearchResultTabs />
      </div>
      <div className="lg:py-[64px] px-20 lg:px-[112px] py-20">
        <HomeLoan />
      </div>
      <div className="py-20">
        <Testimonial />
      </div>
    </div>
  );
};

export default SearchResultPage;
