"use client";
import React from "react";
import { useGetCategoryQuery } from "@/redux/api/categoryApi";
import LoadingRound from "@/Loading/LoadingRound";
import TrendingProductCard from "@/components/UI/HomePage/TrendingProducts/TrendingProductCard";
import { Box, Container, Stack } from "@mui/material";
import Title from "@/components/UI/Title/Title";

const ProductCategoryPage = ({ params }: any) => {
  const query = params?.productName;
  const { data, isLoading } = useGetCategoryQuery(query);
  if (isLoading) {
    return (
      <>
        <LoadingRound />
      </>
    );
  }
  console.log(data?.data);
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

export default ProductCategoryPage;
