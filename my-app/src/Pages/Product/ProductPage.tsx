import styled from "@emotion/styled"

import NavBar from "../../Components/LandingSections/NavBar"

import { ProductList } from "../../Components/Product/ProductList"

import { ProductFilters } from "../../Components/Product/ProductFilters"

import Footer from "../../Components/LandingSections/Footer"
export const ProductPage=()=>{

    return (
<DIV>
{/* <NavBar/> */}
<div className="banner"><img src="https://socialweb.ro/wp-content/uploads/2019/10/ads-headphone.png" alt="" /></div><br />

<h1 className="Title">Find Your Favourite Products Here</h1>

<ProductFilters/><br />

<ProductList/>

<Footer/>
</DIV>
    )
}


const DIV=styled.div`
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
.banner{
    width: 100%;
}
    .banner>img{
        width: 100%;
    }
.Title{
    font-size: larger;
    color: #00472F ;
    text-align: center;
}
`