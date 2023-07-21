import React from "react";
import {
  Box,
  Flex,
  Image,
  Stack,
  VStack,
  Text,
  Button,
  Heading
} from "@chakra-ui/react";


export const CashBack = ({ images }:{images:{url:string,alt:string}[]}) => {
  return (
    <Flex
      minHeight={{ base: "700px", sm: "0", md: "0" }}
      overflow={"hidden"}
      gap={10}
      bg={"#ffe6cc"}
      padding={"20"}
      direction={{ base: "column", sm: "row", md: "row" }}
      justifyContent={"space-evenly"}
      width={"100%"}
    >
      <Flex justifyContent={"flex-start"} width={"50%"}>
        <Stack
          width={{ base: "100%", sm: "100%", md: "50%" }}
          bg={"transparent"}
          maxW={"2xl"}
          align={"flex-start"}
          spacing={6}
          textAlign={"left"}
          justify={"center"}
        >
          <Heading color={"black"} as="h1" fontSize="4xl" textAlign={"left"} >
            Get 5% Cash Back
            </Heading>
          <Text color={"black"} fontWeight={"medium"}>On SoundWave.com</Text>
          <Stack direction={"row"}>
          <Button
                  
                  border={"1px solid #003d29"}
                  rounded={"full"}
                  bg={"#003d29"}
                  color={"white"}
                  fontWeight={"bold"}
                  _hover={{ bg: "black", border:"1px solid black" }}
                  padding={6}
                  textAlign={"center"}
                >
                  Learn more
                </Button>
          </Stack>
        </Stack>
      </Flex>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width={{base:"100%", sm:"200px", md:"200px"}} // Width of the stack
        position="relative"
      >
        {images.map((image, index) => (
          <Box
            key={index}
            position="absolute"
            top={`${index * 8}px`} // Adjust the spacing between images here (30px in this example)
            zIndex={images.length - index} // Reverse the z-index to show the first image on top
            // transform={}
            transform={`translateX(${index * 10}px) rotate(${
              index === 0 ? "-20" : index === 2 ? "-8" : index * -12
            }deg)`} // Adjust the translation and rotation to create the diagonal tilt effect
          >
            <Image
              src={image.url}
              alt={image.alt}
              width="700px" // Width of the individual images
              borderRadius="10px" // Optional: add border radius for a card-like effect
            />
          </Box>
        ))}
      </Box>
    </Flex>
  );
};
