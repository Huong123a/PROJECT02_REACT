import { useLocation } from "react-router-dom";

export default function ProductDetail() {
  let location = useLocation();

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-detail-image">
          <img
            src="/img1.webp" // Update the path to your image
            alt={location.state.name}
            className="product-detail-img"
          />
        </div>

        <div className="product-detail-info">
          <h1 className="product-detail-title">{location.state.name}</h1>
          <h2 className="product-detail-price">
            Giá: {location.state.price}VNĐ
          </h2>
          <p className="product-detail-description">
            Skin Perfecting 2% BHA Liquid Exfoliant là sản phẩm loại bỏ tế bào
            chết hóa học có công thức dịu nhẹ, không chứa chất làm bào mòn da,
            dễ dàng thẩm thấu và không làm bít tắc lỗ chân lông.
          </p>
          <div className="product-detail-quantity">
            <p>Chọn số lượng:</p>
            <div className="btn-quantity">
              <button className="btn-quantity-reduce">-</button>
              <input className="quantity-input" type="text" defaultValue={1} />
              <button className="btn-quantity-add">+</button>
            </div>
          </div>
          <div className="product-detail-buttons">
            <button className="btn-add-product_detail">
              Thêm vào giỏ hàng
            </button>
            <button className="product_detail-btn-buynow">Mua ngay</button>
          </div>
        </div>
      </div>
    </div>
  );
}
