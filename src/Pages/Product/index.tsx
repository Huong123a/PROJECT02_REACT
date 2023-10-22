export default function Products() {
  return (
    <div className="container">
      <div className="row">
        <div className="sidebar col-3">
          <div className="sb-top navigation">
            <div className="sb-titel">SẢN PHẨM THEO LOẠI DA</div>
            <div className="is-divider small" />
            <ul>
              <li>
                <a href="#">Da dầu</a>
                <small className="count">57</small>
              </li>
              <li>
                <a href="#">Da hỗn hợp</a>
                <small className="count">57</small>
              </li>
              <li>
                <a href="#">Da mụn</a>
                <small className="count">57</small>
              </li>
              <li>
                <a href="#">Da khô</a>
                <small className="count">57</small>
              </li>
              <li>
                <a href="#">Da nhạy cảm</a>
                <small className="count">57</small>
              </li>
              <li>
                <a href="#">Da thiên dầu</a>
                <small className="count">57</small>
              </li>
            </ul>
          </div>
          <div className="sb-bt navigation">
            <div className="sb-titel">SẢN PHẨM THEO VẤN ĐỀ DA</div>
            <div className="is-divider small" />
            <ul>
              <li>
                <a href="#">Bảo vệ da khỏi ô nhiễm</a>
                <small className="count">57</small>
              </li>
              <li>
                <a href="#">Da lão hóa, nếp nhăn</a>
                <small className="count">57</small>
              </li>
              <li>
                <a href="#">Da lỗ chân lông to</a>
                <small className="count">57</small>
              </li>
              <li>
                <a href="#">Dầu thừa</a>
                <small className="count">57</small>
              </li>
              <li>
                <a href="#">Thâm mụn</a>
                <small className="count">57</small>
              </li>
              <li>
                <a href="#">Tàn nhang</a>
                <small className="count">57</small>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-9">
          <select name="lang" id="lang-select">
            <option value="">Thứ tự theo mức độ phổ biến</option>
            <option value="">Thứ tự theo giá:cao xuống thấp</option>
            <option value="">Thứ tự theo giá:thấp xuống cao</option>
            <option value="">Mới nhất</option>
          </select>
          <div className="container">
            <div className="introduce-product">
              <h2>Sản phẩm của chúng tôi</h2>
            </div>
          </div>
          <div className="list-product">
            <section className="product-cart1">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="product">
                      <img src="url_of_product_image" alt="Product" />
                      <h3>Tên sản phẩm</h3>
                      <p>Mô tả sản phẩm</p>
                      <p>Giá: $50</p>
                      <button>Mua hàng</button>
                    </div>
                  </div>
                  <div className="col-md-4"></div>
                  <div className="col-md-4"></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
