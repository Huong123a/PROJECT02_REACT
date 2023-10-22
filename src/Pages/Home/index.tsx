export default function Home (){
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
        <div className="col-md-3">
          <div className="card">
            <img
              src="./img1.webp"
              alt="Sản phẩm 2"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-text">
                Kem dưỡng ẩm mềm mịn cho da dầu lão hóa Resist Anti-Aging Clear
                Skin Hydrator 50ml
              </h5>
              <p className="card-price">1.000.000VND</p>
              <a href="#" className="btn btn-warning">
                Thêm vào giỏ hàng
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              src="./img1.webp"
              alt="Sản phẩm 2"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-text">
                Kem dưỡng ẩm mềm mịn cho da dầu lão hóa Resist Anti-Aging Clear
                Skin Hydrator 50ml
              </h5>
              <p className="card-price">1.000.000VND</p>
              <a href="#" className="btn btn-warning">
                Thêm vào giỏ hàng
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              src="./img1.webp"
              alt="Sản phẩm 2"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-text">
                Kem dưỡng ẩm mềm mịn cho da dầu lão hóa Resist Anti-Aging Clear
                Skin Hydrator 50ml
              </h5>
              <p className="card-price">1.000.000VND</p>
              <a href="#" className="btn btn-warning">
                Thêm vào giỏ hàng
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              src="./img1.webp"
              alt="Sản phẩm 2"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-text">
                Kem dưỡng ẩm mềm mịn cho da dầu lão hóa Resist Anti-Aging Clear
                Skin Hydrator 50ml
              </h5>
              <p className="card-price">1.000.000VND</p>
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