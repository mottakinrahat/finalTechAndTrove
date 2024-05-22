"use client";
import EfficientAndTransparent from "@/components/UI/AboutUs/EfficientAndTransparent/EfficientAndTransparent";
import CardK from "@/components/UI/BuyerPage/Card2k/CardK";
import Testimonial from "@/components/UI/BuyerPage/Testimonial/Testimonial";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import MeetSection from "@/components/UI/OurTeam/MeetSection/MeetSection";
import OurTeam from "@/components/UI/OurTeam/OurTeam";
import { useAppSelector } from "@/redux/hooks";
import { toogleThemes } from "@/redux/themeSlice/themeSlice";
import React from "react";

const AboutUsPage = () => {
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
            backgroundImage: `url('https://i.ibb.co/L1c67T3/Frame-4-1.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
      <div className="lg:py-[50px] py-20">
        <CardK />
      </div>
      <div>
        <EfficientAndTransparent />
      </div>
      <div>
        <OurTeam />
      </div>
      <div className="py-[64px]">
        <MeetSection />
      </div>
      <div className="pb-[64px]">
        <Testimonial />
      </div>
    </div>
  );
};

export default AboutUsPage;
