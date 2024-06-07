"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./css/sliderStyle.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import LoadingRound from "@/Loading/LoadingRound";
const ImageSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#000",
          } as any
        }
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImageSlider;
