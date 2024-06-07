"use client";

import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
} from "@mui/material";
import Image from "next/image";
import { useDeleteSmartWatchMutation } from "@/redux/api/smartWatchApi";
import Swal from "sweetalert2";

const DashboardTable: any = ({ watchData = [] }: any) => {
  const [products, setProducts]: any = useState<any[]>([]);
  const [deleteSmartWatch] = useDeleteSmartWatchMutation();

  useEffect(() => {
    setProducts(watchData);
  }, [watchData]);

  const handleUpdate: any = (id: any) => {
    // Mock update logic
    alert(`Update product with id: ${id}`);
  };

  const handleDelete = async (id: string) => {
    // Mock delete logic
    try {
      const response = await deleteSmartWatch(id).unwrap();
      console.log(response);
      
      if (response.data._id) {
        Swal.fire({
          icon: "success",
          title: "Product deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        console.error("Failed to delete product.");
      }
      
    } catch (error) {
      console.error("Error deleting product:", error);
    }
    
  };

  return (
    <Box p={3}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.length > 0 ? (
              products.map((product: any) => (
                <TableRow key={product._id}>
                  <TableCell>
                    <Image
                      src={product?.productImage[0].images}
                      alt={product.name}
                      width={50}
                      height={50}
                    />
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.brand}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleUpdate(product._id)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDelete(product._id)}
                      style={{ marginLeft: "10px" }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No products available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DashboardTable;
