import React from "react";
import { Button } from "react-bootstrap";

function Cart({ setToggle }) {
  return (
    <div
      className="position-fixed bg-light-gray w-100 h-100 top-0"
      style={{ zIndex: 99 }}
    >
      <div className="h-100 bg-white  p-2" style={{ width: 300 }}>
        <div className="d-flex justify-content-between">
          Your Cart
          <Button variant="light" onClick={() => setToggle(false)}>
            <span>X</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
