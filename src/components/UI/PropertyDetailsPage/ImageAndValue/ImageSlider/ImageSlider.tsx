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
import { useGetPropertiesQuery } from "@/redux/api/propertiesApi";
import LoadingRound from "@/Loading/LoadingRound";
const ImageSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { data, isLoading } = useGetPropertiesQuery(undefined);

  if (isLoading) {
    return (
      <div>
        <LoadingRound />
      </div>
    );
  }
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
        {data?.data.map((image: any) => (
          <SwiperSlide key={image?._id}>
            <img src={image?.propertyImage} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {data?.data.map((image: any) => (
          <SwiperSlide key={image?._id}>
            <img src={image?.propertyImage} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageSlider;
