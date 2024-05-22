import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import bedIcon from "@/assets/amenitiesIcons/bed.png";
import bathIcon from "@/assets/amenitiesIcons/bathtub.png";
import balconyIcon from "@/assets/amenitiesIcons/balcony.png";
import furnishedIcon from "@/assets/amenitiesIcons/shelves.png";
import Image from "next/image";
const Overview1 = [
  {
    icon: bedIcon,
    element: "2 Beds",
  },
  {
    icon: bathIcon,
    element: "2 Bath",
  },
  {
    icon: balconyIcon,
    element: "2 Balcony",
  },
  {
    icon: furnishedIcon,
    element: "Fully Furnished",
  },
];
const overview2 = [
  {
    elements: "Carpet Area",
    amount: "2000 sqft",
    additional: "$ 225/sqft",
  },
  {
    elements: "Floor",
    amount: "Second (Out of 6th floor)",
  },
  {
    elements: "Transaction Type",
    amount: "Ready to move",
  },
  {
    elements: "Lift",
    amount: "1",
  },
  {
    elements: "Facing",
    amount: "North - East",
  },
  {
    elements: "Additional Rooms",
    amount: "1 servant room & 1 gust room",
  },
  {
    elements: "Age of construction",
    amount: "New Construction",
  },
];

const Overview = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: "#F9FAFB", padding: "24px", color: "black" }}>
        <Typography fontSize="24px" fontWeight="bold">
          Overview
        </Typography>

        <Stack
          sx={{ borderBottom: "1px solid #CAC7C7" }}
          direction="row"
          flexWrap="wrap"
          justifyContent="space-around"
          bgcolor="white"
          py={1}
        >
          {Overview1.map((overview, index) => (
            <Stack
              direction="row"
              flexWrap="wrap"
              alignItems="center "
              gap={2}
              key={index + 1}
            >
              <Box>
                <Image
                  src={overview?.icon}
                  height={24}
                  width={24}
                  alt="icons"
                ></Image>
              </Box>
              <Typography>{overview?.element}</Typography>
            </Stack>
          ))}
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={6}
          flexWrap="wrap"
          py="32px"
        >
          {overview2?.map((overviews, index) => (
            <Stack
              direction="column"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="flex-start"
              key={index + 1}
            >
              <Typography fontSize="16px" color="#5C5C5C">
                {overviews?.elements}
              </Typography>
              <Typography fontSize="16px" fontWeight="bold">
                {overviews?.amount}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
    </div>
  );
};

export default Overview;
