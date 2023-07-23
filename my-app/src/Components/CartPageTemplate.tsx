import { Box, Button, Checkbox, Divider, Flex, HStack, Heading, Image, Link, Radio, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import {
   
    FormControl,
    FormLabel,
    Input,
    InputGroup,
 chakra,
    InputRightElement,
    
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from "react";
import { useLocation } from "react-router-dom";


  



const cartData = [
    {
      id: '1',
      price: 39.99,
      currency: 'GBP',
      name: 'Ferragamo bag',
      description: 'Tan, 40mm',
      quantity: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    },
    {
      id: '2',
      price: 39.99,
      currency: 'GBP',
      name: 'Bamboo Tan',
      description: 'Tan, 40mm',
      quantity: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1591561954557-26941169b49e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    },
    {
      id: '3',
      price: 39.99,
      currency: 'GBP',
      name: 'Yeezy Sneakers',
      description: 'Tan, 40mm',
      quantity: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
    },
  ]


export default function CartPageTemplate(){
  
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    // Set isLoading to true when the button is clicked to simulate loading state
    setIsLoading(true);

    // Simulate an asynchronous action, like fetching data or making an API call
    setTimeout(() => {
      // After the asynchronous action is complete, set isLoading back to false
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading delay
  };

    return (
        <Box
        color={"black"}
    maxW={{ base: '3xl', lg: '7xl' }}
    mx="auto"
    px={{ base: '4', md: '8', lg: '12' }}
    py={{ base: '6', md: '8', lg: '12' }}
  >
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      align={{ lg: 'flex-start' }}
      spacing={{ base: '8', md: '16' }}
    >
        <Stack
      direction={{ base: 'column', lg: 'column' }}
      align={{ lg: 'flex-start' }}
      spacing={{ base: '6', md: '6' }}
    >
      <Stack spacing={{ base: '6', md: '6' }} flex="2" padding={7} textAlign={"left"} border={"1px solid #afaeb0"} borderRadius={10}>
        <Heading fontSize="2xl" fontWeight="bold">
         Shopping Cart (3 Items)
        </Heading>

        <Stack spacing="6">
          {cartData.map((item) => (
            <Flex gap={10} direction={{base:"column", sm:"row",md:"row"}} justifyContent={"space-between"}>
              <Box  height={"150px"} width={"130px"}>
                <Image src={item.imageUrl} width={"100%"} height={"100%"}/>
                </Box>
                <Flex direction={"column"} width={"400px"} gap={2} justifyContent={"center"} alignItems={"flex-start"} textAlign={"left"}>
                    <Text fontWeight={"bold"} fontSize={"2xl"}>{item.name}</Text>
                    <Text fontWeight={"semibold"} fontSize={"sm"} color={"#9f9da0"}>Color: {item.description}</Text>
                    
                </Flex>
                <Flex direction={"column"} justifyContent={"center"} gap={2} alignItems={{sm:"flex-end",md:"flex-end"}}>
                    <Text fontWeight={"bold"} color={"#323132"}>${item.price}</Text>
                    <Text fontWeight={"bold"} color={"#323132"}>Quantity:{item.quantity}</Text>
                </Flex>
            </Flex>
          ))}
        </Stack>
      </Stack>
      <Checkbox border={"black"} colorScheme="black">Returning Customer?</Checkbox>
      <Flex
      width={"100%"}
    //   minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg="white">
      <Stack spacing={8} mx={'auto'} width={"100%"} py={6} px={6}   border={"1px solid #afaeb0"} borderRadius={10} >
        <Flex direction={{base:"column", sm:"column",md:"row"}} justifyContent={"space-between"} >
      <Heading fontSize="2xl" fontWeight="bold" textAlign={"left"}>Delivery Information</Heading>
      <Button fontSize={"sm"} padding={2} width={"150px"} height={"30px"} bg={"#afaeb0"} color={"black"} borderRadius={15}>Save Information</Button>
      </Flex>
        <Box
          
          bg="white"
         
           width={"100%"}
        
          >
          <Stack spacing={4}>
            <HStack spacing={3}>
              {/* <Box> */}
                <FormControl id="firstName" isRequired>
                  <FormLabel fontWeight={"bold"}>First Name</FormLabel>
                  <Input borderRadius={0} borderColor={"#e0dee1"} type="text"/>
                </FormControl>
              {/* </Box> */}
              {/* <Box> */}
                <FormControl id="lastName" isRequired>
                  <FormLabel fontWeight={"bold"}>Last Name</FormLabel>
                  <Input borderRadius={0} borderColor={"#e0dee1"} type="text" />
                </FormControl>
              {/* </Box> */}
            </HStack>
            <FormControl id="address" isRequired>
              <FormLabel fontWeight={"bold"}>Address</FormLabel>
              <Input borderRadius={0} borderColor={"#e0dee1"} type="text" />
            </FormControl>
            <HStack spacing={3}>
              {/* <Box> */}
                <FormControl id="city" isRequired>
                  <FormLabel fontWeight={"bold"}>City/Town</FormLabel>
                  <Input borderRadius={0} borderColor={"#e0dee1"} type="text" />
                </FormControl>
              {/* </Box> */}
              {/* <Box> */}
                <FormControl id="code" isRequired>
                  <FormLabel fontWeight={"bold"}>Zip Code</FormLabel>
                  <Input borderRadius={0} borderColor={"#e0dee1"} type="number" />
                </FormControl>
              {/* </Box> */}
            </HStack>
            <HStack spacing={3}>
              {/* <Box> */}
                <FormControl id="mobile" isRequired>
                  <FormLabel fontWeight={"bold"}>Mobile</FormLabel>
                  <Input type="number" borderRadius={0} borderColor={"#e0dee1"}/>
                </FormControl>
              {/* </Box> */}
              {/* <Box> */}
                <FormControl id="email" isRequired>
                  <FormLabel fontWeight={"bold"}>Email</FormLabel>
                  <Input type="email" borderRadius={0} borderColor={"#e0dee1"}/>
                </FormControl>
              {/* </Box> */}
            </HStack>
            {/* <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack> */}
          </Stack>
        </Box>
      </Stack>
    </Flex>
      </Stack>
      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={"white"}
      border={"1px solid #afaeb0"}
      borderRadius={10}
      >
      <Stack spacing={6} mx={'auto'} maxW={'lg'} py={6} px={6}>

      <Heading textAlign={"left"} fontSize="2xl" fontWeight="bold">Order Summary</Heading>
    
     
      <Divider height={"1px"} bg={"#afaeb0"}/>
      <InputGroup>
      <InputRightElement width={"170px"}>
      <Button _hover={{bg:"black"}} bg={"#003d29"} rounded={"full"} mt={2.5} mr={-5}>Apply Coupon</Button>
      </InputRightElement>
     
      <Input color={"black"} bg={"#f3f1f5"} rounded={"full"} height={"50px"} type="text"/>
      </InputGroup>
      <Divider height={"1px"} bg={"#afaeb0"}/>
      <Text fontWeight={"bold"} fontSize={"2xl"} textAlign={"left"}>Payment Details</Text>
      <Divider height={"1px"} bg={"#afaeb0"}/>
<Stack spacing={3}>
  <Radio> Cash on Delivery</Radio>
  <Radio>SoundWave Card</Radio>
  <Radio>PayPal</Radio>
  <Radio>Credit Card or Debit Card</Radio>
  </Stack>

<HStack spacing={3}>
<chakra.button
        border={"1px solid grey"}
        borderRadius={"5px"}
        cursor={"pointer"}
        as={"a"}
        
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={"1"}
      >
<Image height={"20px"} src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce82d440b7ab84a993f_visa.png" />
</chakra.button>
<chakra.button
        border={"1px solid grey"}
        borderRadius={"5px"}
        cursor={"pointer"}
        as={"a"}
        
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={"1"}
      >
<Image height={"20px"} src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8f032504012a5896b_Mastercard.png" />
</chakra.button>
<chakra.button
        border={"1px solid grey"}
        borderRadius={"5px"}
        cursor={"pointer"}
        as={"a"}
        
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={"1"}
      >
<Image height={"20px"} src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e48b497e6ce846b7ff_Amazon.png" />
</chakra.button>
</HStack>

        <Box
          
          >
          <Stack spacing={4}>
          <FormControl id="email" isRequired>
              <FormLabel fontWeight={"bold"}>Email</FormLabel>
              <Input borderRadius={0} borderColor={"#e0dee1"} type="email" />
            </FormControl>
            <FormControl id="name" isRequired>
              <FormLabel fontWeight={"bold"}>Card Holder Name</FormLabel>
              <Input borderRadius={0} borderColor={"#e0dee1"} type="text" />
            </FormControl>
            <FormControl id="number" isRequired>
              <FormLabel fontWeight={"bold"}>Card Number</FormLabel>
              <Input borderRadius={0} borderColor={"#e0dee1"} type="number" />
            </FormControl>
            
            <HStack>
              <Box>
                <FormControl id="expiry" isRequired>
                  <FormLabel>Expiry</FormLabel>
                  <Input borderRadius={0} borderColor={"#e0dee1"} type="number" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="cvc" isRequired>
                  <FormLabel>CVC</FormLabel>
                  <Input borderRadius={0} borderColor={"#e0dee1"} type="number" />
                </FormControl>
              </Box>
            </HStack>
           <Stack fontWeight={"bold"} color={"#323132"}>
            <Flex justifyContent={"space-between"}>
                <Text textAlign={"right"}>SubTotal</Text>
                <Text textAlign={"left"}>$900.00</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
                <Text textAlign={"right"}>Tax</Text>
                <Text textAlign={"left"}>10%</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
                <Text textAlign={"right"}>Coupon Discount</Text>
                <Text textAlign={"left"}>$900.00</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
                <Text textAlign={"right"}>Shipping Cost</Text>
                <Text textAlign={"left"}>-$0.00</Text>
            </Flex>
            <Divider height={"2px"} bg={"black"}/>
            <Flex justifyContent={"space-between"}>
                <Text color={"black"} textAlign={"right"}>Total</Text>
                <Text fontWeight={"extrabold"} color={"black"} textAlign={"left"}>=$800.00</Text>
            </Flex>
           </Stack>
            <Stack spacing={10} pt={2}>
              <Button
                isLoading={isLoading}
                onClick={handleClick}
                _hover={{bg:"black"}} bg={"#003d29"} rounded={"full"} color={"white"}>
                CheckOut
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </Stack>
  </Box>
    )
}