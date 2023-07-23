import {
    Box,
    Heading,
    Text,
    Image,
    SimpleGrid,
    Flex,
    Button
  } from "@chakra-ui/react";

  import AOS from 'aos';
  import 'aos/dist/aos.css'; // You can also use <link> for styles
  // ..
  AOS.init();

export default function HelpYouShop(){
    return (
        <Box py={12} p={4} width={"90%"} margin={"auto"} data-aos="slide-up" data-aos-duration="1000">
      <Heading color={"black"} as="h1" fontSize="3xl" textAlign={"left"} mb={"10"} mt={"20"}>
      Services To Help You Shop
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={7}>
       
              <Flex direction={"column"} >
              
              <Flex
              borderTopRadius={"10px"}
                padding={7}
                direction={"column"}
                justifyContent={"space-between"}
                gap={6}
                alignItems={"flex-start"}
                textAlign={"left"}
                bg={"#f5f6f6"}
                
                >
              
                <Text width={"70%"} color={"black"} fontSize={"2xl"} fontWeight={"extrabold"}>Online Payment Process</Text>
                
                  
                  <Text width={"70%"} color={"black"} fontSize={"1xl"} fontWeight={"medium"}>{"Updates on safe Shopping in our Stores"}</Text>
                 
              </Flex>
              <Box width={"100%"} className="img-wrapper">
                <Image
                className="hover-zoom"
                borderBottomRadius={"10px"}
                  width={"100%"}
                  src={"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6707380718425e697_onlie%20payment-min.png"}
                />
              </Box>
            </Flex>
            <Flex direction={"column"} >
              
              <Flex
              borderTopRadius={"10px"}
                padding={7}
                direction={"column"}
                justifyContent={"space-between"}
                gap={6}
                alignItems={"flex-start"}
                textAlign={"left"}
                bg={"#f5f6f6"}
                
                >
              
                <Text width={"70%"} color={"black"} fontSize={"2xl"} fontWeight={"extrabold"}>Frequently Asked Questions</Text>
                
                  
                  <Text width={"70%"} color={"black"} fontSize={"1xl"} fontWeight={"medium"}>{"Updates on safe Shopping in our Stores"}</Text>
                 
              </Flex>
              <Box width={"100%"} className="img-wrapper">
                <Image
                className="hover-zoom"
                borderBottomRadius={"10px"}
                  width={"100%"}
                  src={"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55b939fea169c0292_faq-min.png"}
                />
              </Box>
            </Flex>
            <Flex direction={"column"} >
              
              <Flex
              borderTopRadius={"10px"}
                padding={7}
                direction={"column"}
                justifyContent={"space-between"}
                gap={6}
                alignItems={"flex-start"}
                textAlign={"left"}
                bg={"#f5f6f6"}
                
                >
              
                <Text width={"70%"} color={"black"} fontSize={"2xl"} fontWeight={"extrabold"}>Home Delivery Options</Text>
                
                  
                  <Text width={"70%"} color={"black"} fontSize={"1xl"} fontWeight={"medium"}>{"Updates on safe Shopping in our Stores"}</Text>
                 
              </Flex>
              <Box width={"100%"}
              className="img-wrapper"
              >
                <Image
                className="hover-zoom"
                borderBottomRadius={"10px"}
                  width={"100%"}
                  src={"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e544663ba3d0fd2bb8_home%20delivery-min.png"}
                />
              </Box>
            </Flex>
      </SimpleGrid>
    </Box>
    )
}