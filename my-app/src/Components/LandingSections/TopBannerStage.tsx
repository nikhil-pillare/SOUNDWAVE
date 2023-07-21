import { Image } from "@chakra-ui/react";

import {
  Stack,
  Button,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";



export default function TopBannerStage(){
  

  return (
    <section style={{
        position: "relative",
        zIndex: "0",
        paddingTop: "150px",
        paddingBottom: "150px",
        backgroundImage: "url(https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e58c0997219ec01eb6_background-bg-min.png)",
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height:"620px",
        display:"flex"
        
    }}>
    
<Stack
ml={5}
mr={5}
            width={{ base: "90%", sm: "90%", md: "90%",lg:"30%",xl:"30%" }}
            paddingTop={"20"}
            paddingBottom={"20"}
            paddingLeft={"10"}
            paddingRight={"10"}
            bg={"transparent"}
            maxW={"2xl"}
            align={"flex-start"}
            spacing={6}
            textAlign={"left"}
            justify={"center"}
          >
            <Text
              color={"#003d29"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl", lg:"5xl",xl:"5xl" })}
            >
             Shopping And
Department Store.
            </Text>
            <Text color={"#003d29"} fontWeight={"medium"} fontSize={"1xl"}>
              Shopping is a bit of a relaxing hobby for me, which is sometimes
              troubling for the bank balance.
            </Text>
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

    <div className="banner-wrapper" style={{
        position: "absolute",
        left: "0%",
        top: "0%",
        right: "auto",
        bottom: "auto",
        zIndex: "-1",
        width: "100%",
        height: "100%",
    }}>
      <div
        className="banner-stage-bg"
        style={{
          transform:
            "translate3d(0vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <Image
        maxWidth= {"100%"}
        verticalAlign= "middle"
        display= {{base:"none", sm:"none", md:"none",lg:"inline-block",xl:"inline-block"}}
          src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9b930e006824963189865_bg-stage.png"
          loading="lazy"
          sizes="(max-width: 1439px) 100vw, 1440px"
          srcSet="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9b930e006824963189865_bg-stage-p-500.png 500w, https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9b930e006824963189865_bg-stage-p-800.png 800w, https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9b930e006824963189865_bg-stage-p-1080.png 1080w, https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9b930e006824963189865_bg-stage.png 1440w"
          alt=""
        />

      </div>
      <div
  className="banner-product-image-one"
  style={{
    transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    transformStyle: 'preserve-3d',
    position: "absolute",
    left: "auto",
    top: "71px",
    right: "125px",
    bottom: "auto",
  }}
>
  <Image
  maxWidth= {"100%"}
  verticalAlign= "middle"
  display= {{base:"none",sm:"none", md:"none",lg:"inline-block",xl:"inline-block"}}
    src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e660afc23a10a53523_other-min.png"
    loading="lazy"
    alt=""
  />
</div>
<div
  className="banner-product-image-two"
  style={{
    transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    transformStyle: 'preserve-3d',
    position: "absolute",
    left: "auto",
    top: "156px",
    right: "433px",
    bottom: "auto",
  }}
>
  <Image
   maxWidth= {"100%"}
   verticalAlign= "middle"
   display= {{base:"none",sm:"none", md:"none",lg:"inline-block",xl:"inline-block"}}

    src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e75b939fd1159c029e_tour-min.png"
    loading="lazy"
    alt=""
  />
</div>
<div
  className="banner-product-image-three"
  style={{
    transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    transformStyle: 'preserve-3d',
    position: "absolute",
    left: "auto",
    top: "300px",
    right: "208px",
    bottom: "auto",
}
  }
>
  <Image
   maxWidth= {"100%"}
   verticalAlign= "middle"
   display= {{base:"none",sm:"none", md:"none",lg:"inline-block",xl:"inline-block"}}
    src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9c0607f75e4aad54b94a0_ele.png"
    loading="lazy"
    alt=""
  />
</div>
<div
  className="banner-product-image-four"
  style={{
    transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    transformStyle: 'preserve-3d',
    position:"absolute",
    left:"auto",
    top:"350px",
    right:"550px",
    bottom:"auto",
  }}
>
  <Image 
  maxWidth= {"100%"}
     verticalAlign= "middle"
     display= {{base:"none",sm:"none", md:"none",lg:"inline-block",xl:"inline-block"}}
 
    src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e7037f3b07ebcf202d_snaks-min.png"
    loading="lazy"
    alt=""
  />
</div>

    </div>
    </section>
)
}