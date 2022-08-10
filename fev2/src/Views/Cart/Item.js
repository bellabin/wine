import React, { Component } from "react";
import { GetProductById, GetListProduct } from "../../services/Product";
import { removeCartItemToLocalStorage } from "../../helper/addToCart";
import { GetCtPromoById } from "../../services/Promo";
import { Button } from "@mui/material";
import { toDecimal } from "../../helper/convertPrice";
import {
  checkKm,
  convertKm,
  convertPrice,
  fixedPrice,
  checkPrice,
} from "../../helper/convertPrice";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      product: {},
      promos: [],
      currentPromo: 0,
      price: 0,
      promoPrice: 0,
      curQuantity: 0,

    };
  }

  componentDidMount() {
    GetProductById(this.props.data.productId)
      .then((res) => {
        this.setState({
          product: res.data,
          price: checkPrice(res.data.changeprices),
          promoPrice:
            checkPrice(res.data.changeprices) *
            toDecimal(checkKm(res.data.ct_khuyenmais)),
        });
      })
      .catch((err) => console.log(err));
      
    this.setState({curQuantity: this.props.data.quantity})
  }

  setCurrentPromo = (promos) => {
    if (promos.length() > 0) {
      promos.map((cur) => {
        if (toDecimal(cur.PHANTRAMGIAM) > this.state.currentPromo) {
          this.setState({ currentPromo: toDecimal(cur.PHANTRAMGIAM) });
        }
      });
    } else {
      this.setState({ currentPromo: 0 });
    }
  };

  removeFromCart = (productId) => {
    removeCartItemToLocalStorage(productId);
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.props.removeItem(this.props.data.productId)
    this.removeFromCart(this.props.data.productId);
  };

  handleClickMinus = () => {
    if (this.state.curQuantity > 1) {
      this.adjCart(-1)
      this.setState((prev => ({
        curQuantity: prev.curQuantity - 1
      })))
      this.setState((prev => ({
        price: prev.price
      })))
      this.props.totalAmount()
    }
  };

  handleClickPlus = () => {
    this.adjCart(1)
    this.setState((prev => ({
      curQuantity: prev.curQuantity + 1
    })))
    this.props.totalAmount()
  };

  adjCart = (i) => {
    let carts = JSON.parse(sessionStorage.getItem("carts")) || [];

    const index = carts.findIndex((i) => i.productId == this.state.product.MADONG);

    if (index >= 0) {
      carts[index].quantity = this.state.curQuantity + i
    } 

    sessionStorage.setItem("carts", JSON.stringify(carts));
  };

  render() {
    return (
      <tr>
        <th>{this.state.product.TENDONG}</th>
        <th>{(this.state.price - this.state.promoPrice).toFixed(2)} $</th>
        <div>
          <button className="btn-minus" onClick={ this.handleClickMinus}>
            <i className="fa fa-minus"></i>
          </button>
          <input type="text" value={this.state.curQuantity} />
          <button className="btn-plus" onClick={ this.handleClickPlus}>
            <i className="fa fa-plus"></i>
          </button>
        </div>
        <th>
          {(
            (this.state.price - this.state.promoPrice) *
            this.state.curQuantity
          ).toFixed(2)}{" "}
          $
        </th>
        <th>
          <Button value="fas fa-trash-alt" onClick={this.onSubmit}>
            Xoá
          </Button>
        </th>
      </tr>
    );
  }
}
