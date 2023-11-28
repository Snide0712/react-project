import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from "./components/Add";
import Cart from "./components/Cart";
import ListCard from "./components/ListCard";
import Menu from "./components/Menu";
import "./App.css";
import { CartProvider } from "use-shopping-cart";


function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Menu />
          <Routes>
            <Route path="/" element={<ListCard />} />
            <Route path="/Add" element={<Add />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
