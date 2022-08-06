import React, { Component } from "react";
import { GetListTopPromo } from "../../services/Product";
import CustomeSlider from "../../components/Slider";

export default class TopPromo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promos: [],
    };
  }

  componentDidMount() {
    GetListTopPromo()
      .then((res) => {
        // res.data.forEach(item => {
        //     const { ct_khuyenmais } = item
            
        //     if (ct_khuyenmais && ct_khuyenmais.length) {
        //         ct_khuyenmais.forEach(km => {
        //             ///if(>=50)
        //             const { wineline } = km
        //             promo.push({...wineline, PHANTRAMGIAM: km.PHANTRAMGIAM})
        //         })
        //     }
        // })

        this.setState({ promos: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="recent-product product">
        <div className="container-fluid">
          <div className="section-header">
            <h1>KHUYẾN MÃI KHỦNG!!!</h1>
            <CustomeSlider data={this.state.promos && this.state.promos}/>
          </div>
          <div id="hang-khuyen-mai" className="row align-items-center"></div>
        </div>
      </div>
    );
  }
}
