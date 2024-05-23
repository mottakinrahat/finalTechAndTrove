import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";

const LoginPage = () => {
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
                Login Now
              </Typography>
            </Box>
          </Stack>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <TextField
                id="outlined-basic"
                label="Your Email"
                variant="outlined"
                size="small"
                fullWidth={true}
              ></TextField>
            </Grid>
            <Grid item md={12}>
              <TextField
                id="outlined-basic"
                label="Your password"
                variant="outlined"
                size="small"
                fullWidth={true}
              ></TextField>
            </Grid>
          </Grid>
          <Box sx={{ marginTop: 4 }}>
            <Button fullWidth={true}>Sign in</Button>
          </Box>
          <Box>
            <Typography>
              Do not have an account?{" "}
              <Link style={{ color: "blue" }} href="/register">
                Sign Up
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

export default LoginPage;
