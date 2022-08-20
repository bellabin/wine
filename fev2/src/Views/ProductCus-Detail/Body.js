import React, { Component } from "react";
import { Link } from "react-router-dom";
import { KeyNavigate } from "../../helper/KeyNavigate";
import { GetProductById } from "../../services/Product";
import { addCartItemToLocalStorage2, getListCartItemsFromLocalStorage } from "../../helper/addToCart";
import {checkKm, convertKm, convertPrice, fixedPrice, checkPrice, convertGIA, checkRating} from "../../helper/convertPrice";
import { getQuantity } from "../../services/Product";

export default class BodyProductDetail extends Component {
  constructor (props) {
    super(props)
    this.state={
      product: {},
      quantity: 1,
      oldPrice:0,
      newPrice:0,
      rating:0,
      error:'',
    }
  }
  
  componentDidMount(){
    //console.log('body',this.props.params)
    GetProductById(this.props.params.id).then(res => {
      //console.log(res.data)
      this.setState({product: res.data, 
        oldPrice: convertPrice(
          checkPrice(res.data.changeprices),
          convertKm(0)),
        newPrice: convertPrice(
          checkPrice(res.data.changeprices),
          convertKm(res.data.ct_khuyenmais)/100 || 0),
        rating: checkRating(res.data.reviews),
        })})
  }

  addToCart = (productId, price, quantity) => {
    addCartItemToLocalStorage2(productId, price, quantity)
  };

  handleClick = async () => {
    let carts = JSON.parse(getListCartItemsFromLocalStorage()) || [];
    let quantityProductInCart = 0
    carts.map(cur => {
      if(cur.productId == this.state.product.MADONG){
        quantityProductInCart = cur.quantity
      }
    })

    //slt
    let slt = await getQuantity(this.state.product.MADONG).then(res =>  (res.data[0].soluongton))

    if(slt < (this.state.quantity + quantityProductInCart)){
      //console.log('vuot qua so luong')
      this.setState({error: 'Số lượng hàng còn lại không đủ'})
      
      
    }
    else this.addToCart(this.state.product.MADONG, this.state.product.GIA, this.state.quantity)
  }

  handleClickMinus = () => {
    if (this.state.quantity > 1) {
      this.setState({quantity: this.state.quantity - 1})
    }
  }

  handleClickPlus = () => {
    this.setState({quantity: this.state.quantity + 1})
  }

  

