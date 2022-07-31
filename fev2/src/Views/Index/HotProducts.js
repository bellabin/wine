import React, { Component } from "react";
import { GetListHotProducts } from "../../services/Product"
import CustomeSlider from "../../components/Slider";

export default class HotProducts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        GetListHotProducts()
            .then(res => {
              const hotproduct = []
              res.data.forEach(item => {
                console.log('item:',item)
                const { product } = item
                hotproduct.push({item})
              })
              console.log('hot:', hotproduct)
              this.setState({ products: hotproduct })
            })
            .catch(err => console.log(err))

        // GetListPromo()
        //     .then((res) => {
        //       const promo = []
        //       res.data.forEach(item => {
        //           const { ct_khuyenmais } = item
                  
        //           if (ct_khuyenmais && ct_khuyenmais.length) {
        //               ct_khuyenmais.forEach(km => {
        //                   ///if(>=50)
        //                   const { wineline } = km
        //                   promo.push({...wineline, PHANTRAMGIAM: km.PHANTRAMGIAM})
        //               })
        //           }
        //       })
      
        //       this.setState({ promos: promo });
        //     })
        //     .catch((err) => console.log(err));
    }

  render() {
    return (
      <div className="featured-product product">
        <div className="container-fluid">
          <div className="section-header">
            <h1>HÀNG HOT!!!</h1>
            <CustomeSlider data={this.state.products && this.state.products}/>

            {/* TODO show all hang hot here  */}
          </div>
          <div id="non-noi-bat"></div>
        </div>
      </div>
    );
  }
}
