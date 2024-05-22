import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Divider from "@mui/material/Divider";
import totalArea from "@/assets/icons/totalArea.png";
import totalAreaIcon from "@/assets/icons/totalAreaIcon.png";
import statusIcon from "@/assets/icons/statusIcon.png";
import Rectangle from "@/assets/icons/Rectangle 2.png";
import { useGetPropertiesQuery } from "@/redux/api/propertiesApi";
import Pagination from "@mui/material/Pagination";
import LoadingRound from "@/Loading/LoadingRound";
import { TPropertiesType } from "@/commonTypes";
const SearchResult = () => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const { data, isLoading } = useGetPropertiesQuery(undefined);
  if (isLoading) {
    <LoadingRound />;
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "24px",
          color: "black",
        }}
      >
        {data?.data.map((property: TPropertiesType, index: number) => (
          <Stack
            key={index + 1}
            direction={{ md: "row", sm: "column", xs: "column" }}
            gap="32px"
            sx={{
              backgroundColor: "#F9FAFB",
              width: "800px",
              minHeight: "232px",
              padding: "24px",
            }}
          >
            <Image
              src={property?.propertyImage}
              width={isSmallDevice ? 400 : 152}
              height={184}
              objectFit="cover"
              alt="alternative"
            ></Image>

            <Stack>
              <Stack
                direction={{ md: "row", sm: "column", xs: "column" }}
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Typography fontSize="16px" fontWeight="bold">
                  {property?.propertyName}
                </Typography>
                <Typography fontSize="24px" fontWeight="bold">
                  $ {property?.price}
                </Typography>
              </Stack>
              <Stack
                direction={{ md: "row", sm: "column", xs: "column" }}
                flexWrap="wrap"
                justifyContent={{
                  md: "space-between",
                  sm: "flex-start",
                  xs: "flex-start",
                }}
                alignItems={{
                  md: "center",
                  sm: "flex-start",
                  xs: "flex-start",
                }}
                gap={{ md: 20, sm: 4, xs: 4 }}
                marginTop="16px"
              >
                <Typography fontSize="16px" color="#606060" width={250}>
                  {property?.location}
                </Typography>
                <Button variant="outlined">Bid Property</Button>
              </Stack>
              <Divider textAlign="left">Property details</Divider>
              <Stack
                marginTop="16px"
                direction={{ md: "row", sm: "column", xs: "column" }}
                flexWrap="wrap"
                justifyContent={{
                  md: "space-between",
                  sm: "flex-start",
                  xs: "flex-start",
                }}
                alignItems={{
                  md: "center",
                  sm: "flex-start",
                  xs: "flex-start",
                }}
              >
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  justifyContent="flex-start"
                  alignItems="center"
                  gap={2}
                >
                  <Box sx={{ position: "relative" }}>
                    <Box marginTop="8px">
                      <Image
                        src={Rectangle}
                        height={40}
                        width={40}
                        alt="icons"
                      ></Image>
                    </Box>
                    <Image
                      className="absolute top-4 left-3"
                      src={totalArea}
                      height={20}
                      width={20}
                      alt="icons2"
                    ></Image>
                  </Box>
                  <Box>
                    <Typography fontSize="16px" fontWeight="bold">
                      Total Area
                    </Typography>
                    <Typography fontSize="14px" color="#535353">
                      {property?.propertyArea} 
                    </Typography>
                  </Box>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  gap={2}
                >
                  <Box sx={{ position: "relative" }}>
                    <Box marginTop="8px">
                      <Image
                        src={Rectangle}
                        height={40}
                        width={40}
                        alt="icons"
                      ></Image>
                    </Box>
                    <Image
                      className="absolute top-4 left-3"
                      src={statusIcon}
                      height={20}
                      width={20}
                      alt="icons2"
                    ></Image>
                  </Box>
                  <Box>
                    <Typography fontSize="16px" fontWeight="bold">
                      Status
                    </Typography>
                    <Typography fontSize="14px" color="#535353">
                      {property?.status}
                    </Typography>
                  </Box>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  gap={2}
                >
                  <Box sx={{ position: "relative" }}>
                    <Box marginTop="8px">
                      <Image
                        src={Rectangle}
                        height={40}
                        width={40}
                        alt="icons"
                      ></Image>
                    </Box>
                    <Image
                      className="absolute top-4 left-3"
                      src={totalAreaIcon}
                      height={20}
                      width={20}
                      alt="icons2"
                    ></Image>
                  </Box>
                  <Box>
                    <Typography fontSize="16px">Total Area</Typography>
                    <Typography fontSize="14px" color="#535353">
                      891 sqft
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Box>
      <Stack spacing={2} sx={{ color: "secondary.main", marginTop: "20px" }}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
    </div>
  );
};

export default SearchResult;
