import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import twitterIcon from "../../../assets/icons/twitter.png";
import facebookIcon from "../../../assets/icons/facebook.png";
import linkedInIcon from "../../../assets/icons/linkedIn.png";
import victoryIcon from "../../../assets/icons/victory.png";

const icons = [
  {
    icon: facebookIcon,
  },
  {
    icon: twitterIcon,
  },
  {
    icon: linkedInIcon,
  },
  {
    icon: victoryIcon,
  },
];

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        padding: "64px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <Stack direction="column" spacing={2}>
            <Image
              src="https://i.ibb.co/HhbnBms/Hertiage-Nest-Final-LOGO-1-1.png"
              height={40}
              width={40}
              alt="alternative"
            />
            <Typography maxWidth="320px">
              Design amazing digital experiences that create more happy in the
              world.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={2} sm={2}>
          <Stack direction="column" spacing={2}>
            <Typography sx={{ color: "#667085", fontSize: "14px" }}>
              Product
            </Typography>
            <Typography>Overview</Typography>
            <Typography>Features</Typography>
            <Typography>Solutions</Typography>
            <Typography>Tutorials</Typography>
            <Typography>Pricing</Typography>
            <Typography>Releases</Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Stack direction="column" spacing={2}>
            <Typography sx={{ color: "#667085", fontSize: "14px" }}>
              Company
            </Typography>
            <Typography>About us</Typography>
            <Typography>Careers</Typography>
            <Typography>Press</Typography>
            <Typography>News</Typography>
            <Typography>Media kit</Typography>
            <Typography>Contact</Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Stack direction="column" spacing={2}>
            <Typography sx={{ color: "#667085", fontSize: "14px" }}>
              Resources
            </Typography>
            <Typography>Blog</Typography>
            <Typography>Newsletter</Typography>
            <Typography>Events</Typography>
            <Typography>Help centre</Typography>
            <Typography>Tutorials</Typography>
            <Typography>Support</Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Stack direction="column" spacing={2}>
            <Typography sx={{ color: "#667085", fontSize: "14px" }}>
              Social
            </Typography>
            <Typography>Twitter</Typography>
            <Typography>LinkedIn</Typography>
            <Typography>Facebook</Typography>
            <Typography>GitHub</Typography>
            <Typography>AngelList</Typography>
            <Typography>Dribbble</Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={1}>
          <Stack direction="column" spacing={2}>
            <Typography sx={{ color: "#667085", fontSize: "14px" }}>
              Legal
            </Typography>
            <Typography>Terms</Typography>
            <Typography>Privacy</Typography>
            <Typography>Cookies</Typography>
            <Typography>Licenses</Typography>
            <Typography>Settings</Typography>
            <Typography>Contact</Typography>
          </Stack>
        </Grid>
      </Grid>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        paddingTop="64px"
      >
        <Typography>© 2024 Heritage- Nest . All rights reserved.</Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          {icons.map((icon, index) => (
            <Box key={index}>
              <Image src={icon?.icon} height={20} width={20} alt="icons" />
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
