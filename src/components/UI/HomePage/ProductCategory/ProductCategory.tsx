import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

import Image from "next/image";
import Title from "../../Title/Title";

const productCategory = [
  {
    productImage: "https://i.ibb.co/9Nhpkkz/pngwing-com-7.png",
    title: "Smartwatch",
  },
  {
    productImage: "https://i.ibb.co/b53B5PK/Bluetooth-Speaker.png",
    title: "Bluetooth Speaker",
  },
  {
    productImage: "https://i.ibb.co/pyV5TnH/Converter.png",
    title: "Converter",
  },
  {
    productImage: "https://i.ibb.co/9sPBDZM/Device-Stand.png",
    title: "Device-Stand",
  },
  {
    productImage: "https://i.ibb.co/mvDkWK3/Earbud.png",
    title: "Earbud",
  },
  {
    productImage: "https://i.ibb.co/DCtVTyL/Earphone.png",
    title: "Earphone",
  },
  {
    productImage: "https://i.ibb.co/YP3yXwm/Headphone.png",
    title: "Headphone",
  },
  {
    productImage: "https://i.ibb.co/Ks5c1p2/Keyboard.png",
    title: "Keyboard",
  },
  {
    productImage: "https://i.ibb.co/GHgFBpM/Mobile-Charger.png",
    title: "Mobile Charger",
  },
  {
    productImage: "https://i.ibb.co/xjHH6vJ/Mouse.png.png",
    title: "Mouse",
  },
  {
    productImage: "https://i.ibb.co/jL93vct/Neckband.png",
    title: "Neckband",
  },
  {
    productImage: "https://i.ibb.co/Xk0fBtM/Pen-drive.png",
    title: "Pen-drive",
  },
  {
    productImage: "https://i.ibb.co/ngSvZk4/Power-Bank.png",
    title: "Power Bank",
  },
  {
    productImage: "https://i.ibb.co/f4r6WDx/Security-Camera.png",
    title: "Security Camera",
  },
  {
    productImage: "https://i.ibb.co/QfQkN1Y/Travel-Adepter.png",
    title: "Travel Adepter",
  },
  {
    productImage: "https://i.ibb.co/ydpwtGB/USB-Cable.png",
    title: "USB Cable",
  },
  {
    productImage: "https://i.ibb.co/x8rCQMG/Watch-Strap.png",
    title: "Watch Strap",
  },
  {
    productImage: "https://i.ibb.co/XySk8ST/Webcam.png",
    title: "Webcam",
  },
];

const Category = () => {
  return (
    <Container>
      <div>
        <Box sx={{ marginTop: "80px" }}>
          <Title
            upperText="explore product by category"
            heading="Product Category"
          ></Title>

          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            {productCategory.map((category, index) => (
              <Box
                key={index + 1}
                sx={{
                  backgroundColor: "#ffffff",
                  boxShadow: "0 5px 12px lightgray",
                  minWidth: "120px",
                  minHeight: "120px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "4px",
                }}
              >
                <Image
                  src={category?.productImage}
                  height={80}
                  width={80}
                  alt="products"
                ></Image>
                <Typography fontSize="14px">{category?.title}</Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </div>
    </Container>
  );
};

export default Category;
