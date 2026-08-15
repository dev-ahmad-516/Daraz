import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';
import { FaFire } from "react-icons/fa";

const ProductList = ({ products }) => {
  return (
    <>
      <h1>SHOP NOW!</h1>
      <div className="products">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
