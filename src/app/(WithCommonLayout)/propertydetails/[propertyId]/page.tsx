"use client";
import OtherServices from "@/components/UI/HomePage/OtherServices/OtherServices";
import Amenities from "@/components/UI/PropertyDetailsPage/Amenities/Amenities";
import ImageAndOverView from "@/components/UI/PropertyDetailsPage/ImageAndValue/ImageAndOverView";
import NearbyProperty from "@/components/UI/PropertyDetailsPage/NearbyPoperty/NearbyProperty";
import { useAppSelector } from "@/redux/hooks";
import { toogleThemes } from "@/redux/themeSlice/themeSlice";

import React from "react";

const PropertyDetailsPage = () => {
  const darkMode = useAppSelector(toogleThemes);
  return (
    <div
      className={`lg:px-[112px] px-20 py-40 ${
        darkMode ? "text-white bg-[#3C0753]" : "text-black bg-white"
      }`}
    >
      <ImageAndOverView />
      <Amenities />
      <OtherServices />
      <NearbyProperty />
    </div>
  );
};

export default PropertyDetailsPage;
