"use client";
import TextField from "@mui/material/TextField";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import locationIcon from "@/assets/icons/fi-bs-home-location.png";
import moneyIcon from "@/assets/icons/Dollar Minimalistic.png";
import propertyIcon from "@/assets/icons/fi-bs-marker.png";
import Image from "next/image";
import { Theme, useTheme } from "@mui/material/styles";
import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const locationType = [
  "Greenfield, USA",
  "Cozy Condo",
  "Malibu, CA",
  "Downtown Loft",
  "Aspen, CO",
  "Other",
];
const names = ["House", "Apartment", "Condo", "Townhouse", "Land", "Other"];
const price = [
  "1000000-3000000",
  "3000000-5000000",
  "5000000-7000000",
  "7000000-10000000",
  "10000000-50000000",
  "50000000-100000000",
];
function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const BuyItem = () => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));

  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div>
      <Box>
        <TextField
          id="outlined-multiline-flexible"
          label={
            <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <SearchIcon />
              Search Properties
            </Box>
          }
          multiline
          fullWidth={!isSmallDevice}
        />
      </Box>

      <Stack
        marginTop={6}
        direction={{ xs: "column", sm: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "flex-start", md: "center" }}
        color="black"
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Image
              src={propertyIcon}
              height={20}
              width={20}
              alt="icons"
            ></Image>
            <Typography>Your Location</Typography>
          </Box>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={personName}
            onChange={handleChange}
            sx={{ width: "285px" }}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {locationType.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Image
              src={locationIcon}
              height={20}
              width={20}
              alt="icons"
            ></Image>
            <Typography>Property Type</Typography>
          </Box>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={personName}
            onChange={handleChange}
            sx={{ width: "285px" }}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Image src={moneyIcon} height={20} width={20} alt="icons"></Image>
            <Typography>Budget</Typography>
          </Box>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={personName}
            onChange={handleChange}
            sx={{ width: "285px" }}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {price.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Stack>
      <Button fullWidth={!isSmallDevice} sx={{ marginTop: "32px" }}>
        <SearchIcon /> Find Property
      </Button>
    </div>
  );
};

export default BuyItem;
