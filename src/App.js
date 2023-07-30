import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home";
import Cart from "../src/components/Cart";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import Store  from "./store/Store";

export default function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Navbar />
        <div className="componet-container">
          <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="cart" Component={Cart}></Route>
          </Routes>
        </div>
      </Router>
     </Provider>
  );
}
