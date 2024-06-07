import React from "react";
import { Box, Paper } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const CartPage: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: "#F5F5F5", p: 2 }}
    >
      <Paper
        elevation={3}
        sx={{
          width: { xs: "100%", sm: "75%", md: "60%", lg: "50%" },
          p: 4,
          backgroundColor: "#ffd978",
          borderRadius: "16px",
          boxShadow: 4,
        }}
      >
        <Box display="flex" justifyContent="center">
          <Paper
            elevation={3}
            sx={{
              width: "100%",
              p: { xs: 2, sm: 4 },
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              boxShadow: 4,
            }}
          >
            <ShoppingCart />
          </Paper>
        </Box>
      </Paper>
    </Box>
  );
};

export default CartPage;
