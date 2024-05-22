"use client";
import { Box, Stack, Typography } from "@mui/material";

import Link from "next/link";
import React from "react";

import { useGetPropertiesQuery } from "@/redux/api/propertiesApi";
import SliderCard from "./SliderCard";

import LoadingRound from "@/Loading/LoadingRound";

const PopularProperties = () => {
  const { data, isLoading } = useGetPropertiesQuery(null);
  if (isLoading) {
    return (
      <div>
        <LoadingRound />
      </div>
    );
  }

  return (
    <Box marginX={{ md: "112px", sm: "20px", xs: "20px" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize="32px">
          Popular Properties
        </Typography>
        <Link href="/allProperty">See all property</Link>
      </Stack>

      <Stack>
        <SliderCard propertiesData={data?.data} />
      </Stack>
    </Box>
  );
};

export default PopularProperties;
