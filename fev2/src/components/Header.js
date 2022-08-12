import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { KeyNavigate } from "../helper/KeyNavigate";
import { GetListProduct, GetListProductByName } from "../services/Product";
import { getListCartItemsFromLocalStorage } from "../helper/addToCart";
import ProductCus from "../Views/ProductCus/index";
import SearchBar from "./SearchBar";
import SearchBar2 from "./SearchBar";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      itemInCart: 0,
    };
  }

  componentDidMount() {
    GetListProduct()
      .then((res) => {
        this.setState({ products: res.data });
        // console.log('product header',this.state.products);
      })
      .catch((err) => console.log(err));
    const cart = JSON.parse(getListCartItemsFromLocalStorage());

    let count = 0;
    cart.map((cur) => {
      count++;
    });
    this.setState({ itemInCart: count });
  }

  

  render() {
    return (
      <>
        <div className="header" style={{ backgroundColor: "black" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <Link to={"/"}>
                  <img src="/img/logoReport.PNG" alt="" />
                </Link>
              </div>

              <div className="col-md-7">
                <nav>
                  <ul style={{ backgroundColor: "#dddddd" }}>
                    <li style={{ display: "inline", float: "left" }}>
                      <Link
                        style={{
                          display: "block",
                          padding: "8px",
                          textAlign: "center",
                          padding: "14px 16px",
                          textDecoration: "none",
                        }}
                        to={"/"}
                      >
                        Trang chủ
                      </Link>
                    </li>
                    <li style={{ display: "inline", float: "left" }}>
                      <Link
                        style={{
                          display: "block",
                          padding: "8px",
                          textAlign: "center",
                          padding: "14px 16px",
                          textDecoration: "none",
                        }}
                        to={KeyNavigate.ProductCus}
                      >
                        Sản phẩm
                      </Link>
                    </li>
                    <li style={{ display: "inline", float: "left" }}>
                      <Link
                        style={{
                          display: "block",
                          padding: "8px",
                          textAlign: "center",
                          padding: "14px 16px",
                          textDecoration: "none",
                        }}
                        to={KeyNavigate.Cart}
                      >
                        Giỏ hàng
                      </Link>
                    </li>
                    <li style={{ display: "inline", float: "left" }}>
                      <Link
                        style={{
                          display: "block",
                          padding: "8px",
                          textAlign: "center",
                          padding: "14px 16px",
                          textDecoration: "none",
                        }}
                        to={KeyNavigate.Account}
                      >
                        Tài khoản
                      </Link>
                    </li>

                    <li
                      className="sign-in"
                      style={{ display: "inline", float: "left" }}
                    >
                      <Link
                        style={{
                          display: "block",
                          padding: "8px",
                          textAlign: "center",
                          padding: "14px 16px",
                          textDecoration: "none",
                        }}
                        to={KeyNavigate.Login}
                      >
                        Sign in
                      </Link>
                    </li>
                    <li style={{ display: "inline", float: "left" }}>
                      <Link
                        style={{
                          display: "block",
                          padding: "8px",
                          textAlign: "center",
                          padding: "14px 16px",
                          textDecoration: "none",
                        }}
                        to={KeyNavigate.LoginAdmin}
                      >
                        Admin
                      </Link>
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
              <div className="col-md-6" style={{ zIndex: 10 }}>
                <SearchBar
                  placeholder={"Search..."}
                  data={this.state.products}
                ></SearchBar>
              </div>
              <div className="col-md-3">
                <div className="user">
                  <Link to={KeyNavigate.Cart} className="btn cart">
                    <i className="fa fa-shopping-cart"></i>
                    <span className="cart-number">
                      ({this.state.itemInCart})
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
