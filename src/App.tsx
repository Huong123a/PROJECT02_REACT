import React from "react";
import Header from "./components/header";
import Products from "./Pages/Product";
import Footer from "./components/footer";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Product_detail from "./Pages/Product-detail";
import Cart from "./Pages/Cart";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Topbar from "./components/topbar";
import "./App.css";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/Login";
  const isRegister = location.pathname === "/Register";

  return (
    <>
      {isLoginPage || isRegister ? null : <Header />}

      {isLoginPage || isRegister ? null : <Topbar />}
      <div id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Product-detail" element={<Product_detail />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>

      {/* Footer */}
      {isLoginPage || isRegister ? null : <Footer />}
    </>
  );
}

export default App;
