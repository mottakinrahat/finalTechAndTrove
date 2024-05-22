import React from "react";
import TrendingProductCard from "./TrendingProductCard";
import { Container } from "@mui/material";

const TrendingProducts = () => {
  return (
    <Container>
      <div>
        <TrendingProductCard />
      </div>
    </Container>
  );
};

export default TrendingProducts;