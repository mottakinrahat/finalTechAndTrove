import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import Forms from "./Forms";
const Form = () => {
  return (
    <Card sx={{ maxWidth: 384, backgroundColor: "#ECF5FF", padding: "24px" }}>
      <CardActionArea>
        <CardContent>
          <Typography fontSize="16px" color="#6B7280">
            Property value
          </Typography>
          <Typography fontSize="24px" fontWeight="bold">
            $ 300k - $ 310k
          </Typography>

          <Typography marginTop="16px" variant="body2" color="text.secondary">
            Your bid can not be than 10% of the property Minimum value.
          </Typography>

          <Box py={4}>
            <Forms />
          </Box>

          <Box sx={{ textAlign: "center", marginTop: "20px" }}>
            <Button>Bid Property</Button>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Form;
