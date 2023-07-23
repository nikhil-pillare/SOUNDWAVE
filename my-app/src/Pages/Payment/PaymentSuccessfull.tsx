import React from "react";
import { Container, Flex, Button, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  // Generate a random order ID (you can use any logic to generate a unique order ID)
  const generateOrderId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const orderId = generateOrderId();

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Container maxW="container.sm" p={4} bg="white" boxShadow="lg" rounded="md">
        <VStack spacing={6}>
          <Text fontSize="3xl" fontWeight="bold">
            Payment Successful!
          </Text>
          <Text fontSize="xl">
            Thank you for your payment. Your order has been successfully placed.
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            Order ID: {orderId}
          </Text>
          <Button as={Link} to="/" colorScheme="blue">
            Back to Home
          </Button>
        </VStack>
      </Container>
    </Flex>
  );
};

export default PaymentSuccess;
