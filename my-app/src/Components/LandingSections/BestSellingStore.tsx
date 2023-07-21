import {
    Box,
    Heading,
    Text,
    Image,
    SimpleGrid,
    Flex,
    Button
  } from "@chakra-ui/react";
import BestSellingCard from "./BestSellingCard";
  

export default function BestSellingStore(){
    const arr=[
        {image:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e62d65536b6a75698f_store%20one-min.png",
        label:"Staples",
        icon:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea2d253f08a89912d90709_Ellipse%20287.png"
    },
    {image:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e74bd907803dd35b4f_store%20two-min.png",
        label:"Now Delivery",
        icon:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea2d253a093c1dea9a21c7_Ellipse%20287-1.png"
    },
    {image:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e668e3265021e48a0b_store%20three-min.png",
        label:"Bevmo",
        icon:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea2d25fbba384ffd156e76_Ellipse%20287-2.png"
    },
    {image:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6eaf8537c8058cf04_store%20four-min.png",
        label:"Quickily",
        icon:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea2d25dddbd27c9eda91b5_Ellipse%20287-3.png"
    }
    ]
    return(
        <Box py={12} p={4} width={"90%"} margin={"auto"}>
        <Heading color={"black"} as="h1" fontSize="3xl" textAlign={"left"} mb={"10"} mt={"20"}>
        Best Selling Store
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={7}>
            {arr.map((ele,ind)=>(
                <BestSellingCard
                key={ind}
                {...ele}
                />
            ))}
        
        </SimpleGrid>
      </Box>
    )
}