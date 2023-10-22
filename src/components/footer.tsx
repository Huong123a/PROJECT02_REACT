export default function Footer() {
  window.addEventListener("scroll", (e) => {
   
  });

  return (
    <footer
      className="bg-secondary text-black"
      style={{ position: "sticky", top: 0, width: "100%" }}
    >
      <div className="container">
        <div className="row py-4">
          <div className="col-md-3">
            <h4>PiTi Cosmetic</h4>
            <p>Địa chỉ: 263 Nguyễn Hữu Thọ, quận Cẩm Lệ, thành phố Đà Nẵng</p>
            <p>Contact: +0900100200</p>
            <p>Email: piticosmetic@gmail.com</p>
          </div>
          <div className="col-md-3">
            <h4>Liên kết nhanh</h4>
            <ul className="list-unstyled">
              <li>
                <a href="">Trang chủ</a>
              </li>
              <li>
                <a href="">Sản phẩm</a>
              </li>
              <li>
                <a href="">Giới thiệu</a>
              </li>
              <li>
                <a href="">Liên hệ</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Chính sách</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">Chính sách bảo mật</a>
              </li>
              <li>
                <a href="#">Điều khoản và điều kiện</a>
              </li>
              <li>
                <a href="#">Chính sách vận chuyển</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Theo dõi chúng tôi</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
