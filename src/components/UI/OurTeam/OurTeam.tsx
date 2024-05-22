import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import image1 from "@/assets/aboutPage/man1.png";
import image2 from "@/assets/aboutPage/man2.png";
import image3 from "@/assets/aboutPage/man3.png";
import image4 from "@/assets/aboutPage/man1.png";
import image5 from "@/assets/aboutPage/man2.png";
import image6 from "@/assets/aboutPage/man3.png";
import TeamSlider from "./TeamSlider";
import Container from "@/Container/Container";

const teamData = [
  {
    teamImage: image1,
  },
  {
    teamImage: image2,
  },
  {
    teamImage: image3,
  },
  {
    teamImage: image4,
  },
  {
    teamImage: image5,
  },
  {
    teamImage: image6,
  },
];
const OurTeam = () => {
  return (
    <Container>
      <Box>
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
            Our Team
          </Typography>
        </Box>
        <Typography fontSize="40px" fontWeight="bold">
          Discover the Faces Behind Our Success
        </Typography>
        <Stack>
          <TeamSlider teamData={teamData} />
        </Stack>
      </Box>
    </Container>
  );
};

export default OurTeam;
