import React from "react";
import location from "@/assets/icons/fi-bs-marker.png";
import rectangle from "@/assets/icons/Rectangle 26.png";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
const Card = () => {
  return (
    <Stack width="385px" minHeight="388px" sx={{ backgroundColor: "#F9FAFB" }}>
      <Box>
        <Image
          src="https://i.ibb.co/SJ5mWSg/imagesroom.jpg"
          height={200}
          width={385}
          objectFit="cover"
          alt="df"
        ></Image>
      </Box>
      <Box padding="16px">
        <Stack direction="row" justifyContent="space-between">
          <Typography
            fontFamily="Poppins"
            fontSize="14px"
            bgcolor="#C5E2FF"
            paddingX="8px"
            paddingY="4px"
            borderRadius="5px"
          >
            Apartment
          </Typography>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            gap="2px"
          >
            <Image src={rectangle} height={8} width={8} alt="8"></Image>
            <Typography fontSize="16px">Ready to Move</Typography>
          </Stack>
        </Stack>
        <Typography fontSize="20px" fontWeight="bold" marginTop="4px">
          SunnySlope Suites
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "flex-start",
            gap: "8px",
          }}
        >
          <Image src={location} height={20} width={20} alt="8"></Image>
          <Typography fontSize="16px" color="#6B7280">
            Meadowshire Park, Greenfield, USA
          </Typography>
        </Box>
        <Typography fontSize="24px" fontWeight="bold" marginTop="24px">
          $ 250000
        </Typography>
      </Box>
    </Stack>
  );
};

export default Card;
