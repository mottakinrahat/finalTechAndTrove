"use client";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SliderLoan from "./SliderLoan";

const HomeLoan = () => {
  return (
    <div>
      <Box
        maxWidth="1008px"
        minHeight="148px"
        sx={{ backgroundColor: "#ECF5FF", padding: "32px" }}
        borderRadius={2}
        color="black"
      >
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          gap="32px"
        >
          <Box>
            <Typography fontSize="28px">Need a Home Loan?</Typography>

            <Typography fontSize="16px" color="#535353">
              Select How much Home loan you can take
            </Typography>
          </Box>
          <Box>
            <SliderLoan />
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default HomeLoan;
