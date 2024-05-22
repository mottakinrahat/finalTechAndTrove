"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "$300K",
  },

  {
    value: 100,
    label: "$310K+",
  },
];

export function valuetext(value: number) {
  return `${value}°C`;
}

const Sliders = () => {
  return (
    <Box
      sx={{
        width: {
          xs: 180,
          sm: 200,
          md: 300,
        },
        height: 20,
      }}
    >
      <Slider
        track="normal"
        aria-labelledby="track-inverted-range-slider"
        getAriaValueText={valuetext}
        defaultValue={[0, 100]}
        marks={marks}
      />
    </Box>
  );
};

export default Sliders;
