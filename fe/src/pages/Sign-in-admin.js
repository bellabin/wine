import React from 'react'

export default function SignInAdminPage() {
  return (
    <div>
        <div class="top-bar">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">
            <i class="fa fa-envelope"></i>HoangKhang1999ag@gmail.com
          </div>
          <div class="col-sm-6">
            <i class="fa fa-phone-alt"></i>+0338744192
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Top bar End --> */}

    {/* <!-- Nav Bar Start --> */}
    <div class="nav">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
          <a href="#" class="navbar-brand">MENU</a>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div class="navbar-nav mr-auto">
              <a href="/" class="nav-item nav-link">Trang Chủ</a>
            <div class="navbar-nav ml-auto">
            </div>
          </div>
        </nav>
      </div>
    </div>
    {/* <!-- Nav Bar End --> */}

    

    {/* <!-- Breadcrumb Start --> */}
    <div class="breadcrumb-wrap">
      <div class="container-fluid">
        <ul class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Trang chủ</a></li>
          <li class="breadcrumb-item active">Đăng nhập trang quản trị</li>
        </ul>
      </div>
    </div>
    {/* <!-- Breadcrumb End --> */}

    {/* <!-- Login Start --> */}
    <div class="login">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 mx-auto">
            <div class="login-form">
              <form action="/users/dang-nhap-admin" method="post">
                <div class="row">
                  <legend class="text-center">Đăng nhập Admin</legend>
                  <div class="col-md-6">
                    <label for="username">Username</label>
                    <input
                      id="username"
                      name="username"
                      class="form-control"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="password">Mật khẩu</label>
                    <input
                      id="password"
                      name="password"
                      class="form-control"
                      type="password"
                      placeholder="Mật khẩu"
                    />
                  </div>
                  <div class="col-md-12">
                    <div class="custom-control custom-checkbox">
                      <!-- <input type="checkbox" class="custom-control-input" id="newaccount">
                                            <label class="custom-control-label" for="newaccount">Lưu đăng nhập</label> -->
                      <a href="/users/quen-mat-khau">Quên mật khẩu?</a>
                    </div>
                  </div>
                  <div class="col-md-12 text-center">
                    <button class="btn">Đăng nhập</button>
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
    <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

    </div>
  )
}
