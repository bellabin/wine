import React, { Component } from "react";
import { GetProductById, GetListProduct } from "../../services/Product";
import { removeCartItemToLocalStorage } from "../../helper/addToCart";
import { GetCtPromoById } from "../../services/Promo";
import { Button } from "@mui/material";
import { toDecimal } from "../../helper/convertPrice";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      product: {},
      promos: [],
      currentPromo:0,
    }
  }

  

  componentDidMount() {
    GetListProduct()
        .then(res => {
            this.setState({ products: res.data })
        })
        .catch(err => console.log(err))
    //console.log('id: ', this.props.data)

    GetProductById(this.props.data.productId).then(res => {
      this.setState({product: res.data, promos: res.data.ct_khuyenmais})
    })
    .catch(err => console.log(err))

    


  }

  

  setCurrentPromo = (promos) =>{
    if(promos.length() > 0){
      promos.map(cur => {
        if(toDecimal(cur.PHANTRAMGIAM) > this.state.currentPromo){
          this.setState({currentPromo: toDecimal(cur.PHANTRAMGIAM)})
        }
      })
    }
    else{
      this.setState({currentPromo: 0})
    }
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
        <th>{this.state.product.GIA} $</th>
        <th>{this.props.data.quantity}</th>
        {console.log(this.state.currentPromo)}
        <th>{(this.state.product.GIA - this.state.product.GIA * this.state.currentPromo) * this.props.data.quantity} $</th>
        <th><i className="fas fa-trash-alt"  onClick={() => this.onSubmit} ></i></th>
      </tr>
    );
  }
}
