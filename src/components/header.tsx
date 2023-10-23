import { faHeart, faSearch, faShoppingCart, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SetStateAction, useState } from 'react';
import { NavLink } from 'react-router-dom';


export interface ChildProps {
   setSearchValue: any,
   totalCartProduct: number
}

export default function Header(props: ChildProps) {
  var isLogin = sessionStorage.getItem("isLogin");

  const {setSearchValue, totalCartProduct} = props

  const [inputChangeValue, setInputChangeValue] = useState('');

  // const [productCartTotal, setProductCartTotal] = useState(0);


  const handleInputChange = (e: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
    e.preventDefault();
    setInputChangeValue(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchValue(inputChangeValue)
  };

  const handleClearClick = () => {
    setInputChangeValue('');
    setSearchValue('');
  };


  return (
    <>
      <div className="main-navbar">
        <div className="top-navbar">
          <div className="container">
            <div className="row">
              <div className="col-md-3 my-auto d-none d-sm-none d-md-block d-lg-block">
              <NavLink to="/" className="brand-name">PiTi Cosmetic</NavLink>
              </div>
              <div className="col-md-4 my-auto">

<form id="product-search-form" role="search">
  <style>{`
    .custom-input-group input[type="search"]::-webkit-search-clear-button,
    .custom-input-group input[type="search"]::-moz-cancel-image {
      display: none;
    }
  `}</style>

  <div className="input-group custom-input-group">
    <input
      // type="search"
      id="search-input"
      placeholder="Tìm kiếm sản phẩm"
      className="form-control"
      value={inputChangeValue}
      onChange={handleInputChange}
    />
    <button className="btn bg-white" type="button" onClick={handleSearchClick}>
      <FontAwesomeIcon icon={faSearch} />
    </button>
    {inputChangeValue && (
      <button className="btn bg-white" type="button" onClick={handleClearClick}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    )}
  </div>
</form>

              </div>
              <div className="col-md-5 my-auto">
                <ul className="nav d-flex justify-content-between align-items-center">
                <li className="nav-bar-item">
  <NavLink to="/Cart" className="position-relative">
    <FontAwesomeIcon icon={faShoppingCart} className="position-relative" />

{
  totalCartProduct > 0 ?     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {totalCartProduct}
  <span className="visually-hidden">unread messages</span>
</span> : null 
}


    Giỏ hàng
  </NavLink>
</li>

                <li className="nav-bar-item">
                  <NavLink to="/Favor">
                    <FontAwesomeIcon icon={faHeart} />
                    Yêu thích
                  </NavLink>
                </li>
{
  isLogin === "true" ? 
  <div>
    <span>
      <h1>Hello</h1>
    </span>
  </div>
:
  <li className="nav-bar-item" id="info-user">
  <NavLink to="/Login">
    <FontAwesomeIcon icon={faUser} />
    Tài khoản
  </NavLink>
</li>
}

                  <li className="nav-bar-item" id="user-logout">
                    <a href="">
                      <i className="fa-solid fa-arrow-right-from-bracket" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a
              className="navbar-brand d-block d-sm-block d-md-none d-lg-none"
              href="#"
            >
              PiTi Cosmetic
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </nav>
      </div>

      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="navbar-midle-item">
            <a href="./pages/product/gioi-thieu.html">Giới thiệu</a>
          </li>
          <li className="navbar-midle-item">
            <a href="./pages/product/san-pham.html">Sản phẩm</a>
          </li>
          <li className="navbar-midle-item">
            <a href="./pages/product/thanh-phan.html">Thành phần</a>
          </li>
          <li className="navbar-midle-item">
            <a href="./pages/product/kienthuchamsocda.html">
              Kiến thức chăm sóc da
            </a>
          </li>
          <li className="navbar-midle-item">
            <a href="./pages/product/khuyenmai.html">Khuyến mại</a>
          </li>
        </ul>
      </div> */}
    </>
  );
}
