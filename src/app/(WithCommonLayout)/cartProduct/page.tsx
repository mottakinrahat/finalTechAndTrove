import React from 'react';
import { Container, TextField, Button, Typography, Box, Card, CardContent, Grid, Avatar } from '@mui/material';
import { CreditCard, AccountCircle, LocalShipping } from '@mui/icons-material';

function PaymentGateway() {
  return (
    <Container style={{ marginTop: '200px', marginBottom:"200px"}} maxWidth="sm">
      <Card style={{backgroundColor:"rgba(255, 165, 0, 0.2)"}} variant="outlined" sx={{ mt: 5, p: 3, borderRadius: 3 }}>
        <CardContent>
          <Grid container direction="column" alignItems="center">
            <Avatar sx={{ mb: 2, width: 56, height: 56 }} src="path_to_image.jpg" />
            <Typography variant="h5" gutterBottom>
              Payment Methods
            </Typography>
            <Box display="flex" justifyContent="center" mb={3}>
              <img src="https://freepnglogo.com/images/all_img/1701670291bKash-App-Logo-PNG.png" alt="MasterCard" style={{ width: 50, marginRight: 10 }} />
              <img src="https://freelogopng.com/images/all_img/1679248787Nagad-Logo.png" alt="Visa" style={{ width: 50, marginRight: 10 }} />
              <img src="https://play-lh.googleusercontent.com/cCVvEEwDQSPmDO8F-kryWhvzy53JllG1FGtHGDG-SDgfVTvvYSvWEXXDbgAY0hf7Bg" alt="RuPay" style={{ width: 50, marginRight: 10 }} />
              <Button variant="outlined">See all</Button>
            </Box>
            <TextField style={{backgroundColor: "white"}}
              label="your number"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField style={{backgroundColor: "white"}}
              label="Pin"
              variant="outlined"
              fullWidth
              margin="normal"
              inputProps={{ maxLength: 19 }}
            />
           
            <Box my={2} width="100%">
              <Typography variant="body1" component="div" display="flex" justifyContent="space-between">
                <span>Subtotal</span>
                <span>$1,668</span>
              </Typography>
              <Typography variant="body1" component="div" display="flex" justifyContent="space-between">
                <span>Shipping</span>
                <span>$4</span>
              </Typography>
              <Typography variant="h6" component="div" display="flex" justifyContent="space-between">
                <span>Total (Tax incl.)</span>
                <span>$1,672</span>
              </Typography>
            </Box>
            <Button variant="contained" color="primary" size="large" fullWidth>
              $1,672 Checkout
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default PaymentGateway;
