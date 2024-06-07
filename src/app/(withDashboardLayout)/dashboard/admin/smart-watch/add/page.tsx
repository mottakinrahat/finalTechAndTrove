"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Swal from "sweetalert2";
import { FieldValues } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import TTForms from "@/components/Forms/TTForms";
import TTInput from "@/components/Forms/TTInput";
import React from "react";
import { useForm } from "react-hook-form";
import { useCreateSmartWatchMutation } from "@/redux/api/smartWatchApi";
import { useState } from "react";

const AddSmartWatch = () => {
  const { reset } = useForm();
  const [createSmartWatch] = useCreateSmartWatchMutation();
  const [isStock, setIsStock] = useState(false);

  const handleAddProduct: any = async (values: FieldValues) => {
    console.log(values);

    values.productImage = [{ images: values.productImage }];
    const color = values.color
      ? values.color.split(",").map((color: any) => color.trim())
      : [];
    const features = values.features ? JSON.parse(values.features) : {};
    const specification = values.specification
      ? Array(JSON.parse(values.specification))
      : [];
    const price = values.price ? parseFloat(values.price) : 0;
    const regularPrice = values.regularPrice
      ? parseFloat(values.regularPrice)
      : 0;
    const flashSale = values.flashSale === "true" ? true : false;
    const discount = values.discount ? parseFloat(values.discount) : 0;

    const formData = {
      ...values,
      price,
      regularPrice,
      flashSale,
      discount,
      color,
      features,
      specification,
      stock: isStock,
      isDeleted: false,
    };
    console.log(formData);
    try {
      // Send the form data to the server
      const response = await createSmartWatch(formData).unwrap();
      if (response.data._id) {
        Swal.fire({
          icon: "success",
          title: "Product added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      console.log(response);
      // Reset the form after successful submission
      // reset();
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  return (
    <Container sx={{ padding: "50px" }}>
      <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
        <Box
          sx={{
            maxWidth: "100%",
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
          }}
        >
          <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image
                src="https://i.ibb.co/F5WvHLr/TNT-Logo-9.png"
                height={100}
                width={100}
                alt="alternative"
              ></Image>
              <Image
                src="https://i.ibb.co/qDMb5yb/whitebg.png"
                height={150}
                width={150}
                alt="alternative"
              ></Image>
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Add A Smart Watch
              </Typography>
            </Box>
          </Stack>
          <TTForms onSubmit={handleAddProduct}>
            <Grid sx={{ my: 4 }} container spacing={2}>
              <Grid item md={12}>
                <TTInput
                  label="Brand"
                  type="text"
                  fullWidth={true}
                  name="brand"
                ></TTInput>
              </Grid>
              <Grid item md={12}>
                <TTInput
                  label="Product Image URL"
                  type="text"
                  fullWidth={true}
                  name="productImage"
                ></TTInput>
              </Grid>
              <Grid item md={12}>
                <TTInput
                  label="Price"
                  type="number"
                  fullWidth={true}
                  name="price"
                ></TTInput>
              </Grid>
              <Grid item md={12}>
                <TTInput
                  label="Regular Price"
                  type="number"
                  fullWidth={true}
                  name="regularPrice"
                ></TTInput>
              </Grid>
              <Grid item md={12}>
                <TTInput
                  label="Name"
                  type="text"
                  fullWidth={true}
                  name="name"
                ></TTInput>
              </Grid>
              <Grid item md={12}>
                <TTInput
                  label="Specification"
                  type="text"
                  fullWidth={true}
                  name="specification"
                ></TTInput>
              </Grid>
              <Grid item md={12}>
                <TTInput
                  label="Description"
                  type="text"
                  fullWidth={true}
                  name="description"
                ></TTInput>
              </Grid>
              <Grid item md={12}>
                <TTInput
                  label="Flash Sale"
                  type="text"
                  fullWidth={true}
                  name="flashSale"
                ></TTInput>
              </Grid>
              <Grid item md={12}>
                <TTInput
                  label="Discount"
                  type="number"
                  fullWidth={true}
                  name="discount"
                ></TTInput>
              </Grid>
              <Grid item md={12}>
                <TTInput
                  label="Review"
                  type="text"
                  fullWidth={true}
                  name="review"
                ></TTInput>
              </Grid>
              <Grid item md={12}>
                <TTInput
                  label="Category"
                  type="text"
                  fullWidth={true}
                  name="category"
                ></TTInput>
              </Grid>
              <Grid item md={12}>
                <TTInput
                  label="Color"
                  type="text"
                  fullWidth={true}
                  name="color"
                  //   helperText="Enter colors separated by commas"
                />
              </Grid>
              <Grid item md={12}>
                <TTInput
                  label="Features (JSON)"
                  type="text"
                  fullWidth={true}
                  name="features"
                  //   helperText="Enter features as a JSON object"
                />
              </Grid>
              <Grid item md={12}>
                <FormControlLabel
                  onChange={(e: any) => setIsStock(e.target.checked)}
                  control={<Checkbox name="stock" />}
                  label="In Stock"
                />
              </Grid>
            </Grid>
            <Box sx={{ marginTop: 4 }}>
              <Button disabled={!isStock} type="submit" fullWidth={true}>
                Add Smart Watch
              </Button>
            </Box>
          </TTForms>
        </Box>
      </Stack>
    </Container>
  );
};

export default AddSmartWatch;
