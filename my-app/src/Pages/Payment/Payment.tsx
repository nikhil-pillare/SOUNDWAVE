import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Container, Divider, Flex, FormControl, FormLabel, Grid, GridItem, Heading, HStack, Input, InputGroup, InputRightElement, Select, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate } from "react-router-dom"
import { SET_TOTAL_AMOUNT } from "../../Redux/actions_types"
import { Cart_state } from "../../Redux/Cart_redux/Types"
import { store } from "../../Redux/store"

function Payment() {
  //const amount: number = useSelector((store: any) => store.cartReducer.total_amount)
  const amount : number = useSelector((store:any)=>store.cartReducer.total_amount)
  const [showOTP, setShowOTP] = useState(false); // State to control the OTP pop-up window
  const [otp, setOTP] = useState(["", "", "", ""]);
  const dispatch = useDispatch()
  const cancelRef = useRef<HTMLInputElement | null>(null);
  const [ispay,setpay] = useState(false)
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false); 
 // const inputRefs = Array.from({ length: 4 }, () => useRef<HTMLInputElement | null>(null));
  useEffect(() => {


     dispatch({ type : SET_TOTAL_AMOUNT })


  }, [])

    // Function to handle OTP submission
    const handleOTPSubmit = () => {
        // You can perform OTP validation or any other actions here
        // For now, we'll simply close the OTP pop-up window
        setShowOTP(false);
        setpay(true)
        handlePaymentSuccessClose()
      };
      const handleInputChange = (index: number, value: string) => {
        // Handle changes for each input digit
        // For example, you can update the OTP state accordingly
        const newOTP = [...otp]; // Create a copy of the current otp state
        newOTP[index] = value;
        setOTP(newOTP);
        
      }
      function handlePaymentSuccessClose(){
        setShowPaymentSuccess(true);
        // Add any additional logic if needed
      };
      const generateOrderId = () => {
        return Math.floor(Math.random() * 1000000);
      };
    
      const orderId = generateOrderId();

  //console.log(amount);

  if (showPaymentSuccess) {
    return (
      <AlertDialog isOpen={true} leastDestructiveRef={cancelRef} onClose={handlePaymentSuccessClose}>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Payment Successful!</AlertDialogHeader>
          <AlertDialogBody>
            Thank you for your payment. Your order has been successfully placed.
            {/* You can also show the order ID here if needed */}
            <Text fontSize="xl" fontWeight="bold">
            Order ID: {orderId}
          </Text>
          </AlertDialogBody>
          <AlertDialogFooter>
          <Button as={Link} to="/" colorScheme="blue">
            Back to Home
          </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  // Rest of your code remains unchanged...




  return (
    <Flex h='100vh' py={20} bg='linear-gradient(to bottom, #F8FAFC, #E2E8F0)'>
      <Container maxW='container.xl' p={0}>
        <Grid templateColumns="1fr 1fr" gap={6}>
          {/* Left Side: User Details */}
          <VStack bg='white' p={10} spacing={10} alignItems='flex-start' boxShadow='lg'>
            <VStack spacing={3} alignItems='flex-start'>
              <Heading size='2xl'>Your Details</Heading>
              <Text>To proceed with the payment, add your details here</Text>
            </VStack>

            <SimpleGrid column={2} columnGap={3} rowGap={6} w='full'>
              <GridItem colSpan={1} >
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input placeholder="Name" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1} >
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input placeholder="Last Name" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2} >
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1} >
                <FormControl>
                  <FormLabel>City</FormLabel>
                  <Input />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1} >
                <FormControl>
                  <FormLabel>Country</FormLabel>
                  <Select>
                    <option value='usa'>USA</option>
                    <option value='India'>INDIA</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1} >
                <FormControl>
                  <FormLabel>CARD NUMBER</FormLabel>
                  <Input placeholder="XXXX/XXXX/XXXX/XXXX" type='text'/>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1} >
                <FormControl>
                  <FormLabel>CVV</FormLabel>
                  <Input placeholder="Ex:123" type='number'/>
                </FormControl>
              </GridItem>
            </SimpleGrid>

            <Button color='white' bg='blue.500' size='lg' w='full' onClick={() => setShowOTP(true)}>
              Place Order
            </Button>
          </VStack>

          {/* Right Side: Payment Details */}
          <VStack w='full' p={10} spacing={10} alignItems='flex-start' bg='white' boxShadow='lg'>
            <Heading size='2xl'>Payment Details</Heading>

            <HStack justify='space-between' w='full'>
              <Text>Subtotal</Text>
              <Text>{amount} ₹</Text>
            </HStack>

            <HStack justify='space-between' w='full'>
              <Text>Taxes</Text>
              <Text>{30} ₹</Text>
            </HStack>

            <Divider w='full' />

            <HStack justify='space-between' w='full'>
              <Text fontWeight='bold' fontSize='xl'>Total Amount to Pay</Text>
              <Text fontWeight='bold' fontSize='2xl' color='blue.500'>
                {`${amount.toFixed(2)} ₹`}
              </Text>
            </HStack>
            <AlertDialog leastDestructiveRef={cancelRef} isOpen={showOTP} onClose={() => setShowOTP(false)}>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader>Enter OTP</AlertDialogHeader>
        <AlertDialogBody>
          <FormControl>
            <FormLabel>OTP</FormLabel>
            <InputGroup size="lg">
              {/* Render four input boxes for each input digit */}
              {[0, 1, 2, 3].map((index) => (
                <Input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={otp[index] || ''}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  width="14%"
                  textAlign="center"
                  autoFocus={index === 0}
                />
              ))}
             
            </InputGroup>
          </FormControl>
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button onClick={() => setShowOTP(false)}>Cancel</Button>
          <Button colorScheme="blue" onClick={handleOTPSubmit} ml={3}>
            Submit
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
          </VStack>
        </Grid>
      </Container>
    </Flex>
  );
}

export default Payment;
