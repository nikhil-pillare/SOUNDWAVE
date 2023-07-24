import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "@emotion/styled";

export const ProductFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("type") || "all";
  const initialBrand = searchParams.get("brand") || "all";
  const initialSort = searchParams.get("order") || "default";
  const initialPrice = searchParams.get("price") || "all";
  const initialNoise = searchParams.get("noise") || "all";
  const [cat, setCat] = useState<string>(initialCat);
  const [brand, setBrand] = useState<string>(initialBrand);
  const [order, setOrder] = useState<string>(initialSort);
 const [noise, setNoise]=useState<string>(initialNoise)
 const [price, setPrice]=useState<string>(initialPrice)
  useEffect(() => {
    let params: { [key: string]: string } = {};

    if (cat && cat !== "all") {
      params = { ...params, type: cat };
    }

    if (brand && brand !== "all") {
      params = { ...params, brand: brand };
    }

    if (order && order !== "default") {
      params = { ...params, _order: order };
    }
    if (price && price !== "all") {
      params = { ...params, price: price };
    }
    if (noise && noise !== "all") {
      params = { ...params, noise_cancellation: noise };
    }

    setSearchParams(params);
  }, [cat, brand, order, noise, price]);

  const handleClearFilters = () => {
    setCat("all");
    setBrand("all");
    setOrder("default");
    setNoise("all");
    setPrice("all")
  };

  return (
    <FilterContainer>
      <select value={cat} onChange={(e) => setCat(e.target.value)}>
        <option value="all">All Types</option>
        <option value="over-ear">Over-ear</option>
        <option value="on-ear">On-ear</option>
        <option value="in-ear">In-ear</option>
      </select>

      <select value={brand} onChange={(e) => setBrand(e.target.value)}>
        <option value="all">All Brands</option>
        <option value="Apple">Apple</option>
          <option value="Bose">Bose</option>
         <option value="Boat">Boat</option>
         <option value="Razer">Razer</option>
       
      </select>
      <select value={noise} onChange={(e) => setNoise(e.target.value)}>
        <option value="all">Noise-Cancellation</option>
        <option value="Active-Noise-Cancellation">Active-Noise-Cancellation</option>
          <option value="Passive-Noise-Cancellation">Passive-Noise-Cancellation</option>
          <option value="none">None</option>
       
      </select>
      <select value={price} onChange={(e) => setPrice(e.target.value)}>
        <option value="all">price</option>
        <option value="price_low_high">Low to High</option>
          <option value="price_high_low">High to Low</option>
        
       
      </select>
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="default">Sort</option>
        
        <option value="asc">Name A to Z</option>
        <option value="desc">Name Z to A</option>
      </select>

      <button onClick={handleClearFilters}>Clear Filters</button>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1100px;
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
