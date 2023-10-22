import "./style.scss";
import React from "react";
import { NavLink } from "react-router-dom";
export default function Topbar() {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="top-bar">
      <li className="navbar-midle-item">
        <NavLink to="/gioi-thieu">Giới thiệu</NavLink>
      </li>
      <li className="navbar-midle-item">
        <NavLink to="/Products">Sản phẩm</NavLink>
      </li>
      <li className="navbar-midle-item">
        <NavLink to="/thanh-phan">Thành phần</NavLink>
      </li>
      <li className="navbar-midle-item">
        <NavLink to="/kien-thuc-cham-soc-da">Kiến thức chăm sóc da</NavLink>
      </li>
      <li className="navbar-midle-item">
        <NavLink to="/khuyen-mai">Khuyến mại</NavLink>
      </li>
    </ul>
  );
}
