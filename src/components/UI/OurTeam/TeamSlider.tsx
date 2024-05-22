"use client";
import React from "react";
// Import Swiper styles
import { Box, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import "swiper/css";
import "swiper/css/pagination";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import "./css/team.css";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const TeamSlider = ({ teamData }: any) => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Swiper
      slidesPerView={isSmallDevice ? 1 : 3}
      autoplay={{
        delay: 2500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {teamData.map((team: any, index: number) => (
        <SwiperSlide key={index + 1}>
          <Image
            src={team.teamImage}
            height={400}
            width={400}
            alt="imageIcon"
          ></Image>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamSlider;
