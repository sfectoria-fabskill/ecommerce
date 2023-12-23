import React from "react";
import { Button } from "react-bootstrap";
import { CiShoppingCart } from "react-icons/ci";
import logo from "../assets/images/logo.png";
import { useCart } from "react-use-cart";

function Navbar({setToggle}) {
  const { totalItems } = useCart();
  return (
    <div className="p-2 d-flex justify-content-between shadow-sm">
      <img src={logo} width={150} />
      <Button variant="light" onClick={()=>{
        setToggle(true)
      }}>
        <span className="" style={{width:"50px"}}>{totalItems}</span>
        <CiShoppingCart />

      </Button>
    </div>
  );
}

export default Navbar;
