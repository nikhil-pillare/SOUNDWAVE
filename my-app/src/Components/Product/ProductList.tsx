

import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { disType, getData } from "../../Redux/ProductReducer/action";
import { ProductCard } from "./ProductCard";
import { singleProduct } from "../../Redux/ProductReducer/reducer";
import { useSearchParams } from "react-router-dom";

export const ProductList = () => {
  const productData = useSelector((store: any) => store.productReducer.products);
  let [searchParams] = useSearchParams();
  let brand = searchParams.get("brand");
  let category = searchParams.get("category");
  const [page, setPage] = useState<number>(() => {
    // Get the page value from localStorage on component mount
    const savedPage = localStorage.getItem("currentPage");
    return savedPage ? Number(savedPage) : 1;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const param = {
      params: {
        _page: page,
        _limit: 8,
        category,
        brand,
      },
    };
    window.scrollTo(0, 0);
    dispatch<any>(getData(param));
  }, [searchParams, page]);

  // Save the current page value to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("currentPage", String(page));
  }, [page]);

  return (
    <DIV>
      <div className="list">
        {productData.map((ele: singleProduct) => (
          <ProductCard key={ele.id} {...ele} />
        ))}
      </div>
      <br />
      <br />
      <br />
      <div className="pagi">
        <button
          className="page"
          style={{borderTopLeftRadius:"20px", borderBottomLeftRadius:"20px"}}
          disabled={page === 1 ? true : false}
          onClick={() => {
            setPage((prevPage) => prevPage - 1);
          }}
        >
          Prev
        </button>
        <button className="page">{page}</button>
        <button
          className="page"
          style={{borderTopRightRadius:"20px" , borderBottomRightRadius:"20px"}}
          onClick={() => {
            setPage((prevPage) => prevPage + 1);
          }}
        >
          Next
        </button>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 100%;
  .list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 90%;
    gap: 5%;
    margin: auto;
    margin-bottom: 10px;
  }
  .pagi {
    display: flex;
    width: 20%;
    justify-content: space-around;
    margin: auto;
    margin-top: 10px;
  }
  .page {
    background-color: #00472f;
    color: white;
    width: 30%;
   
  }
  .page:hover {
    background-color: gray;
  }
`;
