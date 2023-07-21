import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Image,
  Heading
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

interface FeatureProps {
  title: string;
  text: string;
  image: string;
}

const Feature = ({ title, text, image }: FeatureProps) => {
  return (
    <Stack
  
      bg={"rgba(245,246,246,255)"}
      padding={"5"}
      borderRadius={"10px"}
      border={"1px solid rgba(245,246,246,255)"}
      _hover={{ border: "1px solid black" }}
    >
      <Flex gap={"5"}>
        <Image
          height={"70px"}
          width={"70px"}
          src={image}
        />

        <Flex direction={"column"} textAlign={"left"} justifyContent={"center"}>
          <Text fontWeight={600} color={"black"}>{title}</Text>
          <Text color={"black"} fontSize={"sm"}>{text}</Text>
        </Flex>
      </Flex>
    </Stack>
  );
};

const arr = [
    {
        title:"Staples",
        text:"Delivery with in 24 hours",
        image:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e560afc2c49da53521_brand%20(3)-min.png"
    },{
        title:"Sports Basement",
        text:"Delivery with in 24 hours",
        image:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4707380971125e685_brand%20(4)-min.png"
    },{
        title:"Sprout",
        text:"Delivery with in 24 hours",
        image:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e58b497e41aa46b801_brand%20(8)-min.png"
    },{
        title:"Container Store",
        text:"Delivery with in 24 hours",
        image:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc2193aa53511_brand%20(2)-min.png"
    },{
        title:"Grocery Outlet",
        text:"Delivery with in 24 hours",
        image:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e5eaf8533b0958cefe_brand%20(5)-min.png"
    },{
        title:"Target",
        text:"Delivery with in 24 hours",
        image:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4c21faa5e03c209c5_brand%20(1)-min.png"
    },{
        title:"Mollie Stones",
        text:"Delivery with in 24 hours",
        image:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e454ac2e9d497cb531_brand%20(6)-min.png"
    },{
        title:"Bevmo!",
        text:"Delivery with in 24 hours",
        image:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e51eb4ad92a3e75673_brand%20(7)-min.png"
    },
]
export default function ChooseByBrand() {
  return (
    <Box p={4} width={"90%"} margin={"auto"}>
      <Heading color={"black"} textAlign={"left"} mb={"6"}>
        Choose By Brand
      </Heading>
      <SimpleGrid  data-aos="zoom-in" columns={{ base: 1, sm: 2, md: 4 }} spacing={7}>
        {arr.map((ele)=>(
           <Feature
           image={ele.image}
           title={ele.title}
           text={ele.text}
         />  
        ))}
      </SimpleGrid>
    </Box>
  );
}
