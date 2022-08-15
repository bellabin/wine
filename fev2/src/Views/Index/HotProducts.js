import React, { Component } from "react";
import { GetListHotProducts, GetProductById } from "../../services/Product";
import CustomeSlider from "../../components/Slider";

export default class HotProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    let listTemp = []
    GetListHotProducts()
      .then((res) => {
        res.data.map(cur => {
          GetProductById(cur.MADONG).then(res => {
            listTemp.push(res.data)
          })
        })
      })
      .catch((err) => console.log(err));
    this.setState({products: listTemp})
  }

  render() {
    return (
      <div className="featured-product product">
        <div className="container-fluid">
          <div className="section-header">
            <h1>HÀNG HOT!!!</h1>
            {/* {console.log('p',this.state.products)} */}
            <CustomeSlider data={this.state.products && this.state.products} />
          </div>
          <div id="non-noi-bat"></div>
        </div>
      </div>
    );
  }
}
