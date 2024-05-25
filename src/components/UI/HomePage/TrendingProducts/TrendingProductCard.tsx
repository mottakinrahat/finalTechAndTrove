"use client";
import * as React from "react";
import Title from "../../Title/Title";
import Image from "next/image";
import Card from "@mui/material/Card";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ButtonGroup from "@mui/material/ButtonGroup";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import ShopIcon from "@mui/icons-material/Shop";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";

const buttons = [
  <Button key="one">
    <ShoppingCart />
  </Button>,
  <Button key="two">
    <FavoriteBorderIcon />
  </Button>,
  <Button key="three">
    <ShopIcon />
  </Button>,
];
const TrendingProductCard = (watch) => {
  console.log(watch);
  const [value, setValue] = React.useState<number | null>(2);
  return (
    <Container>
      <div>
        

        <Box>
          <Card
            sx={{
              maxWidth: 320,
              borderRadius: 2,
              boxShadow: "none",
              border: "1px solid #d3d3d3",
              backgroundColor: "white",

              padding: "25px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="https://m.media-amazon.com/images/I/61-K2lXmHQL._AC_SL1500_.jpg"
                height={200}
                width={200}
                alt="alter"
              ></Image>
            </Box>

            <Box sx={{ padding: "8px 16px" }}>
              <Typography
                variant="body2"
                color="black"
                sx={{
                  marginTop: "4px",
                  backgroundColor: "primary.main",
                  width: "60px",
                  padding: "2px",
                  borderRadius: "6px",
                }}
              >
                In stock
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItem: "center",
                  gap: "2px",
                }}
              >
                <Typography variant="h6" component="div">
                  ৳ 3399
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textDecoration: "line-through" }}
                >
                  4800
                </Typography>
              </Box>

              <Typography variant="body2" color="red" sx={{ marginTop: "4px" }}>
                28% OFF
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Typography component="legend">4.5</Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
            </Box>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {watch?.name}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                High-definition webcam with 1080p resolution for crisp video
                quality.
              </Typography>
            </CardContent>

            <CardActions>
              <ButtonGroup
                orientation="vertical"
                aria-label="Vertical button group"
                variant="text"
                sx={{ position: "absolute", top: "50%", right: 10 }}
              >
                {buttons}
              </ButtonGroup>
            </CardActions>
          </Card>
        </Box>
      </div>
    </Container>
  );
};

export default TrendingProductCard;
