import Container from "@/Container/Container";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import image from "@/assets/aboutPage/houseInHand.png";
const MeetSection = () => {
  return (
    <Container>
      <Stack
        direction={{ md: "row", sm: "column", xs: "column" }}
        justifyContent="space-between"
        alignItems="center"
        gap={{ md: "0px", sm: "20px", xs: "20px" }}
      >
        <Box sx={{ maxWidth: "696px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Box
              sx={{
                height: "4px",
                width: "51px",
                backgroundColor: "#EE6611",
              }}
            ></Box>
            <Typography fontSize="18px" color="#EE6611">
              Meet the Team For Book Consultation{" "}
            </Typography>
          </Box>
          <Typography fontSize="40px" fontWeight="bold">
            Meet the stewards of your heritage journey
          </Typography>
          <Typography fontSize="16px" color="#6B7280" marginTop="24px">
            each member an embodiment of expertise and warmth, dedicated to
            guiding you home, every step of the way.
          </Typography>
          <Box marginTop="48px">
            <Button>Book Consultation Now</Button>
          </Box>
        </Box>
        <Box>
          <Image src={image} height={384} width={304} alt="alternative"></Image>
        </Box>
      </Stack>
    </Container>
  );
};

export default MeetSection;
