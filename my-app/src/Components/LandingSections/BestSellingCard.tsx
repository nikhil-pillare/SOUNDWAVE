import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    Icon,
    useColorModeValue
  } from "@chakra-ui/react";
  import { FaCircle } from "react-icons/fa";
  import { AiOutlineTag } from "react-icons/ai";

  export default function BestSellingCard({image,label,icon}:{image:string,label:string,icon:string}) {
    return (
      <Center py={6}>
        <Box
          maxW={"300px"}
          w={"full"}
          bg={"transparent"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Box className="img-wrapper">
          <Image
          className="hover-zoom"
            h={"250px"}
            w={"full"}
            src={
              image
            }
            borderRadius={"10px"}
            objectFit={"cover"}
          />
          </Box>
          <Flex justify={"flex-start"} padding={5} mt={-12}>
            <Avatar
              size={"l"}
              src={
                icon
              }
              
              css={{
                border: "2px solid white"
              }}
            />
          </Flex>
  
          <Box p={6} mt={-9}>
            <Stack align={"flex-start"} mb={5}>
              <Text fontWeight={900} color={"black"}>
                {label}
              </Text>
            </Stack>
            <Flex color={"#b2b9c0"} mt={-5} direction="row">
              <Text>{"Bag"} </Text>
              <Box display="inline-block" verticalAlign="middle">
                <Icon
                  as={FaCircle}
                  color={"#b2b9c0"}
                  boxSize={1}
                  verticalAlign="middle"
                  ml={1}
                  mr={1}
                ></Icon>
              </Box>
              <Text>{"Perfume"}</Text>
            </Flex>
            <Stack spacing={0} align={"flex-start"} mb={5}>
              <Text color="#c34482" textAlign={"left"} fontSize={"sm"}><span><Icon mb={-1} mr={1} as={AiOutlineTag}></Icon></span>Delivery with in 24 hours</Text>
            </Stack>
          </Box>
        </Box>
      </Center>
    );
  }
  