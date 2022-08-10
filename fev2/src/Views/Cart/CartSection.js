import React, { Component } from "react";
import Item from "./Item";
import { getListCartItemsFromLocalStorage } from "../../helper/addToCart";
import { GetProductById, GetListProduct } from "../../services/Product";

import { Box, Button } from "@mui/material";
import { createPhieuDat } from "../../services/Phieudat";
import * as moment from "moment";
import {
  checkKm,
  convertKm,
  convertPrice,
  fixedPrice,
  checkPrice,
  toDecimal,
} from "../../helper/convertPrice";
export default class CartSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: [],
      total: 0,
    };

    this.removeItem = this.removeItem.bind(this);
    this.totalAmount = this.totalAmount.bind(this);
  }

  componentDidMount() {
    const carts = JSON.parse(getListCartItemsFromLocalStorage());
    this.setState({ carts });
    let totalAmountTemp = 0;
    carts.map((cur) => {
      GetProductById(cur.productId)
        .then((res) => {
          let price = checkPrice(res.data.changeprices)
          let promoPrice = checkPrice(res.data.changeprices) * toDecimal(checkKm(res.data.ct_khuyenmais))
          let totalTemp = price - promoPrice
          totalAmountTemp += totalTemp * cur.quantity
          this.setState({total: totalAmountTemp.toFixed(2)}) 
        })
        .catch((err) => console.log(err));
    });

  }

  totalAmount() {
    
    const carts = JSON.parse(getListCartItemsFromLocalStorage());
    let totalAmountTemp = 0;
    carts.map((cur) => {
      GetProductById(cur.productId)
        .then((res) => {
          let price = checkPrice(res.data.changeprices)
          let promoPrice = checkPrice(res.data.changeprices) * toDecimal(checkKm(res.data.ct_khuyenmais))
          let totalTemp = price - promoPrice
          totalAmountTemp += totalTemp * cur.quantity
          this.setState({total: totalAmountTemp.toFixed(2)}) 
        })
        .catch((err) => console.log(err));
    })
    
  }

  removeItem(productId) {
    const carts = JSON.parse(getListCartItemsFromLocalStorage());

    const newCarts = carts.filter((product) => product.productId != productId);
    this.setState({ carts: newCarts });

    //this.setState({total: })
  }

  async checkout() {
    console.log(moment(new Date()).format("YYYY-MM-DD"));
    //goi api de tao phieu dat = tat ca data trong gio hang
    //const data = await createPhieuDat()
  }

  render() {
    return (
      <div className="cart-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="cart-page-inner">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    {/* <div className="clear-cart">
                      <button className="ClearCartBtn" onclick="clearCart()">
                        Clear Cart
                      </button>
                    </div> */}
                    <thead className="thead-dark">
                      <tr>
                        <th>Sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody className="align-middle" id="cart">
                      {this.state.carts &&
                        this.state.carts.map((item, index) => {
                          return (
                            <Item
                              id={item.productId}
                              data={item}
                              removeItem={this.removeItem}
                              totalAmount={this.totalAmount}
                            />
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <table className="table table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th>
                        Tổng tiền: {this.state.total}${"   "}
                      </th>
                    </tr>
                  </thead>
                </table>
                <div class="container">
                  <div class="center">
                    <button
                      type="button"
                      class="btn btn-primary p-4"
                      onClick={this.checkout}
                    >
                      Thanh toán
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
