import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Topbar from "./components/topbar";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Products from "./Pages/Product";
import ProductDetail from "./Pages/Product-detail";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/Login";
  const isRegister = location.pathname === "/Register";

  const [searchValue, setSearchValue] = useState("")

  const [totalCartProduct, setTotalCartProduct] = useState(0)

  return (
    <>
      {isLoginPage || isRegister ? null : <Header setSearchValue={setSearchValue} totalCartProduct={totalCartProduct} />}

      {isLoginPage || isRegister ? null : <Topbar />}
      <div id="main">
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} setTotalCartProduct={setTotalCartProduct}/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Product-detail" element={<ProductDetail />} />
          <Route path="/Cart" element={<Cart setTotalCartProduct={setTotalCartProduct}/>} />
        </Routes>
      </div>

      {/* Footer */}
      {isLoginPage || isRegister ? null : <Footer />}
    </>
  );
}

export default App;
