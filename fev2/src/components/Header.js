import React, { Component } from "react";
import { Link, Route } from 'react-router-dom';
import { KeyNavigate } from '../helper/KeyNavigate';
import { GetListProductByName } from "../services/Product";
import ProductCus from '../Views/ProductCus/index'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  _handleKeyDown = (e, text) => {
    if (e.key === 'Enter') {
      const textValue = text.trim()
      console.log('text:', textValue);
      GetListProductByName(textValue).then(res => {
        this.setState({products: res.data})
      })
      return (
        <ProductCus data={this.state.products}></ProductCus>
      )
    }
  }

  render() {
    return (
      <>
        <div className="header" style={{backgroundColor:'black'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <a href="">
                  <img src="/img/logoReport.PNG" alt="" />
                </a>
              </div>

              <div className="col-md-7">
                
                <nav>
                  <ul style={{backgroundColor:'#dddddd'}}>
                    <li style={{display: 'inline', float: 'left'}}>
                      <Link style={{display:'block',padding:'8px', textAlign:'center',padding: '14px 16px', textDecoration: 'none'}} 
                      to={'/'}>Trang chủ</Link>
                    </li>
                    <li style={{display: 'inline', float: 'left'}}>
                    <Link style={{display:'block',padding:'8px', textAlign:'center',padding: '14px 16px', textDecoration: 'none'}} 
                      to={KeyNavigate.ProductCus}>Sản phẩm</Link>
                    </li>
                    <li style={{display: 'inline', float: 'left'}}>
                    <Link style={{display:'block',padding:'8px', textAlign:'center',padding: '14px 16px', textDecoration: 'none'}} 
                      to={KeyNavigate.Cart}>Giỏ hàng</Link>
                    </li>
                    <li style={{display: 'inline', float: 'left'}}>
                    <Link style={{display:'block',padding:'8px', textAlign:'center',padding: '14px 16px', textDecoration: 'none'}}
                      to={KeyNavigate.Account}>Tài khoản</Link>
                    </li>

                    <li className="sign-in" style={{display: 'inline', float: 'left'}}>
                    <Link style={{display:'block',padding:'8px', textAlign:'center',padding: '14px 16px', textDecoration: 'none'}} 
                      to={KeyNavigate.Login}>Sign in</Link>
                    </li>
                    <li style={{display: 'inline', float: 'left'}}>
                    <Link style={{display:'block',padding:'8px', textAlign:'center',padding: '14px 16px', textDecoration: 'none'}} 
                      to={KeyNavigate.LoginAdmin}>Admin</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-3">
                <div className="logo">
                  <a href="/"> </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="search">
                  <input type="text" placeholder="Search" onKeyDown={(e) => this._handleKeyDown(e, e.target.value)}/>
                  {/* {console.log('product:', this.state.products)} */}
                  <button>
                    {/* <i className="fa fa-search"></i> */}
                  </button>
                </div>
              </div>
              <div className="col-md-3">
                <div className="user">
                  <a href="/gio-hang" className="btn cart">
                    <i className="fa fa-shopping-cart"></i>
                    <span className="cart-number">(0)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      

      </>
    );
  }
}
