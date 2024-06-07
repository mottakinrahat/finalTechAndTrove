"use client";

import React from "react";
import { Box, Container } from "@mui/material";

import { useGetSmartWatchWithReviewQuery } from "@/redux/api/smartWatchApi";
import LoadingRound from "@/Loading/LoadingRound";
import DetailsData from "@/components/detailspage/DetailsData";

const SmartWatchDetails = ({ params }: any) => {
  const detailsId = params?.productId;
  const { data, isLoading } = useGetSmartWatchWithReviewQuery(detailsId);
  if (isLoading) {
    return (
      <>
        <LoadingRound />
      </>
    );
  }
  const productData = data?.data;

  return (
    <Container maxWidth="xl">
      <Box>
        {productData?.map((watches: any, index: number) => (
          <DetailsData key={watches?._id} watches={watches} />
        ))}
      </Box>
    </Container>
  );
};

export default SmartWatchDetails;
