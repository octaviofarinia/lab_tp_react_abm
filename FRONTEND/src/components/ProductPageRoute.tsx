import React from "react";
import { useParams } from "react-router-dom";
import ProductPage from "./ProductPage";
import axios from "axios";
import { useState, useEffect } from "react";
import { getInstrumento } from "../utils/APIUtils";

const ProductPageRoute = () => {
  const [instrumento,setInstrumento]=useState();
  const { productId } = useParams();

  useEffect(() => { 
    
    getInstrumento({Id:productId, setter: setInstrumento})
  }, []);
  
  
  return instrumento ? (
    <ProductPage product={instrumento} />
  ) : (
    <h2>Product not found</h2>
  );
};

export default ProductPageRoute;
