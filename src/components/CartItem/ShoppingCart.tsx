"use client";
import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  IconButton,
  Button,
  Divider,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { useGetCartQuery } from "@/redux/api/cartApi";
import LoadingRound from "@/Loading/LoadingRound";

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartItemProps {
  product: Product;
  onAdd: (id: string) => void;
  onRemove: (id: string) => void;
  onDelete: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  product,
  onAdd,
  onRemove,
  onDelete,
}) => (
  <Card sx={{ mb: 2, p: 2, boxShadow: 3 }}>
    <CardContent>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {product.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "gray" }}
          >{`$${product.price.toFixed(2)}`}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <IconButton
              onClick={() => onRemove(product.id)}
              sx={{
                backgroundColor: "#f0f0f0",
                borderRadius: "50%",
                padding: "6px",
                margin: "0 8px",
              }}
            >
              <Remove />
            </IconButton>
            <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              {product.quantity}
            </Typography>
            <IconButton
              onClick={() => onAdd(product.id)}
              sx={{
                backgroundColor: "#f0f0f0",
                borderRadius: "50%",
                padding: "6px",
                margin: "0 8px",
              }}
            >
              <Add />
            </IconButton>
            <Typography
              variant="body1"
              sx={{
                ml: 2,
                fontWeight: "bold",
                width: "80px",
                textAlign: "right",
              }}
            >{`$${(product.price * product.quantity).toFixed(2)}`}</Typography>
            <IconButton
              onClick={() => onDelete(product.id)}
              sx={{
                backgroundColor: "#f0f0f0",
                borderRadius: "50%",
                padding: "6px",
                margin: "0 8px",
              }}
            >
              <Delete />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

const ShoppingCart: React.FC = () => {
  const { data, isLoading } = useGetCartQuery(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (data?.data) {
      const transformedProducts = data.data.map((item: any) => ({
        id: item.productId._id,
        name: item.productId.name,
        price: item.productId.price,
        quantity: 1, 
      }));
      setProducts(transformedProducts);
    }
  }, [data]);

  const handleAdd = (id: string) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleRemove = (id: string) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: product.quantity > 1 ? product.quantity - 1 : 1,
            }
          : product
      )
    );
  };

  const handleDelete = (id: string) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const subtotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  if (isLoading) {
    return <LoadingRound />;
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: 3,
      }}
    >
      <Box my={4}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", textAlign: "center", color: "#ffb467" }}
        >
          Shopping Cart
        </Typography>
        {products.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            onAdd={handleAdd}
            onRemove={handleRemove}
            onDelete={handleDelete}
          />
        ))}
        <Divider sx={{ my: 2 }} />
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Sub-Total
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold" }}
          >{`$${subtotal.toFixed(2)}`}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={5}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#ffb467", marginRight: "10px" }}
          >
            Continue Shopping
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#ffb467" }}>
            Checkout
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ShoppingCart;
