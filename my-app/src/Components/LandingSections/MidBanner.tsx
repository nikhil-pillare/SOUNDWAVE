import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Container,
    Box
  } from "@chakra-ui/react";


  export default function MidBanner() {
    return (
        <Box maxWidth={"11xl"}>
      <Flex
        h={"100vh"}
        backgroundImage={
          "url(https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e51a7c201f00ec5fe3_biscount%20banner-min.png)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
        
         
        >
          <Flex width={"100%"} justifyContent={"flex-end"}>
            <Stack
              width={{ base: "100%", sm: "100%", md: "30%" }}
              paddingTop={"20"}
              paddingBottom={"20"}
              paddingLeft={"10"}
              paddingRight={"10"}
              bg={"#003d29"}
              maxW={"2xl"}
              align={"flex-start"}
              spacing={6}
              textAlign={"left"}
            >
              <Text
                color={"white"}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
              >
                Get 5% Cash Back On $200
              </Text>
              <Text>
                Shopping is a bit of a relaxing hobby for me, which is sometimes
                troubling for the bank balance.
              </Text>
              <Stack direction={"row"}>
                <Button
                  bg={"transparent"}
                  border={"1px solid white"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "black", border:"1px solid black" }}
                  padding={6}
                  textAlign={"center"}
                >
                  Learn more
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </VStack>
      </Flex>
      </Box>
    );
  }
  