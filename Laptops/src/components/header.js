import React from "react"
import {Link} from "react-router-dom"
import './header.css';

const Header=() => {
  
  return (
    <div className="nav">
    
      <p>logo</p>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/cart"}>Cart</Link></li>
      </ul>
    


    </div>
  );
}

export default Header;