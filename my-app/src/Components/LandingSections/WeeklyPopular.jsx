import { Box, Image, Flex, Heading,Badge, SimpleGrid, Button ,Icon} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import {AiOutlineHeart} from "react-icons/ai"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'





const productArray = [
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e68b497e229146b818_leptop%20sleeve-min.png",
    imageAlt: "Product",
    title:"Laptop sleeve MacBook",
    desc: "Organic Cotton, fairtrade certified",
    formattedPrice: "59",
    reviewCount: 121,
    rating: 5
  },
  {
      imageUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png",
      imageAlt: "Product",
      title:"AirPods Max",
      desc: "A perfect balance of high-fidelity audio",
      formattedPrice: "559",
      reviewCount: 121,
      rating: 5
    },
    {
      imageUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55cc9361a8ecce6d4_flower%20leptop%20sleeve-min.png",
      imageAlt: "Product",
      title:"Flower Laptop Sleeve",
      desc: "15 in. x 10 in. -Flap top closure",
      formattedPrice: "39",
      reviewCount: 121,
      rating: 5
    },
    {
      imageUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64bd907adafd35b46_ipad%20mini-min.png",
      imageAlt: "Product",
      title:"Ipad Mini",
      desc: "Table with air purifier, stained veneer/black",
      formattedPrice: "539",
      reviewCount: 121,
      rating: 5
    },
    {
      imageUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e78b497e3a5646b82f_water%20pot-min.png",
      imageAlt: "Product",
      title:"Supreme Water Bottle",
      desc: "Table with air purifier, stained veneer/black",
      formattedPrice: "19",
      reviewCount: 121,
      rating: 5
    },
    {
      imageUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5560c31bbfce_leptop%20sleeve%20macbook-min.png",
      imageAlt: "Product",
      title:"Laptop sleeve MacBook",
      desc: "Organic Cotton, fairtrade certified",
      formattedPrice: "59",
      reviewCount: 121,
      rating: 5
    },
    {
      imageUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e61eb4ad4af6e75689_macbook%2013-min.png",
      imageAlt: "Product",
      title:"Macbook pro 13",
      desc: "256, 8 core GPU, 8 GB",
      formattedPrice: "1099",
      reviewCount: 121,
      rating: 5
    },
    {
      imageUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5507951bbfbe_homepad-mini-min.png",
      imageAlt: "Product",
      title:"HomePod mini",
      desc: "5 Colors Available",
      formattedPrice: "59",
      reviewCount: 121,
      rating: 5
    }
];

export default function BestDeals(){



  
  
  const breakpoints = {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  function checkArrow() {
    var swiperPrev = document.querySelector('.swiper-button-prev');
    var swiperNext = document.querySelector('.swiper-button-next');
    if ( window.innerWidth < 1024  ) {
      console.log('Success', window.innerWidth);
      swiperPrev.style.display = 'block';
      swiperNext.style.display = 'block';
    } else {
      swiperPrev.style.display = 'none';
      swiperNext.style.display = 'none';
    }
  }
 
  return (
    <Box p={4} width={"90%"} margin={"auto"}>
      <Heading color={"black"} as="h1" fontSize="3xl" textAlign={"left"} mb={"10"} mt={"20"}>
          Our Weekly Popular Products
        </Heading>
        
        <Swiper
         breakpoints={breakpoints}
        
        spaceBetween={30}
        pagination={{
       
          type: 'progressbar',
          color:'red'
        }}
        navigation={ {nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'}}
        modules={[Pagination, Navigation]}
        className="mySwiper"
       
        on={{
          init:function(){
            checkArrow();
          },
          resize: function(){
            checkArrow();
          }
        }}
       
      >
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 8 }}
          spacing={5}
          justifyContent={"space-evenly"}
        >
        {productArray.map((ele,ind) => (
          <SwiperSlide>
             <Flex
             mt={5}
            key={ind}
              position={"relative"}
              direction={"column"}
              overflow={"hidden"}
              
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
              <Flex className="img-wrapper">
              <Image
              className="hover-zoom"
              bg={"#f5f6f6"}
                borderRadius={"10px"}
                src={ele.imageUrl}
                alt={ele.imageAlt}
                width={"400px"}
                height={"300px"}
              />
              </Flex>
              <Box p="6">
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
                    ml="2"
                  >
                    {ele.title}
                  </Box>
                  <Box>{ele.formattedPrice}</Box>
                </Flex>
                <Box
                  mt="1"
                  fontSize={"sm"}
                  color={"black"}
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {ele.desc}
                </Box>
  
                <Box mt="2" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        width={"11px"}
                        color={i < ele.rating ? "#08ac0a" : "grey"}
                      />
                    ))}
                  <Box as="span" ml="2" color="black" fontSize="sm">
                    ({ele.reviewCount})
                  </Box>
                </Box>
                <Box>
                <Button
                 bg={"transparent"}
                 border={"1px solid #a3a3a3"}
                 rounded={"full"}
                 color={"black"}
                 _hover={{ bg: "#003d29", border:"1px solid black" }}
                 padding={5}
                 mt={2}
                 textAlign={"center"}
               >Add To Cart</Button>
                </Box>
              </Box>
            </Flex>
           </SwiperSlide>
          ))}
              
              </SimpleGrid>  
   
    </Swiper>
   
   
    </Box>
  )
}