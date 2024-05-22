import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import location from "@/assets/icons/fi-bs-marker.png";
import rectangle from "@/assets/icons/Rectangle 26.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTheme } from "@mui/material/styles";
import "./css/listedCard.css";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { TListedCardProps } from "@/commonTypes";

export default function ListedCard({ propertiesData }: TListedCardProps) {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Swiper
        slidesPerView={isSmallDevice ? 1 : 3}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {propertiesData.map((property) => (
          <SwiperSlide key={property?._id}>
            <Stack
              width="385px"
              minHeight="388px"
              sx={{ backgroundColor: "#F9FAFB" }}
            >
              <Box>
                <div
                  style={{
                    width: "385px",
                    height: "200px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={property?.propertyImage}
                    layout="responsive"
                    objectFit="cover"
                    width={385}
                    height={200}
                    alt="df"
                  ></Image>
                </div>
              </Box>
              <Box padding="16px">
                <Stack direction="row" justifyContent="space-between">
                  <Typography
                    fontFamily="Poppins"
                    fontSize="14px"
                    bgcolor="#C5E2FF"
                    paddingX="8px"
                    paddingY="4px"
                    borderRadius="5px"
                  >
                    {property?.propertyType}
                  </Typography>
                  <Stack
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    gap="2px"
                  >
                    <Image src={rectangle} height={8} width={8} alt="8"></Image>
                    <Typography fontSize="16px">Ready to Move</Typography>
                  </Stack>
                </Stack>
                <Typography fontSize="20px" fontWeight="bold" marginTop="4px">
                  {property?.propertyName}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "flex-start",
                    gap: "8px",
                  }}
                >
                  <Image src={location} height={20} width={20} alt="8"></Image>
                  <Typography fontSize="16px" color="#6B7280">
                    {property?.location}
                  </Typography>
                </Box>
                <Typography fontSize="24px" fontWeight="bold" marginTop="24px">
                  $ {property?.price}
                </Typography>
              </Box>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
