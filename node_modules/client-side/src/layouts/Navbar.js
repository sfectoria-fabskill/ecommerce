import React from "react";
import { Button } from "react-bootstrap";
import { CiShoppingCart } from "react-icons/ci";
import logo from "../assets/images/logo.png";

function Navbar({setToggle}) {
  return (
    <div className="p-2 d-flex justify-content-between shadow-sm">
      <img src={logo} width={150} />
      <Button variant="light" onClick={()=>{
        setToggle(true)
      }}>
        <CiShoppingCart />
      </Button>
    </div>
  );
}

export default Navbar;
