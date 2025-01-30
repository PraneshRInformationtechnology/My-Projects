import React from "react"
import './products.css';

const Product=({product,cart,setCart}) => {
  const name=product.title.length>26?product.title.substring(0,25)+"...":product.title;
  const addcart=()=>{
    setCart([...cart,product]);
  }
  const removecart=()=>{
    setCart(cart.filter((c)=>c.id!==product.id))
  }
  return (
    <div className="product">
        <div className="img">
            <img src={product.imgUrl} alt={product.title}/>
        </div>
         <div className="details">
          <h3>{name}</h3>
          <p className="rate">Rating : {product.rating}</p>
          <p>Price : RS.{product.price}</p>
          {cart.includes(product)?<button className="btnremove" onClick={removecart}>Remove </button>
          :<button onClick={addcart}>Add To Cart</button>}
        
        </div>
     </div>
  );
}

export default Product;