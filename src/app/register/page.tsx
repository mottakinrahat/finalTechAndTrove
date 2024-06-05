"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import Image from "next/image";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import TTForms from "@/components/Forms/TTForms";
import TTInput from "@/components/Forms/TTInput";
import { registerUser } from "@/services/actions/registerUser";
import { modifyPayloadT } from "@/utils/modifyPayloadT";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
type Inputs = {
  username: string;
  email: string;
  password: string;
  contactNo: string;
};

const RegisterPage = () => {
  const router = useRouter();
  const handleSignUp = async (values: FieldValues) => {
    const userData = {
      username: values.username,
      email: values.email,
      password: values.password,
      contactNo: parseInt(values.contactNo),
    };
    const data = modifyPayloadT(userData);

    try {
      const res = await registerUser(data);
      console.log(res);
      if (res?.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User has been registered",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: res.errorMessage,
          footer: "",
        });
      }
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
        footer: "",
      });
    }
  };
  return (
    <Container sx={{ padding: "50px" }}>
      <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
        <Box
          sx={{
            maxWidth: 600,
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
                Sign Up Now
              </Typography>
            </Box>
          </Stack>
          <TTForms onSubmit={handleSignUp}>
            <Grid sx={{ my: 4 }} container spacing={2}>
              <Grid item md={6}>
                <TTInput
                  label="Your Username"
                  name="username"
                  type="text"
                  fullWidth={true}
                ></TTInput>
              </Grid>
              <Grid item md={6}>
                <TTInput
                  label="Your Email"
                  type="email"
                  fullWidth={true}
                  name="email"
                ></TTInput>
              </Grid>
              <Grid item md={6}>
                <TTInput
                  label="Your Password"
                  type="password"
                  fullWidth={true}
                  name="password"
                ></TTInput>
              </Grid>
              <Grid item md={6}>
                <TTInput
                  label="Your Contact No"
                  type="number"
                  fullWidth={true}
                  name="contactNo"
                ></TTInput>
              </Grid>
            </Grid>
            <Box sx={{ marginTop: 4 }}>
              <Button type="submit" fullWidth={true}>
                Sign Up
              </Button>
            </Box>
          </TTForms>
          <Box>
            <Typography sx={{ my: 2 }}>
              Already have an account?{" "}
              <Link style={{ color: "blue" }} href="/login">
                Sign in
              </Link>
            </Typography>
          </Box>
          <Box sx={{ marginTop: 4 }}>
            <Button variant="outlined" fullWidth={true}>
              <GoogleIcon /> Google
            </Button>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
