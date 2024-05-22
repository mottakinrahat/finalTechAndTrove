"use client";
import { Box, Typography } from "@mui/material";
import React from "react";

import { useGetTestimonialQuery } from "@/redux/api/testimonialApi";
import TestimonialSlider from "./TestimonialSlider";
import Loading from "@/Loading/LoadingRound";
import LoadingRound from "@/Loading/LoadingRound";
const Testimonial = () => {
  const { data, isLoading } = useGetTestimonialQuery(null);
  if (isLoading) {
    return (
      <div>
        <LoadingRound />
      </div>
    );
  }
  return (
    <Box marginX={{ md: "112px", sm: "20px", xs: "20px" }}>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "40px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Testimonials
      </Typography>

      <TestimonialSlider testimonialData={data?.data} />
    </Box>
  );
};

export default Testimonial;
