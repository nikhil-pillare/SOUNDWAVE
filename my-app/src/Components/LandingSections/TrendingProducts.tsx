
import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Flex,
  Button
} from "@chakra-ui/react";




export default function TrendingProducts() {
  return (
    <Box py={12} p={4} width={"90%"} margin={"auto"}>
      <Heading color={"black"} as="h1" fontSize="3xl" textAlign={"left"} mb={"10"} mt={"20"}>
      Trending Products For You!
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 2 }} spacing={7}>
       
              <Flex direction={"column"} >
              <Box className="img-wrapper" width={"100%"}>
                <Image
                className="hover-zoom"
                borderTopRadius={"10px"}
                  width={"100%"}
                  src={"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6cd3678e82164f755_furniture%20village-min.png"}
                />
              </Box>
              <Flex
              borderBottomRadius={"10px"}
                padding={7}
                direction={"column"}
                justifyContent={"space-between"}
                height={"200px"}
                alignItems={"flex-start"}
                textAlign={"left"}
                bg={"#f5f6f6"}
                >
              
                <Text mb={-10} color={"black"} fontSize={"2xl"} fontWeight={"extrabold"}>Furniture Village</Text>
                
                  
                  <Text color={"black"} fontSize={"1xl"} fontWeight={"medium"}>{"Delivery with in 24 hours"}</Text>
                  <Button
                  bg={"black"}
                  border={"1px solid black"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "#003d29", border:"1px solid #003d29" }}
                  padding={6}
                  textAlign={"center"}
                  mt={-5}
                >
                  Shop Now
                </Button>
              </Flex>
              
            </Flex>
            <Flex direction={"column"} >
              <Box width={"100%"} className="img-wrapper">
                <Image
                className="hover-zoom"
                borderTopRadius={"10px"}
                  width={"100%"}
                  src={"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6037f3b456acf2024_Fashion%20world-min.png"}
                />
              </Box>
              <Flex
              borderBottomRadius={"10px"}
                padding={7}
                direction={"column"}
                justifyContent={"space-between"}
                height={"200px"}
                alignItems={"flex-start"}
                textAlign={"left"}
                bg={"#f5f6f6"}
                >
              
                <Text mb={-10} color={"black"} fontSize={"2xl"} fontWeight={"extrabold"}>Furniture Village</Text>
                
                  
                  <Text color={"black"} fontSize={"1xl"} fontWeight={"medium"}>{"Delivery with in 24 hours"}</Text>
                  <Button
                  bg={"black"}
                  border={"1px solid black"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "#003d29", border:"1px solid #003d29" }}
                  padding={6}
                  textAlign={"center"}
                  mt={-5}
                >
                  Shop Now
                </Button>
              </Flex>
              
            </Flex>
      
      </SimpleGrid>
    </Box>
  );
}