  render() {
    return (
      <div>
      {/* <h2>{this.props.match.params.id}</h2> */}
    {/* <!-- Breadcrumb Start --> */}
    <div className="breadcrumb-wrap">
      <div className="container-fluid">
        <ul className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item"><a href="/san-pham">Sản phẩm</a></li>
          {/* <li className="breadcrumb-item active"><%=breadcrumb%></li> */}
        </ul>
      </div>
    </div>
    {/* <!-- Breadcrumb End --> */}

    {/* <!-- Product Detail Start --> */}
    <div className="product-detail">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div className="product-detail-top">
              <div id="chi-tiet-san-pham" className="row align-items-center">
                <div className="col-md-5">
                  <div className="product-slider-single normal-slider">
                    <img src={"../../../".concat(this.state.product.HINHANH && this.state.product.HINHANH)} width={"100%"} height={"auto"}></img>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="product-content">
                    <div className="title">
                      <h2 id="nameProduct">{this.state.product.TENDONG}</h2>
                    </div>
                    <div className="ratting">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    
                      
                    </div>
                    <div className="price">
                      <h4 width={'50px'}>Giá: ${this.state.newPrice}
                          {(this.state.newPrice !== this.state.oldPrice) ? <del> ${this.state.oldPrice} </del> : null}
                      </h4>
                      <p id="priceProduct"></p>
                    </div>
                    <div className="quantity">
                      <h4 style={{fontSize:'1em'}}>Số lượng:</h4>
                      <div className="qty">
                        <button className="btn-minus" onClick={this.handleClickMinus}>
                          <i className="fa fa-minus"></i>
                        </button>
                        <input type="text" value={this.state.quantity} />
                        <button className="btn-plus" onClick={this.handleClickPlus}>
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    
                    
                    <div className="action">
                      <Link className="btn" to={KeyNavigate.Cart}><i className="fa fa-shopping-bag"></i>Mua Ngay</Link>
                      <a className="btn" onClick={e => this.handleClick()}>
                        <i className="fa fa-shopping-cart"></i>
                        Thêm vào giỏ
                      </a>
                    </div>
                    {this.state.error ? <p style={{ color: "red" }}>{this.state.error}</p> : null}
                  </div>
                </div>
              </div>
            </div>

            <div className="row product-detail-bottom">
              <div className="col-lg-12">
                <ul className="nav nav-pills nav-justified">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="pill"
                      href="#description"
                      >Mô tả</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#specification"
                      >Chi tiết</a>
                  </li>
                  
                </ul>

                <div className="tab-content">
                  <div id="description" className="container tab-pane active">
                    <h4>Mô tả sản phẩm</h4>
                    <p id="desProduct">{this.state.product.MOTA}</p>
                  </div>
                  <div id="specification" className="container tab-pane fade">
                    <h4>Chi tiết sản phẩm</h4>
                    <ul>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                  </div>
                  <div id="reviews" className="container tab-pane fade">
                    
                    <form
                      action="/san-pham/comment/createcomment"
                      method="post"
                    >
                      <div className="reviews-submit">
                        <div className="field">
                          <h4>Viết đánh giá của bạn:</h4>
                          <div className="control">
                            <div className="rating">
                              <input
                                type="radio"
                                name="star"
                                id="star1"
                                value="5"
                              /><label for="star1"> </label>
                              <input
                                type="radio"
                                name="star"
                                id="star2"
                                value="4"
                              /><label for="star2"> </label>
                              <input
                                type="radio"
                                name="star"
                                id="star3"
                                value="3"
                              /><label for="star3"> </label>
                              <input
                                type="radio"
                                name="star"
                                id="star4"
                                value="2"
                              /><label for="star4"> </label>
                              <input
                                type="radio"
                                name="star"
                                id="star5"
                                value="1"
                              /><label for="star5"> </label>
                            </div>
                          </div>
                        </div>

                        <div className="row form clearfix">
                          <div className="col-sm-6">
                            <input name="ten" type="text" placeholder="Tên" />
                          </div>
                          <div className="col-sm-6">
                            <input
                              name="email"
                              type="email"
                              placeholder="Email"
                            />
                          </div>
                          <div className="col-sm-12">
                            <textarea
                              name="content"
                              placeholder="Đánh giá..."
                            ></textarea>
                          </div>
                          <input
                            type="hidden"
                            name="idProduct"
                            value="<%=itemPro.MADONG%>"
                          />
                          <input
                            type="hidden"
                            name="nameProduct"
                            value="<%=itemPro.TENDONG%>"
                          />
                          <div className="col-sm-12">
                            <button>Gửi</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="product">
              <div className="section-header">
                <h1>Nón tương tự</h1>
              </div>

              <div
                className="row align-items-center product-slider product-slider-3"
              >
                
              </div>
            </div>
          </div>

          {/* <!-- Side Bar Start --> */}
          <div className="col-lg-4 sidebar">
            <div className="sidebar-widget category">
              <h2 className="title">Danh mục</h2>
              <nav className="navbar bg-light">
                <ul className="navbar-nav">
                  
                </ul>
              </nav>
            </div>

            <div className="sidebar-widget widget-slider">
              <h3 style={{textAlign: 'center', color: '#ff6f61'}}>RƯỢU NỔI BẬT</h3>
              <div className="sidebar-slider normal-slider">
                
              </div>
            </div>

            <div className="sidebar-widget brands">
              <h2 className="title">Thương hiệu</h2>
              <ul>
                
              </ul>
            </div>

            
          {/* <!-- Side Bar End --> */}
        </div>
      </div>
    </div>
    {/* <!-- Product Detail End --> */}

    {/* <!-- Brand Start --> */}
    <div className="brand">
      <div className="container-fluid">
        <div className="brand-slider">
          <div className="brand-item"><img src="../img/brand-1.png" alt="" /></div>
          <div className="brand-item"><img src="../img/brand-2.png" alt="" /></div>
          <div className="brand-item"><img src="../img/brand-3.png" alt="" /></div>
          <div className="brand-item"><img src="../img/brand-4.png" alt="" /></div>
          <div className="brand-item"><img src="../img/brand-5.png" alt="" /></div>
          <div className="brand-item"><img src="../img/brand-6.png" alt="" /></div>
        </div>
      </div>
    </div>
    {/* <!-- Brand End --> */}

    

    </div>
    </div>
    );
  }
}
