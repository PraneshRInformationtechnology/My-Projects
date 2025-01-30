import React from "react"
import { useState } from "react";
import data from '../assets/products.json'
import Product from "./product";
import './home.css';

const Home=({cart,setCart}) => {
  const [products] =useState(data);
  return (
    <div className="product-container">
      {products.map((product)=>(
       <Product key={product.id} product={product} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
}

export default Home;