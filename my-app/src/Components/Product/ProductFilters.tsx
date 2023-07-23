// import React,{useEffect, useState} from "react"
// import { useSearchParams } from "react-router-dom";
// import styled from "@emotion/styled";


// export const ProductFilters=()=>{
//  const [searchParams,setSearchparams]=useSearchParams();
// const initialcat=searchParams.get("category");
// const initialBrnad=searchParams.get("brand");

// const [cat,setCat]=useState<string>(initialcat||"");
// const [brand,setBrand]=useState<string>(initialBrnad||"");

// useEffect(()=>{
// let params={};
// if(cat){
//   params={...params,category:cat}  
// }
// if(brand){
//   params={...params,brand:brand}  
// }
// setSearchparams(params);

// },[cat,brand])

//     return(
//         <DIV>
//             <select value={cat} onChange={(e)=>{setCat(e.target.value)}}><option value="">Select Catagory</option>
//             <option value="headphone">Headphones</option>
//             <option value="Airdopes">Airdopes</option>
//             <option value="Neckband">Neckband</option>
            
            
//             </select>

//             <select value={brand} onChange={(e)=>{setBrand(e.target.value)}}>
//                 <option value="">Select brand</option>
//                 <option value="apple">apple</option>
                
//             </select>
//         </DIV>
//     )
// }

// const DIV=styled.div`
// display: flex;
// justify-content: space-around;
// width: 40%;
// margin: auto;
// margin-top:10px;
// margin-bottom: 10px;
// select{
//     width: 40%;
// }

// `

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "@emotion/styled";

export const ProductFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "all";
  const initialBrand = searchParams.get("brand") || "all";
  const initialSort = searchParams.get("sort") || "default";

  const [cat, setCat] = useState<string>(initialCat);
  const [brand, setBrand] = useState<string>(initialBrand);
  const [sort, setSort] = useState<string>(initialSort);

  useEffect(() => {
    let params: { [key: string]: string } = {};

    if (cat && cat !== "all") {
      params = { ...params, category: cat };
    }

    if (brand && brand !== "all") {
      params = { ...params, brand: brand };
    }

    if (sort && sort !== "default") {
      params = { ...params, sort: sort };
    }

    setSearchParams(params);
  }, [cat, brand, sort]);

  const handleClearFilters = () => {
    setCat("all");
    setBrand("all");
    setSort("default");
  };

  return (
    <FilterContainer>
      <select value={cat} onChange={(e) => setCat(e.target.value)}>
        <option value="all">All Categories</option>
        <option value="headphone">Headphones</option>
        <option value="Airdopes">Airdopes</option>
        <option value="Neckband">Neckband</option>
      </select>

      <select value={brand} onChange={(e) => setBrand(e.target.value)}>
        <option value="all">All Brands</option>
        <option value="apple">Apple</option>
        {/* Add more brand options here */}
      </select>

      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="default">Default Sorting</option>
        <option value="price_low_high">Price Low to High</option>
        <option value="price_high_low">Price High to Low</option>
        <option value="name_a_z">Name A to Z</option>
        <option value="name_z_a">Name Z to A</option>
      </select>

      <button onClick={handleClearFilters}>Clear Filters</button>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 800px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  select {
    width: 30%;
  }
  button {
    width: 30%;
    cursor: pointer;
  }
`;
