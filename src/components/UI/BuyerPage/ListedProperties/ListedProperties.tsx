"use client";
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useGetPropertiesQuery } from "@/redux/api/propertiesApi";
import SliderCard from "../PopularProperties/SliderCard";
import LoadingRound from "@/Loading/LoadingRound";

const ListedProperties = () => {
  const { data, isLoading } = useGetPropertiesQuery(null);
  if (isLoading) {
    return (
      <div>
        <LoadingRound />
      </div>
    );
  }

  const reversedData = [...data?.data].reverse();

  return (
    <Box marginX={{ md: "112px", sm: "20px", xs: "20px" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize="32px">
          New Listed Properties
        </Typography>
        <Link href="/allProperty">See all property</Link>
      </Stack>

      <SliderCard propertiesData={reversedData} />
    </Box>
  );
};

export default ListedProperties;
