
import ChooseByBrand from "../../Components/LandingSections/ChooseByBrand";
import Discount from "../../Components/LandingSections/Discount";
import LandingTopCategories from "../../Components/LandingSections/LandingTopCategories";
import MidBanner from "../../Components/LandingSections/MidBanner";

import TodayBestDeals from "../../Components/LandingSections/TodaysBestDeals";
import TopBannerStage from "../../Components/LandingSections/TopBannerStage";
import { CashBack } from "../../Components/LandingSections/CashBack";
import TrendingProducts from "../../Components/LandingSections/TrendingProducts";

import BestSellingStore from "../../Components/LandingSections/BestSellingStore";
import HelpYouShop from "../../Components/LandingSections/HelpYouShop";
import { Box, Divider } from "@chakra-ui/react";
import Footer from "../../Components/LandingSections/Footer";

import WeeklyPopular from "../../Components/LandingSections/WeeklyPopular";


export default function Landing(){
    const images = [
        {
          url: 'https://res.cloudinary.com/dsixdct6o/image/upload/v1689803262/Green_yk3zyf.png',
          alt: 'Image 1',
        },
        {
          url: 'https://res.cloudinary.com/dsixdct6o/image/upload/v1689803255/63e8c4e71eb4ad08ebe75690_visa_card_02-min_kobjmk.png',
          alt: 'Image 2',
        },
        {
          url: 'https://res.cloudinary.com/dsixdct6o/image/upload/v1689803255/63e8c4e71eb4ad08ebe75690_visa_card_02-min_1_gojicc.png',
          alt: 'Image 2',
        },
        
        // Add more images here...
      ];
    
    return (
        <>
      <TopBannerStage/>
       <LandingTopCategories/>
       <WeeklyPopular/>
       <ChooseByBrand/>
      
       <Discount/>
       <MidBanner/>
       <TodayBestDeals/>
       <CashBack images={images}/>
       <TrendingProducts/>
       <BestSellingStore/>
       <HelpYouShop/>
       <Box py={12} p={4} width={"90%"} margin={"auto"} mt={38} mb={20}>
       <Divider/>
       </Box>
       <Footer/>
        </>
    )
}