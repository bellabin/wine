import React, { Component } from "react";
import { GetProductById, GetListProduct } from "../../services/Product";
import { removeCartItemToLocalStorage } from "../../helper/addToCart";
import { GetCtPromoById } from "../../services/Promo";
import { Button } from "@mui/material";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }

  

  componentDidMount() {
    GetListProduct()
        .then(res => {
            this.setState({ products: res.data })
        })
        .catch(err => console.log(err))
    console.log('id: ', this.props.data)

  }


  removeFromCart = (productId) => {
    removeCartItemToLocalStorage(productId)
  }

  onSubmit = async (event) => {
    event.preventDefault()
    this.removeFromCart (this.props.data.productId)
  }

  

  render() {
    return (
      <tr>
        {
          this.state.products && this.state.products.map(product => {
            if(product.MADONG == this.props.data.productId){
              return product.TENDONG
            }
          })
        }
        <th>{this.props.data.price} $</th>
        <th>{this.props.data.quantity}</th>
        <th>{(this.props.data.price - this.props.data.price * this.props.data.PHANTRAMGIAM) * this.props.data.quantity} $</th>
        <th><i className="fas fa-trash-alt"  onClick={() => this.onSubmit} ></i></th>
      </tr>
    );
  }
}
