import React from "react";
import TrendingProductCard from "./TrendingProductCard";
import { Container } from "@mui/material";
import { useGetSmartWatchQuery } from "@/redux/api/smartWatchApi";
import LoadingRound from "@/Loading/LoadingRound";

const TrendingProducts = () => {
  const { data, isLoading } = useGetSmartWatchQuery(undefined);
  if (isLoading) {
    return (
      <>
        {" "}
        <LoadingRound />
      </>
    );
  }
  return (
    <Container>
      <div>
        {data.map((watch: any, index: number) => (
          <TrendingProductCard key={watch._id} watch={watch} />
        ))}
      </div>
    </Container>
  );
};

export default TrendingProducts;
