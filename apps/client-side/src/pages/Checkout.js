import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useCart } from "react-use-cart";

function Checkout() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    totalItems,
    emptyCart,
  } = useCart();
  const [order, setOrder] = useState({});
  const handleChange = (e) => {
    const { value, name } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!items.length) {
      alert("Your cart is Empty ");
      return;
    }
    let aux = { ...order };
    aux.OrderLine = items.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
    }));

    const response = await axios.post(
      "http://localhost:3001/api/v1/orders",
      aux
    );
    if (!response.error) {
      emptyCart();
      alert("pour order has been submited");
    }
  };
  return (
    <div>
      <h1>Checkout</h1>
      <div className="d-flex justify-content-center gap-5">
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            name="clientName"
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <input
            className="form-control"
            name="clientPhone"
            placeholder="Phone"
            onChange={handleChange}
            required
          />
          <input
            className="form-control"
            name="clientAddress"
            placeholder="Address"
            onChange={handleChange}
            required
          />
          <input
            className="form-control"
            type="email"
            name="clientEmail"
            placeholder="Email"
            onChange={handleChange}
          />
          <Button onSubmit={handleSubmit} type="submit">
            Submit
          </Button>
        </form>
        <div>
          {items.map((item) => (
            <li key={item.id}>
              <img src={item.cover} alt="prodcut_image" width={100} />
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
        </div>
      </div>
    </div>
  );
}

export default Checkout;
