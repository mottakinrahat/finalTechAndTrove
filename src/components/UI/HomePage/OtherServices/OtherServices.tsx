import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import imageIcon from "../../../../assets/homePageImages/HomeIcon.png";
import Rectangle from "../../../../assets/homePageImages/Rectangle 2.png";
import Image from "next/image";

const otherServicesInfo = [
  {
    title: "Advanced Property Search",
    description:
      "Effortlessly find your dream property with advanced search filters.",
  },
  {
    title: "Virtual Tours and Multimedia",
    description:
      "Experience properties like never before with immersive virtual tours.",
  },
  {
    title: "Secure Online Transactions",
    description:
      "Ensure safe and secure transactions with our online payment system.",
  },
];

const OtherServices = () => {
  return (
    <Box sx={{ paddingBottom: "40px" }}>
      <Typography
        sx={{ fontWeight: "bold", fontSize: "40px", textAlign: "center" }}
      >
        Other Services
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap="32px"
        marginTop="64px"
      >
        {otherServicesInfo.map((service, index) => (
          <Box
            key={index} // Use index as the key
            sx={{
              backgroundColor: "secondary.main",
              height: "200px",
              width: "384px",
              padding: "24px",
              borderRadius: "5px",
            }}
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              gap="20px"
            >
              <Box sx={{ position: "relative" }}>
                <Box marginTop="8px">
                  <Image
                    src={Rectangle}
                    height={60}
                    width={60}
                    alt="icons"
                  ></Image>
                </Box>
                <Image
                  className="absolute top-4 left-2"
                  src={imageIcon}
                  height={20}
                  width={20}
                  alt="icons2"
                ></Image>
              </Box>
              <Box>
                <Typography
                  fontSize="24px"
                  sx={{
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  {service?.title} {/* Use service.title */}
                </Typography>
                <Typography color="#6B7280" fontSize="16px" marginTop="16px">
                  {service?.description} {/* Use service.description */}
                </Typography>
              </Box>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default OtherServices;
