"use client";
import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Rating,
  Box,
  TextField,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  Table,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Image from "next/image";
import { useGetSmartWatchQuery } from "@/redux/api/smartWatchApi";
const DetailsData = ({ watches }: any) => {
  console.log(watches);
  const {
    name,
    productImage,
    price,
    regularPrice,
    color,
    flashSale,
    discount,
    warranty,
    reviews,
    category,
    specification,
    features,
    brand,
    _id,
    status,
  } = watches;

  const relatedProducts = [
    {
      id: 1,
      name: "Fire-Boltt 360 Pro Bluetooth Calling Smart Watch",
      image:
        "https://cdn.shopify.com/s/files/1/0550/5613/8369/products/Red2_9ef98d24-97eb-45c4-adc1-26744066f530.png?v=1679119948",
      price1: "4,814 ৳",
      price2: "5,800 ৳",
    },
    {
      id: 2,
      name: "Fire-Boltt Ring Bluetooth Calling Smart Watch",
      image: "https://cdn.bdstall.com/product-image/giant_200314.jpg",
      price1: "4,756 ৳",
      price2: "5,800 ৳",
    },
    {
      id: 3,
      name: "Kieslect KR Pro Calling Smart Watch",
      image:
        "https://images-cdn.ubuy.co.in/65392348ac0ffe5d2312c28e-dm101-4g-smart-watch-wifi-smartwatch.jpg",
      price1: "6,250 ৳",
      price2: "6,590 ৳",
    },
    {
      id: 4,
      name: "Kieslect Lora Lady BT Calling Smart Watch with Magnetic Strap",
      image:
        "https://intl.cmf.tech/cdn/shop/files/orange_fa78d040-fd3c-42ac-ae2b-5074d41710fc_1200x.png?v=1695698366",
      price1: "4,896 ৳",
      price2: "5,899 ৳",
    },
  ];
  const [newRating, setNewRating] = useState<number | null>(0);
  const [newComment, setNewComment] = useState<string>("");
  return (
    <div>
      <Grid
        style={{ marginTop: "100px", width: "100%" }}
        container
        spacing={3}
        justifyContent="center"
      >
        <Grid item xs={12} md={12}>
          <Paper
            elevation={4}
            style={{
              padding: "20px",
              marginTop: "100px",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box sx={{ marginTop: "100px" }}>
                  <Image
                    src={productImage[0].images}
                    height={400}
                    width={400}
                    alt="Product"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h4">{name}</Typography>
                <Rating style={{ marginTop: "10px" }} value={3} readOnly />
                <Typography variant="h5" style={{ margin: "10px 0" }}>
                  {price}৳
                  <span
                    style={{ textDecoration: "line-through", color: "gray" }}
                  >
                    {regularPrice}৳
                  </span>{" "}
                  <span style={{ color: "red" }}>-11%</span>
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "16px",
                        transition: "background-color 0.3s",
                        "&:hover": {
                          backgroundColor: "rgba(255, 165, 0, 0.2)",
                        },
                      }}
                    >
                      <Typography variant="body1">
                        <strong>Price:</strong> {price} ৳
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "16px",
                        transition: "background-color 0.3s",
                        "&:hover": {
                          backgroundColor: "rgba(255, 165, 0, 0.2)",
                        },
                      }}
                    >
                      <Typography variant="body1">
                        <strong>Regular Price:</strong> {regularPrice} ৳
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "16px",
                        transition: "background-color 0.3s",
                        "&:hover": {
                          backgroundColor: "rgba(255, 165, 0, 0.2)",
                        },
                      }}
                    >
                      {status ? (
                        <Typography variant="body1">
                          <strong>Status:</strong> In Stock
                        </Typography>
                      ) : (
                        <Typography variant="body1">
                          <strong>Status:</strong> out of Stock
                        </Typography>
                      )}
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "16px",
                        transition: "background-color 0.3s",
                        "&:hover": {
                          backgroundColor: "rgba(255, 165, 0, 0.2)",
                        },
                      }}
                    >
                      <Typography variant="body1">
                        <strong>Product Code:</strong> {_id}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Typography variant="h6" style={{ margin: "10px 0" }}>
                  Brand: {brand?.brandName}
                </Typography>
                <Typography
                  variant="h6"
                  style={{ margin: "10px 0", fontWeight: "400" }}
                >
                  Key Features:
                </Typography>
                <ul>
                  <li>Model:{features?.model}</li>
                  <li>Display:{features?.display}</li>
                  <li>{features?.sports}</li>
                  <li>{features?.healthTracking}</li>
                  <li>{features?.waterResistance}</li>
                  <li>{features?.chargingTime}</li>
                </ul>
                <Button
                  style={{ marginTop: "10px" }}
                  variant="text"
                  color="primary"
                >
                  View More Info
                </Button>
              </Grid>
            </Grid>
            <Button
              style={{ marginTop: "10px", marginLeft: "51%" }}
              variant="contained"
              color="primary"
              startIcon={<AddShoppingCartIcon />}
              sx={{
                "&:hover": {
                  backgroundColor: "Shadow",
                },
              }}
            >
              Buy Now
            </Button>
          </Paper>

          {/* BSpecification table && Related Products Section */}

          <Box
            display="flex"
            justifyContent="space-between"
            mt={5}
            mb={5}
            gap={5}
          >
            <Paper elevation={3} style={{ padding: "20px", flex: 2 }}>
              <Typography variant="h5" style={{ marginBottom: "10px" }}>
                Specifications
              </Typography>
              <TableContainer component={Paper}>
                {specification?.map((specific, index) => (
                  <Table key={specific?._id}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Display Features</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[
                        {
                          feature: "Display Size",
                          value: '1.43" AMOLED Display',
                        },
                        {
                          feature: "Battery",
                          value: "Lithium Battery, Up to 12 Days",
                        },
                        {
                          feature: "Connectivity",
                          value: "Wi-Fi, Bluetooth 5.2",
                        },
                        { feature: "OS", value: "Android & iOS" },
                        {
                          feature: "Special Features",
                          value:
                            "Music Control, Camera Control, Find Phone, Breath Training, 12/24-hour, Stopwatch, Clock, Weather Forecast, Date Display, Dial, Cloud Multi-Dial, Custom Dial, OTA Upgrade, Multi-Language UI Interface, Multi-Language, Data Storage, All-Day Data, Call Notification, Message Reminder, Alarm Reminder, Step Goal Completion Reminder, Binding Confirmation Reminder, Low Battery Reminder, Brightness Adjustment, Vibration Adjustment, Wear Monitoring, Lift Wrist to Wake Screen, Power Saving Mode, Smart DND, Quick Settings, Female Cycle, Voice Assistant",
                        },
                        {
                          feature: "Sensor",
                          value:
                            "Accelerometer sensor, Heart Rate sensor and 3-axis motion sensor",
                        },
                      ].map((spec, index) => (
                        <TableRow key={index}>
                          <TableCell>{spec.feature}</TableCell>
                          <TableCell>{spec.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ))}
              </TableContainer>
            </Paper>

            <Paper
              elevation={2}
              style={{ padding: "20px", flex: 1, width: "70%" }}
            >
              <Typography
                style={{
                  color: "#f54cac",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
                variant="h5"
                gutterBottom
              >
                Related Products
              </Typography>
              <hr
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  borderColor: "Orange",
                }}
              />
              {relatedProducts.map((product) => (
                <React.Fragment key={product.id}>
                  <Grid container spacing={2}>
                    <Grid item xs={1} md={4}>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography
                        variant="body1"
                        style={{ fontWeight: "bold", paddingTop: "5px" }}
                      >
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        style={{ paddingTop: "10px" }}
                      >
                        {product.price1}{" "}
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{ textDecoration: "line-through", color: "red" }}
                      >
                        {product.price2}
                      </Typography>
                    </Grid>
                  </Grid>
                  <hr
                    style={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      borderColor: "Orange",
                    }}
                  />
                </React.Fragment>
              ))}
            </Paper>
          </Box>

          {/* Give YOur FeedBack Section */}

          <Box mt={5} mb={5}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h5" gutterBottom>
                Give your feedback
              </Typography>
              <Rating
                name="user-rating"
                value={newRating}
                onChange={(event, newValue) => {
                  setNewRating(newValue);
                }}
              />
              <TextField
                label="Your Review"
                multiline
                rows={4}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                variant="outlined"
                fullWidth
                style={{ marginTop: "10px", marginBottom: "10px" }}
              />
              <Button variant="contained" color="primary">
                Submit Review
              </Button>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DetailsData;
