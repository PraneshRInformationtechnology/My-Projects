import React, { useState,useEffect } from "react"
import './cart.css';

const Cart=({cart,setCart}) => {
  const [total,setTotal]=useState(0);
  useEffect(()=>
  {
      const newTotal=cart.reduce((acc,item)=>
      acc+item.price,0);
  
    setTotal(newTotal);
  },[cart]);
  return (
    <>
    <h1 className="cart-heading">Cart Products</h1>
    <div className="cart-container">
   {cart.map((product)=>(
     <div className="cart-product" key={product.id}>
     <div className="img">
       <img src={product.imgUrl} alt={product.title}/>
     </div>
     <div className="product-details">
       <h3>{product.title}</h3>
       <p>Price : RS.{product.price}</p>
       </div>
   </div>
   ))}
    </div>
    <h2 className="cart-amt">Total Amount :RS.{total}</h2>
    </>
  );
}

export default Cart;