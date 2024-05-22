import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import image1 from "@/assets/aboutPage/houseBuild.jpg";
import image2 from "@/assets/aboutPage/handshake.png";

const efficientSection = [
  {
    image: image1,
    header: "Our Story",
    description:
      "In the symphony of bustling markets and serene landscapes, Heritage-Nest was born—a vision to",
  },
  {
    image: image2,
    header: "Mission Statement",
    description:
      "To bridge the miles with smiles, Heritage-Nest pledges to be the golden thread connecting NRIs to their homeland, through trust, transparency, and tailored real estate solutions.",
  },
];
const EfficientAndTransparent = () => {
  return (
    <Container>
      {efficientSection.map((efficient, index) => (
        <Box
          key={index + 1}
          sx={{
            position: "relative",
            display: { md: "flex" },
            justifyContent: "center",
            gap: "40px",
            alignItems: "center",
            marginBottom: "120px",
          }}
        >
          <Box
            sx={{
              display: { md: index === 0 ? "flex" : "flex-reverse" },
              justifyContent: "center",
              marginRight: { md: index == 0 ? "180px" : "0px" },
              marginLeft: { md: index == 0 ? "0px" : "180px" },
            }}
          >
            <Image
              src={efficient?.image}
              height={455}
              width={index === 0 ? 904 : 710}
              alt="icons"
            />
          </Box>
          <Box
            sx={{
              minHeight: "270px",
              maxWidth: "592px",
              backgroundColor: index === 0 ? "secondary.main" : "#FDF0E7",
              padding: "32px",
              position: { md: "absolute", sm: "relative" },
              bottom: 0,
              ...(index === 0 ? { right: 100 } : { left: 150 }),
              transform: "translateY(80px)",
            }}
          >
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
                {efficient.header}
              </Typography>
            </Box>
            <Typography
              color="black"
              fontSize="36px"
              fontWeight="bold"
              marginTop="16px"
            >
              Efficient and Transparent Home Buying Solutions
            </Typography>
            <Typography fontSize="16px" color="#6B7280" marginTop="24px">
              {efficient.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default EfficientAndTransparent;
