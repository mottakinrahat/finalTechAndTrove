"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useRef } from "react";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./css/hero.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const heroSectionData = [
  {
    backgroundImage: "https://i.ibb.co/6JRZWg5/TNT-Banner.png",
    bannerImage: "https://i.ibb.co/d2bbKQ9/pngwing-com-7.png",
    upperBtnText: "featured Products",
    productName: "Yison celebrat sw6Pro Bluetooth Calling Smart Watch",
    price: "400",
  },
  {
    backgroundImage: "https://i.ibb.co/Nt0q404/TNT-Banner-1.png",
    bannerImage: "https://i.ibb.co/4jg479M/pngwing-com-8.png",
    upperBtnText: "featured Products",
    productName: "Yison celebrat sw6Pro Bluetooth Calling Smart Watch",
    price: "400",
  },
  {
    backgroundImage: "https://i.ibb.co/Nt0q404/TNT-Banner-1.png",
    bannerImage: "https://i.ibb.co/JcJyQ25/pngwing-com-17.png",
    upperBtnText: "featured Products",
    productName: "Yison celebrat sw6Pro Bluetooth Calling Smart Watch",
    price: "400",
  },
];

const intro = {
  hidden: { opacity: 0, x: -400, rotate: 180 },
  hidden2: { opacity: 0, x: 400 },
  visibleImage: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: { duration: 1 },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.25, delayChildren: 1 },
  },
};
const introChildren = {
  hidden: { opacity: 0, x: 400 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, type: "spring" } },
};

const HeroSection = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  // const onAutoplayTimeLeft = (s: number, time: number, progress: number) => {
  //   if (progressCircle.current) {
  //     progressCircle.current.style.setProperty("--progress", 1 - progress);
  //   }
  //   if (progressContent.current) {
  //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  //   }
  // };

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {heroSectionData.map((heroData, index) => (
          <SwiperSlide key={index + 1}>
            <div>
              <Box
                sx={{
                  width: "100vw",
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundImage: `url(${heroData?.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Stack
                  direction={{ sm: "column", xs: "column", md: "row" }}
                  justifyContent="space-around"
                  alignItems="center"
                  gap={20}
                >
                  <motion.div
                    variants={intro}
                    initial="hidden"
                    animate="visibleImage"
                  >
                    <motion.div
                      animate={{ y: [0, -20, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    >
                      <Image
                        src={heroData?.bannerImage}
                        height={350}
                        width={350}
                        alt="image"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                      }}
                    >
                      <motion.div
                        variants={introChildren}
                        initial="hidden"
                        animate="visible"
                      >
                        <Button sx={{ borderRadius: "20px", color: "white" }}>
                          Featured product
                        </Button>
                      </motion.div>
                      <motion.div
                        variants={introChildren}
                        initial="hidden"
                        animate="visible"
                      >
                        <Typography
                          fontSize={40}
                          color="white"
                          maxWidth={600}
                          fontWeight="bold"
                          mt={8}
                        >
                          Yison Celebrat SW6Pro Bluetooth Calling Smart Watch
                        </Typography>
                      </motion.div>
                      <motion.div
                        variants={introChildren}
                        initial="hidden"
                        animate="visible"
                      >
                        <Typography
                          fontSize={30}
                          color="white"
                          fontWeight="bold"
                          mt={4}
                        >
                          ৳ 400
                        </Typography>
                      </motion.div>
                      <motion.div
                        variants={introChildren}
                        initial="hidden"
                        animate="visible"
                      >
                        <Button
                          sx={{
                            borderRadius: "20px",
                            paddingY: "8px",
                            marginTop: "10px",
                            color: "white",
                          }}
                        >
                          shop now
                        </Button>
                      </motion.div>
                    </Box>
                  </motion.div>
                </Stack>
              </Box>
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSection;
