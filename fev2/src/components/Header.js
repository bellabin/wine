import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { KeyNavigate } from '../helper/KeyNavigate';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <a href="">
                  <img src="/img/logoReport.PNG" alt="" />
                </a>
              </div>

              <div className="col-md-9">
                <nav>
                  <ul>
                    <li>
                      <Link to={'/'}>Trang chủ</Link>
                    </li>
                    <li>
                      <Link to={KeyNavigate.ProductCus}>Sản phẩm</Link>
                    </li>
                    <li>
                      <Link to={KeyNavigate.Cart}>Giỏ hàng</Link>
                    </li>
                    <li>
                      <Link to={KeyNavigate.Account}>Tài khoản</Link>
                    </li>

                    <li className="sign-in">
                      <Link to={KeyNavigate.Login}>Sign in</Link>
                    </li>
                    <li>
                      <Link to={KeyNavigate.LoginAdmin}>Admin</Link>
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
                  <input type="text" placeholder="Search" />
                  <button>
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
              <div className="col-md-3">
                <div className="user">
                  <a href="/wishlist" className="btn wishlist">
                    <i className="fa fa-heart"></i>
                    <span>(0)</span>
                  </a>
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
