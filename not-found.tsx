"use client";
import React from "react";
import notFound from "@/assets/lottie/notFound.json";
import { Box, Button, Stack, Typography } from "@mui/material";
import Lottie from "lottie-react";
import Link from "next/link";
const NotFoundPage = () => {
  return (
    <div>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={4}
        py={10}
      >
        <Box sx={{ maxWidth: 400 }}>
          <Lottie animationData={notFound}></Lottie>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography pb={4} fontSize={40} fontWeight="bold">
            This Page is not Found
          </Typography>
          <Button component={Link} href="/">
            Home Page
          </Button>
        </Box>
      </Stack>
    </div>
  );
};

export default NotFoundPage;
