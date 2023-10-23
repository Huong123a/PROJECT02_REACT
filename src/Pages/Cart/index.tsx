import axios from "axios";
import { useEffect, useState } from "react";


export interface ChildProps {
  setTotalCartProduct: any
}

export default function Cart(props: ChildProps) {

  const {setTotalCartProduct} = props
  const [productsCartsData, setProductCartsData] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  let totalAllProductPrice = 0;

  let results: Array<any> = []

  const calTotalPrice = (products: any) => {
    //let totalPriceAll = 0
    products.forEach((product: any, index: number) => {
      const priceProduct = product["price"] * (product["quantity"] !== null ? product["quantity"] : 1)
      console.log("TOTAL PRICE", totalPrice)

      totalAllProductPrice = totalAllProductPrice + priceProduct
    })
    setTotalPrice(totalAllProductPrice)
  }

  const getProductData = async () =>  {
    const response = await axios.get("http://localhost:3000/carts");
    setProductCartsData(response.data)
    setTotalCartProduct(response.data.length);
    calTotalPrice(response.data)
  }


  const deleteProductData = async (id: number) =>  {
    axios.delete(`http://localhost:3000/carts/${id}`).then(_ => {
      getProductData()
  })
  }

  useEffect(() => {
    getProductData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  productsCartsData.forEach((product, index) => {
   
    results.push(


    <tr>
                <td className="w-25">
                  <img
                    src="img2.jpeg"
                    className="img-fluid img-thumbnail"
                    alt="Sheep"
                  />
                </td>
                <td>{product["name"]}</td>
                <td>{product["price"]} VNĐ</td>
                <td className="qty">
                  {/* <input
                    type="text"
                    className="form-control"
                    id="input1"
                    defaultValue={2}
                  /> */}
                  <p>
                    {product["quantity"] !== null ?  product["quantity"]: 1}
                  </p>
                </td>
                <td>{product["price"] * (product["quantity"] !== null ? product["quantity"] : 1)}VNĐ</td>
                <td>
                  <a onClick={() => deleteProductData(product["id"])} href="#" className="btn btn-danger btn-sm">
                    <i className="fa fa-times" />
                  </a>
                </td>
              </tr> 
    
    );
  });



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
             {
              productsCartsData.length > 0 ? results : null
             }
            </tbody>
          </table>
        </div>
        <div className="payment-button-open">
          <p id="text-center">{totalPrice}</p>
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
