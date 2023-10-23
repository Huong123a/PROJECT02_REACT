import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export interface ChildProps {
  searchValue: String,
  setTotalCartProduct: any
}

export default function Home (props: ChildProps){

  const {searchValue, setTotalCartProduct} = props

  const [productsData, setProductsData] = useState([])

  const [searchResultData, setSearchResultData] = useState([])

  let results: Array<any> = []

  const getProductData = async () =>  {
    const response = await axios.get("http://localhost:3000/products");
    setProductsData(response.data)
  }

  const addProductToCard = async (product: any) => {
    try {
      const cartResponse = await axios.get("http://localhost:3000/carts");
      const cartItems = cartResponse.data;
      const existingProduct = cartItems.find((item: any) => item.id === product.id);

      if (existingProduct) {
        await axios.put(`http://localhost:3000/carts/${existingProduct.id}`, {
          ...existingProduct,
          quantity: existingProduct.quantity + 1,
        });
      } else {
        await axios.post("http://localhost:3000/carts", {
          ...product,
          quantity: 1,
        });
      }
        const updatedCartResponse = await axios.get("http://localhost:3000/carts");
      setTotalCartProduct(updatedCartResponse.data.length);

      alert("THEM VAO GIO HANG THANH CONG");
    } catch (error) {
      console.error("An error occurred while adding the product to the cart:", error);
    }
  };


  useEffect( () => {
    getProductData()
  }, [])

  useEffect(() => {
    const newProductsData = productsData.filter(value =>
      (value["name"] as string).toLowerCase().includes(searchValue.toLowerCase())
  );

  setSearchResultData(newProductsData)
  }, [searchValue])



let dataDisplay = searchResultData.length > 0 ? searchResultData : productsData

dataDisplay.forEach((product, index) => {
    results.push(


      <div className="card">
        <div className="card-body">

          <>
<NavLink  to="/Product-detail" state={{ name: product["name"], price: product["price"] }}>

<img
          src="./img1.webp"
          alt="Sản phẩm 2"
          className="card-img-top"
        />



        <h5 className="card-text">
         { product["name"]}
          </h5>

{
  product["isHighlight"] === true ?   <h5 className="card-text">
  Hight Light
   </h5> : null
}


{
  product["isNew"] === true ?   <h5 className="card-text">

   </h5> : null
}

{
  product["totalOrder"] > 5000 ?   <h5 className="card-text">
  Ban chay
   </h5> : null
}


          <p className="card-price"> {product["price"]}</p>

</NavLink>


          </>
        



          <a onClick={() => addProductToCard(product)} href="#" className="btn btn-warning">
            Thêm vào giỏ hàng
          </a>


        </div>
      </div>
    
    );
  });


    return(
        <>
         <section className="container">
    <div className="carousel-container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="./slide.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="./assets/img/373336311_2989334214536374_643625586630560268_n.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="./assets/img/373026240_1089420562442213_7450279154939797871_n.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </section>
  <section className="product-link">
    <div className="container">
      <div className="d-flex justify-content-between">
        <div>
          {/* Nội dung cột 1 */}
          <a href="#load-more-left" className="product-btn bg-yellow">
            LOẠI BỎ TẾ BÀO CHẾT &gt;
          </a>
        </div>
        <div>
          {/* Nội dung cột 2 */}
          <a href="#load-more-ice" className="product-btn bg-grey">
            KEM DƯỠNG ẨM &gt;
          </a>
        </div>
        <div>
          {/* Nội dung cột 3 */}
          <a href="#load-more-suncream" className="product-btn bg-yellow">
            KEM CHỐNG NẮNG &gt;
          </a>
        </div>
        <div>
          {/* Nội dung cột 4 */}
          <a href="#load-more-tcct" className="product-btn bg-grey">
            TINH CHẤT CẢI THIỆN&gt;
          </a>
        </div>
        <div>
          {/* Nội dung cột 5 */}
          <a href="./tudienthanhphan.html" className="product-btn bg-yellow">
            TỪ ĐIỂN THÀNH PHẦN
          </a>
        </div>
      </div>
    </div>
  </section>
  <div className="container">
    <div className="introduce-product">
      <h2>Sản phẩm của chúng tôi</h2>
    </div>
  </div>
  <section className="product-cart1" />
  <section className="product-cart1">
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-between mt-3">
          {/* Nút "Xem thêm" bên trái màu cam */}
          <button id="load-more-ice" className="btn btn-warning">
            KEM DƯỠNG ẨM &gt;
          </button>
          {/* Nút "Xem thêm" bên phải màu xám (grey) */}
          <button
            id="load-more-right"
            className="btn btn-secondary btn-seeMore"
          >
            <a href="./kemduongam-product.html">Xem thêm</a>
          </button>
        </div>
{/*        
       {
       } */}
        <div className="col-md-3">
       
       {productsData.length > 0 || searchResultData.length > 0 ? results : null}



        </div>

      </div>
    </div>
  </section>
  <section className="product-cart1">
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-between mt-3">
          {/* Nút "Xem thêm" bên trái màu cam */}
          <button id="load-more-suncream" className="btn btn-warning">
            KEM CHỐNG NẮNG &gt;
          </button>
          {/* Nút "Xem thêm" bên phải màu xám (grey) */}
          <button id="load-more-right" className="btn btn-secondary">
            <a href="./kemchongnang-product.html">Xem thêm</a>
          </button>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              src="./img2.jpeg"
              alt="Sản phẩm 3"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-text">
                Kem chống nắng chống lão hóa Resist Skin Restoring Moisturizer
                Broad Spectrum SPF 50 60ml
              </h5>
              <p className="card-price">500.000VND</p>
              <a href="#" className="btn btn-warning">
                Thêm vào giỏ hàng
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              src="./img2.jpeg"
              alt="Sản phẩm 3"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-text">
                Kem chống nắng chống lão hóa Resist Skin Restoring Moisturizer
                Broad Spectrum SPF 50 60ml
              </h5>
              <p className="card-price">500.000VND</p>
              <a href="#" className="btn btn-warning">
                Thêm vào giỏ hàng
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              src="./img2.jpeg"
              alt="Sản phẩm 3"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-text">
                Kem chống nắng chống lão hóa Resist Skin Restoring Moisturizer
                Broad Spectrum SPF 50 60ml
              </h5>
              <p className="card-price">500.000VND</p>
              <a href="#" className="btn btn-warning">
                Thêm vào giỏ hàng
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              src="./img2.jpeg"
              alt="Sản phẩm 3"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-text">
                Kem chống nắng chống lão hóa Resist Skin Restoring Moisturizer
                Broad Spectrum SPF 50 60ml
              </h5>
              <p className="card-price">500.000VND</p>
              <a href="#" className="btn btn-warning">
                Thêm vào giỏ hàng
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="product-cart1">
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-between mt-3">
          {/* Nút "Xem thêm" bên trái màu cam */}
          <button id="load-more-tcct" className="btn btn-warning">
            TINH CHẤT CẢI THIỆN &gt;
          </button>
          {/* Nút "Xem thêm" bên phải màu xám (grey) */}
          <button id="load-more-right" className="btn btn-secondary">
            <a href="./tinhchatcaithien-product.html">Xem thêm</a>
          </button>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              src="./img3.jpg"
              alt="Sản phẩm 3"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-text">
                Tinh chất chống lão hóa từ Retinol và Bakuchiol Clinical 0.3%
                Retinol + 2% Bakuchiol Treatment 30ml
              </h5>
              <p className="card-price">800.000VND</p>
              <a href="#" className="btn btn-warning">
                Thêm vào giỏ hàng
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              src="./img3.jpg"
              alt="Sản phẩm 3"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-text">
                Tinh chất chống lão hóa từ Retinol và Bakuchiol Clinical 0.3%
                Retinol + 2% Bakuchiol Treatment 30ml
              </h5>
              <p className="card-price">800.000VND</p>
              <a href="#" className="btn btn-warning">
                Thêm vào giỏ hàng
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              src="./img3.jpg"
              alt="Sản phẩm 3"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-text">
                Tinh chất chống lão hóa từ Retinol và Bakuchiol Clinical 0.3%
                Retinol + 2% Bakuchiol Treatment 30ml
              </h5>
              <p className="card-price">800.000VND</p>
              <a href="#" className="btn btn-warning">
                Thêm vào giỏ hàng
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              src="./img3.jpg"
              alt="Sản phẩm 3"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-text">
                Tinh chất chống lão hóa từ Retinol và Bakuchiol Clinical 0.3%
                Retinol + 2% Bakuchiol Treatment 30ml
              </h5>
              <p className="card-price">800.000VND</p>
              <a href="#" className="btn btn-warning">
                Thêm vào giỏ hàng
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br />
        </>
        
    )
}