
 import { useLocation } from "react-router-dom";



export default function ProductDetail(){

  let location = useLocation();

    return(
        <section className="product_detail-content">
          <img
          src="./img1.webp"
          alt="Sản phẩm 2"
          className="card-img-top"
        />
  <h4>{location.state.name}</h4>
  <h5>Giá: {location.state.price}VNĐ</h5>
  <p>Chọn số lượng:</p>
  <div className="btn-quantity">
    <button className="btn-quantity-reduce">-</button>
    <input className="quantity-input" type="text" defaultValue={1} />
    <button className="btn-quantity-add">+</button>
  </div>
  <div>
    <a>
      <button className="btn-add-product_detail">Thêm vào giỏ hàng</button>
    </a>{" "}
    <br />
    <button className="product_detail-btn-buynow">Mua ngay</button>
  </div>
  <h6>Mô tả sản phẩm</h6>
  <hr />
  Skin Perfecting 2% BHA Liquid Exfoliant là sản phẩm loại bỏ tế bào chết hóa
  học có công thức dịu nhẹ, không chứa chất làm bào mòn da, dễ dàng thẩm thấu và
  không làm bít tắc lỗ chân lông.
</section>

    )
}