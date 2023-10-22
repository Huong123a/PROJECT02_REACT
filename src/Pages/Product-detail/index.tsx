 
export default function Product_detail(){
    return(
        <section className="product_detail-content">
  <h4>Tên sản phẩm</h4>
  <h5>Giá: 750.000VNĐ</h5>
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