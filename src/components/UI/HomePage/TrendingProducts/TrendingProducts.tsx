"use client";
import React from "react";
import TrendingProductCard from "./TrendingProductCard";
import { Box, Container, Stack } from "@mui/material";
import { useGetSmartWatchQuery } from "@/redux/api/smartWatchApi";
import LoadingRound from "@/Loading/LoadingRound";
import Title from "../../Title/Title";

const TrendingProducts = () => {
  const { data, isLoading, error } = useGetSmartWatchQuery(null);

  if (isLoading) {
    return (
      <div>
        {" "}
        <LoadingRound />
      </div>
    );
  }

  return (
    <Container>
      <Box sx={{ marginTop: "80px" }}>
        <Title
          upperText="GO TO DAILY DEALS"
          heading="TRENDING PRODUCTS"
        ></Title>
      </Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexWrap={{ xs: "wrap", md: "nowrap" }}
        gap={1}
      >
        {data?.data.map((product: any) => (
          <TrendingProductCard key={product._id} product={product} />
        ))}
      </Stack>
    </Container>
  );
};

export default TrendingProducts;
