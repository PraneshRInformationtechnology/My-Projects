import React from "react"
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Header from "./components/header";
import Home from "./components/home";
import Cart from "./components/cart";
import { useState } from "react";
import './App.css';

function App() {
  const [cart,setCart]=useState([]);
  return (
    
    <>

      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
            <Route path="/Cart" element={<Cart cart=
            {cart} setCart={setCart}/>} />
          </Routes>
        </div>
        
      </BrowserRouter>



    </>
  );
}

export default App;
