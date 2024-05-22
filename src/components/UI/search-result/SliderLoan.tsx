"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "$20K",
  },
  {
    value: 20,
    label: "$30K",
  },
  {
    value: 40,
    label: "$40K",
  },
  {
    value: 60,
    label: "$50K",
  },
  {
    value: 90,
    label: "$60K+",
  },
];

export function valuetext(value: number) {
  return `${value}°C`;
}

const SliderLoan = () => {
  return (
    <Box
      sx={{
        width: {
          xs: 180, // Width for extra-small devices
          sm: 200, // Width for small devices
          md: 400, // Width for medium devices
        },
        height: 20,
      }}
    >
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
};

export default SliderLoan;
