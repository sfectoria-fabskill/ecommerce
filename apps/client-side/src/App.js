import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider, useCart } from "react-use-cart";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Navbar from "./layouts/Navbar";
import { useState } from "react";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";


function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <Navbar setToggle={setToggle} />
        {toggle && <Cart setToggle={setToggle} />}
        <Routes>
          <Route index element={<Home />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
