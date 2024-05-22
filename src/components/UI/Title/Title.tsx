import { Box, Typography } from "@mui/material";
import React from "react";

const Title = ({ upperText, heading }: any) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "40px",
        }}
      >
        <Typography color="#E49714">{upperText}</Typography>
        <Typography fontWeight="bold" fontSize="32px">
          {heading}
        </Typography>
      </Box>
    </div>
  );
};

export default Title;