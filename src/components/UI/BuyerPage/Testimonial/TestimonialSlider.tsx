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

import "./css/testimonial.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TTestimonialProps } from "@/commonTypes";

const TestimonialSlider = ({ testimonialData }: TTestimonialProps) => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Swiper
      slidesPerView={isSmallDevice ? 1 : 2}
      autoplay={{
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {testimonialData.map((testimonial, index) => (
        <SwiperSlide key={testimonial?._id}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap="35px"
            width="592px"
            minHeight="364px"
            padding="32px"
            sx={{ backgroundColor: "secondary.main" }}
          >
            <Box>
              <Rating
                name="read-only"
                value={testimonial?.userRating}
                readOnly
              />
            </Box>
            <Typography
              textAlign="center"
              fontSize="18px"
              fontFamily="poppins"
              color="#6B7280"
            >
              {testimonial?.userTestimonial}
            </Typography>

            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box height={48} width={48} sx={{ borderRadius: "20px" }}>
                <Avatar alt="Remy Sharp" src={testimonial?.userImage} />
              </Box>
              <Typography fontSize="20px" color="black">
                {testimonial?.userName}
              </Typography>
              <Typography fontSize="16px" color="#6B7280">
                {testimonial?.userDesignation}
              </Typography>
            </Stack>
          </Stack>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
