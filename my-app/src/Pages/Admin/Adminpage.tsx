
import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const AdminPage: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://jsonservertesting.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: productName,
          description: productDescription,
          price: productPrice,
        }),
      });

      if (response.ok) {
        // Product added successfully, show success message or redirect
        console.log('Product added successfully');
      } else {
        // Handle error cases
        console.error('Error adding product');
      }
    } catch (error) {
      console.error('Error adding product', error);
    }
  };

  return (
    <Box margin={'80px 80px 0px 80px'}>
      <Heading as="h2" mb={4}>Add Product</Heading>
      <form onSubmit={handleFormSubmit}>
        <FormControl>
          <FormLabel>Product Name</FormLabel>
          <Input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Product Description</FormLabel>
          <Input
            type="text"
            placeholder="Product Description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Product Price</FormLabel>
          <Input
            type="number"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" mt={4}>Add Product</Button>
      </form>
    </Box>
  );
};

export default AdminPage