import React, { Component } from "react";
import Item from "./Item"
import { getListCartItemsFromLocalStorage } from "../../helper/addToCart";
import { Box, Button } from "@mui/material";

export default class CartSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carts: [],
            total:0,
        }
     }

     componentDidMount() {
        const carts = JSON.parse(getListCartItemsFromLocalStorage())
        //console.log("carts", carts)
        this.setState({ carts })
     }

    totalAmount(){
      let amount = 0
      this.state.carts && this.state.carts.map((prod) => {
        amount += prod.price*prod.quantity
    
      })
      return amount.toFixed(2)
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
                        {
                            this.state.carts && this.state.carts.map((item, index) => {
                                //console.log("item", {item})
                                {/* let tong = 0
                                tong += item.price*item.quantity
                                this.setState({total: tong}) */}
                                return <Item id={index} data={item}/>
                            })
                        }
                    </tbody>
                  </table>
                  
                  
                </div>
              </div>
              <div>
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th>Tổng tiền: {this.totalAmount()}${'   '}
                        </th>
                      </tr>
                    </thead>
                  </table>
                  <div class="container">
                    <div class="center">
                      <button type="button" class="btn btn-primary p-4">Thanh toán</button>    
                  </div>
                </div>
                </div>
            </div>
            
            
            {/* <div className="col-lg-4">
              <div className="cart-page-inner">
                <div className="row">
                  <div className="col-md-12">
                    <div className="coupon">
                      <input type="text" placeholder="Mã giảm giá" />
                      <button>Áp dụng</button>
                    </div>
                  </div>
                  <div className="col-md-12 cart-sum" id="sum_cart">
                    <!-- <div className="cart-summary">
                  <div className="cart-content">
                    <h1>Thống kê giỏ hàng</h1>
                    <p>Tổng tiền sản phẩm<span>$99</span></p>
                    <p>Phí ship<span>$1</span></p>
                    <h2>Tổng cộng<span>$100</span></h2>
                  </div>
                  <div className="cart-btn">
                    <button>Thanh Toán</button>
                  </div>
                </div> -->
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          
        </div>
      </div>
    );
  }
}
