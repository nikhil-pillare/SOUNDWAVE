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
import { CalendarIcon } from "@chakra-ui/icons";
import { AtSignIcon } from "@chakra-ui/icons";
import { RepeatIcon } from "@chakra-ui/icons";
import { hover } from "@testing-library/user-event/dist/hover";
export interface cartItem extends singleProduct {
quantity:number;

}

export const SingleProductPage=()=>{
  const [hovered, setHovered] = useState(false);
  const toast=useToast()
  const [quantity, setQuantity] = useState(1);
const {id}=useParams();
const [alert,setAlert]=useState<Boolean>(false);
const [data,setData]=useState<singleProduct>({id:0,name:"",price:"",description:"",colors:[],cartImage: "",
rating: 0,brand:""});
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
const [selectedColorName, setSelectedColorname] = useState<string | undefined>(
  data?.colors[0]?.name
);
function addToCart(){

const selectedColorUrl = selectedColorImage || data?.cartImage;
const dat = { quantity, ...data, cartImage: selectedColorUrl,color: selectedColorName, SelectedColorId: selectedColorId  };
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


       
<Box  width={"30%"} marginLeft={"90px"}>

       

       <Box pl="6"  flexDirection={"column"} justifyContent={"space-between"} height={"180px"} >
         <Flex
           alignItems="baseline"
           flexDirection={"row"}
           justifyContent={"space-between"}
         >
           <Box
             color="black"
             fontWeight="bold"
             letterSpacing="wide"
             fontSize="2xl"
             
           >
             {data?.name}
           </Box>
           <Box fontSize={"13px"} fontWeight={"bold"}>{"-"+data?.brand}</Box>
          <br />
          <hr />
         </Flex>
       
         <hr />
         <Box
           mt="20px"
           fontSize={"sm"}
           color={"black"}
           as="h4"
          //  lineHeight="tight"
          //  isTruncated
         >
           {data?.description}
         </Box>
         
          <Box mt="20px" alignItems="center" >
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
         <hr />
         <Box fontWeight={"bolder"} fontSize={"xl"} color={"black"} mt={"10px"}>{"$"+data?.price+".00"}</Box>
       </Box>

       <Flex direction={"row"} mt={"80px"} ml={"30px"} pt={3} justifyContent={"left"}  width={"500px"} wrap={"nowrap"}>
          {data.colors.map((color)=>
          // <Image key={color.id} src={color.image} width={"120px"} height={"120px"} bg={"#f5f6f6"} mr={"10px"} onClick={() => handleColorImageClick(color.image)
          
          // }/>
          

          <Box key={color.id}  border={"1px solid gray"} mr={"10px"} borderRadius={"50%"} width={"30px"} height={"30px"}  onClick={(e) => {handleColorImageClick(color.image)
           setSelectedColorname(color.name)
           setSelectedColorId(color.id)
          }
          }>
           <Box  backgroundColor={color.name}  width={"30px"} height={"15px"} borderTopRadius={"15px"}></Box>
           <Box backgroundColor={color.name+".500"}  width={"30px"} height={"15px"} borderBottomRadius={"15px"}></Box>


          </Box>
          )}

         
        </Flex>

        <Box display={"flex"} mt={7} ml={5}>
        <Button borderLeftRadius={"20px"} borderRightRadius={"0px"} width={"40px"} fontSize={"2xl"} height={"40px"} bg={"#f5f6f6"} onClick={() => setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1))}>-</Button>
        <Box  bg={"#f5f6f6"} backgroundColor={"#f5f6f6"} color={"darkgreen"}fontSize={"xl"} width={"40px"} height={"40px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>{quantity}</Box>
  <Button borderRightRadius={"20px"} borderLeftRadius={"0px"} width={"40px"} fontSize={"2xl"} height={"40px"}  bg={"#f5f6f6"} onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}>+</Button>
  
  
</Box>



       <Box alignItems={"center"}>
       <Box display={"flex"}  >
       <Button
          bg={"#003d29"}
          border={"1px solid #a3a3a3"}
          rounded={"full"}
          color={"white"}
          _hover={{ bg: "white",color:"black", border:"1px solid black" }}
          padding={5}
          ml={"20px"}
          mt={"40px"}
          textAlign={"center"}
          width={"170px"}
        >Buy Now</Button>
         <Button
          bg={"transparent"}
          border={"1px solid #a3a3a3"}
          rounded={"full"}
          color={"black"}
          _hover={{ bg: "#003d29",color:"white", border:"1px solid black" }}
          padding={5}
          ml={"20px"}
          mt={"40px"}
          textAlign={"center"}
          width={"170px"}
          onClick={addToCart}
        >Add To Cart</Button>
         </Box>
       </Box>





       <Flex direction={"column"} mt={"40px"} ml={"25px"} border={"1px solid grey"} borderRadius={"10px"} padding={4}>
          <Box borderBottom={"1px solid grey"} padding={2}>
            <Flex alignItems={"center"} > <RepeatIcon/>
            <h3 style={{marginLeft:"10px"}}>Free Delivery</h3></Flex>
           
            <h4 style={{color:"gray", fontSize:"12px", textDecoration:"underline" , cursor:"pointer"}}>Enter Your Postal Code For Delivery Availability</h4>
          </Box>
         
          <Box padding={2}>
            <Flex alignItems={"center"}>
              <CalendarIcon/> <h3 style={{marginLeft:"10px"}}>Return Delivery</h3>
            </Flex>
            <h4 style={{color:"gray", fontSize:"12px", textDecoration:"underline", cursor:"pointer"}}>Free 30days Delivery Returns </h4>
          </Box>


          
       </Flex>
   
</Box>








      
     </Flex>

            <Footer/>


          </div>





        
    )
}


