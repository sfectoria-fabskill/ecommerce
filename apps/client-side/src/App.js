import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Navbar from "./layouts/Navbar";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setToggle={setToggle} />
        {toggle && <Cart setToggle={setToggle} />}
        <Routes>
          <Route index element={<Home />} />
          <Route path="product/:productId" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
