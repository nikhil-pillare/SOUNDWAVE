import react, { useState } from "react"
import { singleProduct } from "../../Redux/ProductReducer/reducer";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import {
   Alert,
   AlertIcon,
   AlertTitle,
   AlertDescription,
   SimpleGrid,
   Flex,
   Box,
   Button,
   Icon,
   Image

 } from '@chakra-ui/react'
import { StarIcon } from "@chakra-ui/icons";
import { AiOutlineHeart } from "react-icons/ai";
export const ProductCard=({id,name,cartImage,description,price,rating,brand}:singleProduct)=>{
const navigate=useNavigate();
// const [alert,setAlert]=useState<Boolean>(false);
function alertt(){
  alert("product added")
}
function nav(){
   navigate(`/products/${id}`);
}
   return (
  
   <SimpleGrid
   columns={{ base: 1, sm: 3, md: 4 }}
   spacing={5}
   width={"100%"}
   justifyContent={"space-evenly"}
  
  
 >
   
     <Flex
     key={id}
       position={"relative"}
       direction={"column"}
       overflow={"hidden"}
      
      width={"267px"}
      
       borderRadius="lg"
       textAlign={"left"}
     >
       <Flex
         margin={"3"}
         _hover={{ bg: "#f9dcdc",cursor:"pointer" }}
         w={31.7}
         h={31.7}
         position={"absolute"}
         zIndex={2}
         color={"white"}
         rounded={"full"}
         bg={"#ffffff"}
         mb={1}
         borderRadius={"20px"}
       >
         <Icon
           margin={"auto"}
           as={AiOutlineHeart}
           color="black"
           w={5}
           h={5}
         />
       </Flex>
       <Flex className="img-wrapper" alignItems={"flex-start"}   onClick={nav}>
       <Image
       className="hover-zoom"
       bg={"#f5f6f6"}
         borderRadius={"10px"}
         src={cartImage}
         alt={name}
         width={"400px"}
         height={"300px"}
       />
       </Flex>

       <Box p="6"  flexDirection={"column"} justifyContent={"space-between"} height={"180px"} >
         <Flex
           alignItems="baseline"
           flexDirection={"row"}
           justifyContent={"space-between"}
         >
           <Box
             color="black"
             fontWeight="bold"
             letterSpacing="wide"
             fontSize="lg"
             
           >
             {name}
           </Box>
          
         </Flex>
         <Box>{"$"+price}</Box>
         <Box
           mt="1"
           fontSize={"sm"}
           color={"black"}
           as="h4"
           lineHeight="tight"
           isTruncated
         >
           {description}
         </Box>

         <Box mt="1" alignItems="center" >
           {Array(5)
             .fill("")
             .map((_, i) => (
               <StarIcon
                 key={i}
                 width={"11px"}
                 color={i < rating ? "#08ac0a" : "grey"}
               />
             ))}
          
         </Box>
        
       </Box>
       <Box  alignItems={"center"}>
       <Box>
         <Button
          bg={"transparent"}
          border={"1px solid #a3a3a3"}
          rounded={"full"}
          color={"black"}
          _hover={{ bg: "#003d29",color:"white", border:"1px solid black" }}
          padding={5}
          ml={2}
          textAlign={"center"}
          onClick={()=>alertt()}
        >Add To Cart</Button>
         </Box>
       </Box>
     </Flex>
     
 </SimpleGrid>
   ) 
}

