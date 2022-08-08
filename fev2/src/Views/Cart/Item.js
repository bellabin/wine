import React, { Component } from "react";
import { GetProductById, GetListProduct } from "../../services/Product";
import { removeCartItemToLocalStorage } from "../../helper/addToCart";
import { GetCtPromoById } from "../../services/Promo";
import { Button } from "@mui/material";
import { toDecimal } from "../../helper/convertPrice";
import {checkKm, convertKm, convertPrice, fixedPrice, checkPrice} from "../../helper/convertPrice";


export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      product: {},
      promos: [],
      currentPromo:0,
      price:0,
      promoPrice:0,
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
      
        this.setState({product: res.data, 
        price: checkPrice(res.data.changeprices),
        promoPrice: checkPrice(res.data.changeprices) * toDecimal(checkKm(res.data.ct_khuyenmais))
      })
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
        <th>{this.state.product.TENDONG}</th>
        <th>{(this.state.price - this.state.promoPrice).toFixed(2)} $</th>
        <th>{this.props.data.quantity}</th>
        <th>{((this.state.price - this.state.promoPrice) * this.props.data.quantity).toFixed(2)} $</th>
        <th><i className="fas fa-trash-alt"  onClick={() => this.onSubmit} ></i></th>
      </tr>
    );
  }
}
