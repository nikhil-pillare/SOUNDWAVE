import { ReactNode } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Image,
  SimpleGrid,
  Flex
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const arr = [
    {
        amt:"100",
        shade:"#f2e4d9",
        text:"#cb9917",
        img:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png"
    },
    {
        amt:"29",
        shade:"#f9dcdc",
        text:"#961f1f",
        img:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4e006822af104db61_book-min.png"
    },
    {
        amt:"67",
        shade:"#f2dac7",
        text:"#966540",
        img:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e61a7c20076aec5fe7_shirt-min.png"
    },
    {
        amt:"59",
        shade:"#d2f7ec",
        text:"#003d29",
        img:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e53f7127592743f6be_bug%20%26%20book-min.png"
    }
]
export default function Discount() {
  return (
    <Box py={12} p={4} width={"90%"} margin={"auto"}>
      <Heading color={"black"} as="h1" fontSize="3xl" textAlign={"left"} mb={"10"} mt={"20"}>
        Get Upto 70% Off
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={7}>
        {arr.map((ele)=>(
              <Flex direction={"column"} data-aos="zoom-in">
              <Flex
              borderTopEndRadius={"10px"}
              borderTopLeftRadius={"10px"}
                padding={5}
                direction={"column"}
                justifyContent={"space-between"}
                height={"200px"}
                alignItems={"flex-start"}
                textAlign={"left"}
                bg={ele.shade}
              >
                <Text color={"black"} fontSize={"2xl"} fontWeight={"extrabold"} mb={-8}>Save</Text>
                <Flex
                  direction={"row"}
                  gap={"0.5"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  color={ele.text}
                  
                  fontWeight={"extrabold"}
                >
                  <Text fontSize={"3xl"} mt={-5}>$</Text>
                  <Text fontSize={"5xl"}>{ele.amt}</Text>
                </Flex>
                <Text fontWeight={"medium"} color={"black"}>Explore Our Furniture & Home Furnishing Range</Text>
              </Flex>
              <Box className="img-wrapper" width={"100%"} borderBottomRadius={"10px"}>
                <Image
                className="hover-zoom"
                borderBottomRadius={"10px"}
                  width={"100%"}
                  src={ele.img}
                />
              </Box>
            </Flex>
        ))}
      
      </SimpleGrid>
    </Box>
  );
}
