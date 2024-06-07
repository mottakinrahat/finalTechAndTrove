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
import { FieldValues } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import TTForms from "@/components/Forms/TTForms";
import TTInput from "@/components/Forms/TTInput";
import React from 'react'

const AddSmartWatch = () => {

    const handleSignUp = async (values: FieldValues) => {
        // const data = modifyPayloadT(values);
        console.log(values)
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
                    <TTForms onSubmit={handleSignUp}>
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
                                <TextField
                                    label="Color"
                                    type="text"
                                    fullWidth={true}
                                    name="color"
                                    helperText="Enter colors separated by commas"
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextField
                                    label="Features"
                                    type="text"
                                    fullWidth={true}
                                    name="features"
                                    helperText="Enter features as a JSON object"
                                />
                            </Grid>
                            <Grid item md={12}>
                                <FormControlLabel
                                    control={<Checkbox name="stock" />}
                                    label="In Stock"
                                />
                            </Grid>
                        </Grid>
                        <Box sx={{ marginTop: 4 }}>
                            <Button type="submit" fullWidth={true}>
                                Add Smart Watch
                            </Button>
                        </Box>
                    </TTForms>
                </Box>
            </Stack>
        </Container>
  )
}

export default AddSmartWatch