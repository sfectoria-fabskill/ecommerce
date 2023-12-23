import React from "react";
import { CiShoppingCart } from "react-icons/ci";



function Navbar() {
 
  return (
    <div className="p-2 d-flex justify-content-between shadow-sm">
      <h1>SFECTORIA</h1>
    
        
        <CiShoppingCart />

     
    </div>
  );
}

export default Navbar;