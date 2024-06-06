"use client"

import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box } from "@mui/material";
import Image from "next/image";

interface Product {
    _id: string;
    name: string;
    brand: string;
    price: number;
    regularPrice: number;
    category: string;
    imageUrl: string;
    color: string[];
    stock: boolean;
    features: {
      model: string;
      display: string;
      healthTracking: string;
      sports: string;
      waterResistance: string;
      chargingTime: string;
    };
    specification: {
      basicInfo: {
        model: string;
        display: string;
        healthTracking: string;
        sports: string;
        waterResistance: string;
        chargingTime: string;
        batteryInfo: string;
        sensor: string;
        processor: string;
        connectivity: string;
        material: string;
        OS: string;
        specialFeatures: string[];
      };
      exterior: {
        color: string[];
      };
      warrantyInfo: {
        warranty: string;
      };
    }[];
    description: string;
    flashSale: boolean;
    discount: number;
    review: string;  // Assuming this is a string ID for the review
    isDeleted: boolean;
  }

// Dummy data
const initialProducts: Product[] = [
  {
    _id: "1",
    name: "Smart Watch Model A",
    brand: "Brand A",
    price: 199.99,
    category: "Smart Watch",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    _id: "2",
    name: "Smart Watch Model B",
    brand: "Brand B",
    price: 299.99,
    category: "Smart Watch",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    _id: "3",
    name: "Smart Watch Model C",
    brand: "Brand C",
    price: 399.99,
    category: "Smart Watch",
    imageUrl: "https://via.placeholder.com/100",
  },
];

const SmartWatchTable: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const handleUpdate = (id: string) => {
    // Mock update logic
    alert(`Update product with id: ${id}`);
  };

  const handleDelete = (id: string) => {
    // Mock delete logic
    setProducts(products.filter(product => product._id !== id));
    alert(`Deleted product with id: ${id}`);
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
            {products.map((product) => (
              <TableRow key={product._id}>
                <TableCell>
                  <Image src={product.imageUrl} alt={product.name} width={50} height={50} />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.brand}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleUpdate(product._id)}>
                    Update
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => handleDelete(product._id)} style={{ marginLeft: "10px" }}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SmartWatchTable;
