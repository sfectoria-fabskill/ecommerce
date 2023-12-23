import React from "react";
import { Button } from "react-bootstrap";
import { useCart } from "react-use-cart";

function Cart({ setToggle }) {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    totalItems,
    emptyCart
  } = useCart();



  return (
    <div
      className="position-fixed bg-light-gray w-100 h-100 top-0"
      style={{ zIndex: 99 }}
    >
      <div className="h-100 bg-white  p-2 position-relative" style={{ width: 300 }}>
        <div className="d-flex justify-content-between">
          Your Cart ({totalItems})
          
          <Button variant="light" onClick={() => setToggle(false)}>
            <span>X</span>
          </Button>
        </div>
        {isEmpty&&<p>Your cart is empty</p>}
        <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt="prodcut_image" width={100}/>
            {item.quantity} x {item.title}
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-center">
      <Button variant="warning" className="position-absolute bottom-0  ">
        Checkout
      </Button>
      <Button variant="warning" className="position-absolute bottom-2" onClick={()=>emptyCart()}>
        Clear
      </Button>
      </div>
      </div>
  
    </div>
  );
}

export default Cart;
