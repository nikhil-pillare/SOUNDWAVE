
import { Flex, Image,Box,Heading, SimpleGrid,Skeleton} from "@chakra-ui/react";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect, useState } from "react";
// ..
AOS.init();

const imageArray=[
    {label:"Furniture",
    image:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png"
},{
    label:"Hand Bag",
    image:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png",
},{
    label:"Books",
    image:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc22b7ea53520_books-min.png"
},
{
    label:"Tech",
    image:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e754ac2e32897cb53b_tech-min.png"
},
{
    label:"Sneakers",
    image:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64b769118272f244f_sneakers-min.png"
},{
    label:"Travel",
    image:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad6d07e7568f_travel-min.png"
}
]

export default function LandingTopCategories() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading delay (you can replace this with your actual data fetching logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading delay
  }, []);

      return (
        <Box position={"relative"}  py={12} p={4} width={"90%"} margin={"auto"} mt={"60px"}>
        <Heading textAlign={"left"} color={"black"} mb={10}>Shop Our Top Categories</Heading>
         
     
        <SimpleGrid data-aos="fade-in" columns={{base:1,sm:3, md:6}} spacing={4} width={"100%"} margin={"auto"}>
        
          {imageArray.map((ele) => (
           
          
           <Flex className="img-wrapper"  key={ele.label}  borderRadius={"10px"} justifyContent={"space-evenly"}>
              
           <Image className="hover-zoom" height={"240px"} width={"300px"} borderRadius={"10px"} src={ele.image} />
 
           <Heading fontSize={"2xl"} color="white"  position={"absolute"} mt={5}>
             {ele.label}
           </Heading>
        
         </Flex>
           
          ))}
        </SimpleGrid>
        </Box>
      );
    }
    
