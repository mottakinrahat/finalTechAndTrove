"use client";
import React from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Grid,
  TextField,
  Container,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import { useGetCartQuery } from "@/redux/api/cartApi";

const CartPage: React.FC = () => {
  const { data, isLoading } = useGetCartQuery(null);

  const handleDelete = (productId: string) => {};

  const handleQuantityChange = (productId: string, quantity: number) => {};

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <Container>
      <Box sx={{ marginTop: "60px" }}>
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
                <Typography>Price: ${product?.price}</Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  type="number"
                  label="Quantity"
                  value={product?.quantity}
                  InputProps={{
                    inputProps: { min: 1 },
                    endAdornment: (
                      <Button size="small">
                        <RemoveCircleOutlineIcon />
                      </Button>
                    ),
                    startAdornment: (
                      <Button size="small">
                        <AddCircleOutlineIcon />
                      </Button>
                    ),
                  }}
                  onChange={(e) =>
                    handleQuantityChange(
                      product?.productId?._id,
                      parseInt(e.target.value)
                    )
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
    </Container>
  );
};

export default CartPage;
