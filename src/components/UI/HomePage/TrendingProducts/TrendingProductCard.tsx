"use client";
import * as React from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import { Box, Button, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ButtonGroup from "@mui/material/ButtonGroup";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import ShopIcon from "@mui/icons-material/Shop";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
const TrendingProductCard = (watch: any) => {
  const [value, setValue] = React.useState<number | null>(2);
  const { _id, productImage, name, stock, price, regularPrice } =
    watch?.product;

  return (
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
              src={productImage[0].images}
              height={200}
              width={200}
              alt="alter"
            ></Image>
          </Box>

          <Box sx={{ padding: "8px 16px" }}>
            {stock ? (
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
            ) : (
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
                out of stock
              </Typography>
            )}
            <Box>
              <Typography fontSize={16} fontWeight="bold">
                {name}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItem: "center",
                gap: "2px",
              }}
            >
              <Typography variant="h6" component="div">
                ৳ {price}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textDecoration: "line-through" }}
              >
                {regularPrice}
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

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                color: "white",
              }}
            >
              <Button sx={{ fontSize: "12px", color: "white" }}>
                <ShoppingCart sx={{ fontSize: "18px" }} />
                Add to Cart
              </Button>
              <Link href={`/smartWatch/${_id}`}>
                <Button sx={{ fontSize: "12px", color: "white" }}>
                  Details <ArrowForwardIcon sx={{ fontSize: "12px" }} />
                </Button>
              </Link>
            </Box>
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
  );
};

export default TrendingProductCard;
