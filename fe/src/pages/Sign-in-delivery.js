import React from 'react'

export default function SignInDeliveryPage() {
  return (
    <div>
        <div className="top-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <i className="fa fa-envelope"></i>HoangKhang1999ag@gmail.com
          </div>
          <div className="col-sm-6">
            <i className="fa fa-phone-alt"></i>+0338744192
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Top bar End --> */}

    {/* <!-- Nav Bar Start --> */}
    <div className="nav">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <a href="#" className="navbar-brand">MENU</a>
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
              <a href="/" className="nav-item nav-link">Trang Chủ</a>
            <div className="navbar-nav ml-auto">
            </div>
          </div>
          </div>
        </nav>
      </div>
    </div>
    {/* <!-- Nav Bar End --> */}

    

    {/* <!-- Breadcrumb Start --> */}
    <div className="breadcrumb-wrap">
      <div className="container-fluid">
        <ul className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
          <li className="breadcrumb-item active">Đăng nhập giao hàng</li>
        </ul>
      </div>
    </div>
    {/* <!-- Breadcrumb End --> */}

    {/* <!-- Login Start --> */}
    <div className="login">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="login-form">
              <form action="/users/dang-nhap-giao-hang" method="post">
                <div className="row">
                  <legend className="text-center">Đăng nhập giao hàng</legend>
                  <div className="col-md-6">
                    <label for="username">Username</label>
                    <input
                      id="username"
                      name="username"
                      className="form-control"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="password">Mật khẩu</label>
                    <input
                      id="password"
                      name="password"
                      className="form-control"
                      type="password"
                      placeholder="Mật khẩu"
                    />
                  </div>
                  <div className="col-md-12">
                    <div className="custom-control custom-checkbox">
                      {/* <!-- <input type="checkbox" className="custom-control-input" id="newaccount">
                                            <label className="custom-control-label" for="newaccount">Lưu đăng nhập</label> --> */}
                      <a href="/users/quen-mat-khau">Quên mật khẩu?</a>
                    </div>
                  </div>
                  <div className="col-md-12 text-center">
                    <button className="btn">Đăng nhập</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Login End --> */}

    {/* <!-- Back to Top --> */}
    <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>

    </div>
  )
}
