"use client";
import React, { useState, useEffect } from "react";
import { Box, Paper, Typography, Button, Grid, Container } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useGetCartQuery } from "@/redux/api/cartApi";
import QuantityInput from "@/components/QuantityInput/QuantityInput";

const CartPage: React.FC = () => {
  const { data, isLoading } = useGetCartQuery(null);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    if (data) {
      const initialQuantities = data.data.reduce((acc: any, product: any) => {
        acc[product.productId._id] = product.quantity || 1;
        return acc;
      }, {});
      setQuantities(initialQuantities);
    }
  }, [data]);

  const handleDelete = (productId: string) => {
    // Your delete logic here
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <Container>
      <Box sx={{ margin: "60px", paddingTop: "40px" }}>
        {data?.data?.map((product: any, index: number) => (
          <Paper
            key={product?.productId?._id}
            style={{ marginBottom: 10, padding: 10 }}
          >
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={6}>
                <Typography>{product?.productId?.name}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>Price: ${product?.productId.price}</Typography>
              </Grid>
              <Grid item xs={2}>
                <QuantityInput
                  value={quantities[product?.productId?._id] || 1}
                  onChange={(newValue: number) =>
                    handleQuantityChange(product?.productId?._id, newValue)
                  }
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(product?.productId?._id)}
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end", padding: "20px" }}>
        <Button>Check Out</Button>
      </Box>
    </Container>
  );
};

export default CartPage;
