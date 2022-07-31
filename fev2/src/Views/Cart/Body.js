import React, { Component } from "react";
import CartSection from "./CartSection";

export default class Body extends Component {
  render() {
    return (
      <>
        {/* <div className="nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
              <a href="#" className="navbar-brand">
                MENU
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto">
                  <a href="/" className="nav-item nav-link">
                    Trang Chủ
                  </a>
                  <a href="/san-pham" className="nav-item nav-link">
                    Sản Phẩm
                  </a>
                  <a href="/users/tai-khoan" className="nav-item nav-link">
                    Tài khoản của bạn
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div> */}
        {/* <!-- Nav Bar End --> */}

        {/* <!-- Breadcrumb Start --> */}
        <div className="breadcrumb-wrap">
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Trang chủ</a>
              </li>
              <li className="breadcrumb-item active">Giỏ hàng</li>
            </ul>
          </div>
        </div>
        {/* <!-- Breadcrumb End --> */}

        <CartSection />
      </>
    );
  }
}
