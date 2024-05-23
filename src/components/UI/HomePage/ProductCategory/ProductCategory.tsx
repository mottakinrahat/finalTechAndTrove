import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

import Image from "next/image";
import Title from "../../Title/Title";
import { motion } from "framer-motion";
import { productCategory } from "./ProductCategory.constant";

const Category = () => {
  return (
    <Container>
      <div>
        <Box sx={{ marginTop: "80px" }}>
          <Title
            upperText="explore product by category"
            heading="Product Category"
          ></Title>

          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            {productCategory.map((category: any, index: number) => (
              <motion.div
                key={index + 1}
                whileHover={{
                  scale: 1.3,
                  boxShadow: "0px 5px 22px #E49714",
                  transition: { duration: 0.2 },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#ffffff",
                    boxShadow: "0 5px 12px lightgray",
                    minWidth: "120px",
                    minHeight: "120px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    padding: "4px",
                  }}
                >
                  <motion.div
                    whileHover={{ rotateY: 180, transition: { duration: 0.2 } }}
                  >
                    <Image
                      src={category?.productImage}
                      height={70}
                      width={70}
                      alt="products"
                    ></Image>
                  </motion.div>
                  <Typography fontSize="14px">{category?.title}</Typography>
                </Box>
              </motion.div>
            ))}
          </Stack>
        </Box>
      </div>
    </Container>
  );
};

export default Category;
