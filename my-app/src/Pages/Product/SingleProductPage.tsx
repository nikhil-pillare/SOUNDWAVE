import { useParams } from "react-router-dom"

import Footer from "../../Components/LandingSections/Footer";

import { singleProduct } from "../../Redux/ProductReducer/reducer";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import {
  Flex,
  Icon,
  Button,
  Image,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { useToast } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
export interface cartItem extends singleProduct {
quantity:number;
}

export const SingleProductPage=()=>{
  const toast=useToast()
const {id}=useParams();
const [alert,setAlert]=useState<Boolean>(false);
const [data,setData]=useState<singleProduct>({id:0,name:"",price:"",description:"",colors:[],cartImage: "",
rating: 0,
brand:""});
console.log(data)
useEffect(()=>{
axios.get(`https://nippy-flavour-backend.bhishree18.repl.co/products/${id}`).then((res)=>{
setData(res.data);
})

},[])
// console.log(data)
// console.log(data.colors.map((el)=>{
//   el.image
// }))
const [selectedColorId, setSelectedColorId] = useState<number | undefined>(
  data?.colors[0]?.id
);
function addToCart(){

const selectedColorUrl = selectedColorImage || data?.cartImage;
const dat = { quantity: 1, ...data, cartImage: selectedColorUrl, selectedColorId };
axios.post(`https://nippy-flavour-backend.bhishree18.repl.co/cart`, dat).then((res) => {
  console.log(res.data);
  toast({
    title: "Product added.",
    description: "The product has been added to your cart.",
    status: "success",
    duration: 3000,
    isClosable: true,
  });
}).catch((err) => {
  console.log(err);
  toast({
    title: "Product is already added.",
    description: "The product is already in your cart.",
    status: "warning",
    duration: 3000,
    isClosable: true,
  });
});

}
const [selectedColorImage, setSelectedColorImage] = useState<string | undefined>(
  data?.colors[0]?.image 
);
const [mainImage, setMainImage] = useState<string | undefined>(data?.cartImage);

const handleColorImageClick = (image: string) => {
  setSelectedColorImage(image);
  setMainImage(image);
};

    return (
        
           
          <div>




<Flex
     key={id}
       position={"relative"}
     direction={"row"}
       overflow={"hidden"}
      
      width={"100%"}
      mt={"30px"}
       borderRadius="lg"
       textAlign={"left"}
     >
<Box><Flex className="img-wrapper" alignItems={"flex-start"} ml={"150px"} width={"500px"}
          flexDirection={"column"}>
       <Image
       className="hover-zoom"
       bg={"#f5f6f6"}
         borderRadius={"10px"}
         src={selectedColorImage || data?.cartImage}
         alt={data?.name}
         height={"500px"}
         onClick={() => setSelectedColorImage(data?.colors[0]?.image)}
       />
           
        <Flex direction={"row"} mt={"10px"} justifyContent={"left"}  width={"500px"} wrap={"nowrap"}>
          {data.colors.slice(1).map((color)=>
          <Image key={color.id} src={color.image} width={"120px"} height={"120px"} bg={"#f5f6f6"} mr={"10px"} onClick={() => handleColorImageClick(color.image)
          
          }/>
          )}

         
        </Flex>

       </Flex> </Box>


       
<Box>
<Flex
         margin={"3"}
         _hover={{ bg: "#f9dcdc",cursor:"pointer" }}
         w={31.7}
         h={31.7}
        width={"400px"}
         color={"white"}
         rounded={"full"}
         bg={"#ffffff"}
         mb={1}
         borderRadius={"20px"}
       >
       
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
             {data?.name}
           </Box>
          
         </Flex>
         <Box>{"$"+data?.price}</Box>
         <Box
           mt="1"
           fontSize={"sm"}
           color={"black"}
           as="h4"
           lineHeight="tight"
           isTruncated
         >
           {data?.description}
         </Box>
 
          <Box mt="1" alignItems="center" >
           {Array(5)
             .fill("")
             .map((_, i) => (
               <StarIcon
                 key={i}
                 width={"11px"}
                 color={i < data?.rating ? "#08ac0a" : "grey"}
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
          onClick={addToCart}
        >Add To Cart</Button>
         </Box>
       </Box>

</Box>








      
     </Flex>

            <Footer/>


          </div>





        
    )
}


