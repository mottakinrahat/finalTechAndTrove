import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import SouthIcon from "@mui/icons-material/South";
const cardsOfBusiness = [
  {
    title: "2k+",
    desc: "New Flat Listed",
    pageLink: "https://example.com/page1",
  },
  {
    title: "200k+",
    desc: "New rent Listed",
    pageLink: "https://example.com/page2",
  },
  {
    title: "16k+",
    desc: "New flat Listed",
    pageLink: "https://example.com/page3",
  },
  {
    title: "10k+",
    desc: "New Hotel Listed",
    pageLink: "https://example.com/page3",
  },
];
const CardK = () => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap="23px"
    >
      {cardsOfBusiness.map((business, index) => (
        <Stack
          key={index + 1}
          direction="column"
          justifyContent="space-between"
          bgcolor={`${index % 2 == 0 ? "#FDF0E7" : "secondary.main"}`}
          width="280px"
          height="185px"
          padding="24px"
        >
          <Box>
            <Typography
              fontSize="40px"
              fontWeight="bold"
              color={`${index % 2 == 0 ? "#D95D0F" : "#0051A1"}`}
            >
              {business?.title}
            </Typography>
            <Typography fontSize="16px" color="black">
              {business?.desc}
            </Typography>
          </Box>

          <Stack direction="row" justifyContent="space-between">
            <Link
              className={`text-[16px] ${
                index % 2 == 0 ? "text-[#EE6611]" : "text-[#0059B1]"
              }  underline`}
              href="example"
            >
              view all
            </Link>
            <Box
              color={index % 2 === 0 ? "#EE6611" : "#0059B1"}
              sx={{
                border: `1px solid ${index % 2 == 0 ? "#EE6611" : "#0059B1"}`,
                borderRadius: "50px",
                padding: "2px",
              }}
            >
              <SouthIcon />
            </Box>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default CardK;
