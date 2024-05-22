import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import bedIcon from "@/assets/amenitiesIcons/bed.png";
import bathIcon from "@/assets/amenitiesIcons/bathtub.png";
import balconyIcon from "@/assets/amenitiesIcons/balcony.png";
import furnishedIcon from "@/assets/amenitiesIcons/shelves.png";
import Image from "next/image";

import power from "@/assets/amenitiesIcons/power.png";
import lift from "@/assets/amenitiesIcons/Lift.png";
import clubHouse from "@/assets/amenitiesIcons/clubHouse.png";
import DTH from "@/assets/amenitiesIcons/DTH.png";
import garden from "@/assets/amenitiesIcons/garden.png";
import gym from "@/assets/amenitiesIcons/gym.png";
import security from "@/assets/amenitiesIcons/gaurd.png";
import intercorn from "@/assets/amenitiesIcons/intercorn.png";
import laundry from "@/assets/amenitiesIcons/laundry.png";
import jogging from "@/assets/amenitiesIcons/jogging.png";
import KidsPlay from "@/assets/amenitiesIcons/kidsPlay.png";
import learning from "@/assets/amenitiesIcons/learning.png";

import maintenance from "@/assets/amenitiesIcons/maintance.png";
import privateParking from "@/assets/amenitiesIcons/park.png";
import pipedGas from "@/assets/amenitiesIcons/pipedGas.png";
import reservedPark from "@/assets/amenitiesIcons/reservedpark.png";
import services from "@/assets/amenitiesIcons/service.png";
import tennisPlay from "@/assets/amenitiesIcons/tennis.png";
import vastu from "@/assets/amenitiesIcons/vastu.png";
import badminton from "@/assets/amenitiesIcons/badminton.png";
import visitorParking from "@/assets/amenitiesIcons/visitorParking.png";
import waterStorage from "@/assets/amenitiesIcons/waterStorage.png";
import wasterDisposal from "@/assets/amenitiesIcons/wdisposal.png";
import wifi from "@/assets/amenitiesIcons/wifi.png";

const Overview1 = [
  {
    icon: power,
    element: "Power Supply",
  },
  {
    icon: lift,
    element: "Lift",
  },
  {
    icon: clubHouse,
    element: "Club House",
  },
  {
    icon: garden,
    element: "Garden",
  },
  {
    icon: gym,
    element: "Gymnasium",
  },
  {
    icon: security,
    element: "High security",
  },
  {
    icon: intercorn,
    element: "intercorn",
  },
  {
    icon: laundry,
    element: "laundry services",
  },
  {
    icon: jogging,
    element: "jogging space",
  },
  {
    icon: KidsPlay,
    element: "Kids playground",
  },
  {
    icon: learning,
    element: "learning center",
  },
  {
    icon: maintenance,
    element: "maintenance",
  },
  {
    icon: privateParking,
    element: "privateParking",
  },
  {
    icon: pipedGas,
    element: "piped Gas",
  },
  {
    icon: reservedPark,
    element: "reserved Park",
  },
  {
    icon: services,
    element: "Services",
  },
  {
    icon: tennisPlay,
    element: "tennis Playground",
  },
  {
    icon: vastu,
    element: "vastu",
  },
  {
    icon: badminton,
    element: "badminton playground",
  },
  {
    icon: visitorParking,
    element: "Visitors Parking",
  },
  {
    icon: waterStorage,
    element: "Water Storage",
  },
  {
    icon: wasterDisposal,
    element: "Water Disposal",
  },
  {
    icon: wifi,
    element: "wifi/internet",
  },
];

const Amenities = () => {
  return (
    <div className="my-[60px]">
      <Box sx={{ backgroundColor: "#F9FAFB", padding: "24px", color: "black" }}>
        <Typography fontSize="24px" fontWeight="bold" marginBottom="32px">
          Amenities
        </Typography>

        <Grid mx="auto" container spacing={2}>
          {Overview1.map((overview, index) => (
            <Grid item xs={6} sm={3} key={index + 1}>
              <Box display="flex" alignItems="center" gap={2}>
                <Image
                  src={overview?.icon}
                  height={24}
                  width={24}
                  alt="icons"
                />
                <Typography>{overview?.element}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Amenities;
