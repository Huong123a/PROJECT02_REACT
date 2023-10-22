export default function Cart() {
  return (
    <div className="modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <table className="table table-image">
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">Sản phẩm</th>
                <th scope="col">Giá</th>
                <th scope="col">SL</th>
                <th scope="col">TC</th>
                <th scope="col">Xóa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-25">
                  <img
                    src="img2.jpeg"
                    className="img-fluid img-thumbnail"
                    alt="Sheep"
                  />
                </td>
                <td>Tẩy tế bào chết Skin Perfecting</td>
                <td>750.000VNĐ</td>
                <td className="qty">
                  <input
                    type="text"
                    className="form-control"
                    id="input1"
                    defaultValue={2}
                  />
                </td>
                <td>750.000VNĐ</td>
                <td>
                  <a href="#" className="btn btn-danger btn-sm">
                    <i className="fa fa-times" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="w-25">
                  <img
                    src="./img3.jpg"
                    className="img-fluid img-thumbnail"
                    alt="Sheep"
                  />
                </td>
                <td>Tẩy tế bào chết Skin Perfecting</td>
                <td>750.000VNĐ</td>
                <td className="qty">
                  <input
                    type="text"
                    className="form-control"
                    id="input1"
                    defaultValue={2}
                  />
                </td>
                <td>750.000VNĐ</td>
                <td>
                  <a href="#" className="btn btn-danger btn-sm">
                    <i className="fa fa-times" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="w-25">
                  <img
                    src="./img1.webp"
                    className="img-fluid img-thumbnail"
                    alt="Sheep"
                  />
                </td>
                <td>Tẩy tế bào chết Skin Perfecting</td>
                <td>750.000VNĐ</td>
                <td className="qty">
                  <input
                    type="text"
                    className="form-control"
                    id="input1"
                    defaultValue={2}
                  />
                </td>
                <td>750.000VNĐ</td>
                <td>
                  <a href="#" className="btn btn-danger btn-sm">
                    <i className="fa fa-times" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="payment-button-open">
          <p id="text-center">Money</p>
          <button type="button" className="btn btn-primary mx-2">
            {" "}
            Tổng cộng
          </button>
          <button
            type="button"
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#paymentModal"
          >
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
}
