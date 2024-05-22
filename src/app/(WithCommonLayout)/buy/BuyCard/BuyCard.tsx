"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BuyItem from "./BuyItem/BuyItem";
import { motion } from "framer-motion";

const left = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, type: "spring" } },
};
const BuyCard = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <motion.div variants={left} initial="hidden" animate="visible">
      <Box
        sx={{
          typography: "body1",
          backgroundColor: "white",
          padding: "32px",
          borderRadius: "6px",
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab label="Buy" value="1" />
              <Tab label="Rent" value="2" />
              <Tab label="PG" value="3" />
              <Tab label="Plot" value="4" />
              <Tab label="commercial" value="5" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <BuyItem />
          </TabPanel>
          <TabPanel value="2">Rent</TabPanel>
          <TabPanel value="3">PG</TabPanel>
          <TabPanel value="4">Plot</TabPanel>
          <TabPanel value="5">Commercial</TabPanel>
        </TabContext>
      </Box>
    </motion.div>
  );
};

export default BuyCard;
