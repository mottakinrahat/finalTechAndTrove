import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Overview from "./Overview/Overview";
import Form from "./FormAndMap/Form";
import Map from "./FormAndMap/Map/Map";
import ImageSlider from "./ImageSlider/ImageSlider";
const ImageAndOverView = () => {
  return (
    <div>
      <Stack
        direction={{ md: "row", sm: "column", xs: "column" }}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Box maxWidth={{ md: 700, sm: 400, xs: 300 }}>
          <Stack
            direction={{ md: "row", sm: "column", xs: "column" }}
            justifyContent="space-between"
            alignItems="center"
            gap={2}
          >
            <Box>
              <Typography fontSize="16px" fontWeight="bold">
                3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad
              </Typography>
              <Typography fontSize="16px" color="#606060" width={250}>
                Meadowshire Park, Greenfield, USA
              </Typography>
            </Box>
            <Typography fontSize="24px" fontWeight="bold">
              $ 300000
            </Typography>
          </Stack>
          <ImageSlider />
          <Overview />
        </Box>
        <Box>
          <Form />
          <Map />
        </Box>
      </Stack>
    </div>
  );
};

export default ImageAndOverView;
