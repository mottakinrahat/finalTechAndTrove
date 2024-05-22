import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";

const Sliders = dynamic(() => import("./Sliders"), { ssr: false });
const Forms = () => {
  const inputStyle = {
    border: "none",
    outline: "none",
    boxShadow: "none",
    backgroundColor: "white",
  };

  return (
    <div>
      <Typography>Min</Typography>
      <TextField
        error
        id="filled"
        defaultValue="$ 300K"
        fullWidth
        sx={inputStyle}
      />
      <Typography>Max</Typography>
      <TextField
        error
        id="filled"
        defaultValue="$ 310K"
        fullWidth
        sx={inputStyle}
      />
      <Box>
        <Sliders />
      </Box>
    </div>
  );
};

export default Forms;
