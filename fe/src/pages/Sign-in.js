import React from 'react'

export default function SignInPage() {
  return (
    <div>
        <div className="top-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <i className="fa fa-envelope"></i> HoangKhang1999ag@gmail.com
          </div>
          <div className="col-sm-6">
            <i className="fa fa-phone-alt"></i> +0338744192
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
            </div>
            <div className="navbar-nav ml-auto"></div>
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
          <li className="breadcrumb-item active">Đăng nhập</li>
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
              <form action="/users/dang-nhap" method="post">
                <div className="row">
                  <legend className="text-center">Đăng nhập</legend>
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
              <a href="/users/dang-ky">Chưa có tài khoản? Đăng ký</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Login End --> */}

    {/* <!-- Footer Start --> */}
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h2>Liên Hệ</h2>
              <div className="contact-info">
                <p><i className="fa fa-map-marker"></i>Thành phố Hồ Chí Minh</p>
                <p><i className="fa fa-envelope"></i>HoangKhang1999ag@gmail.com</p>
                <p><i className="fa fa-phone"></i>+0338744192</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h2>Theo Dõi Tôi</h2>
              <div className="contact-info">
                <div className="social">
                  <a href=""><i className="fab fa-twitter"></i></a>
                  <a href="https://www.facebook.com/ybx1802"
                    ><i className="fab fa-facebook-f"></i></a>
                  <a href="https://www.linkedin.com/in/huy-tran-57777b202/"
                    ><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://www.instagram.com/huy_jr18"
                    ><i className="fab fa-instagram"></i></a>
                  <a
                    href="https://www.youtube.com/channel/UCctcteJFmH4Wxc8npHW9Cog"
                    ><i className="fab fa-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h2>Thông Tin Cửa Hàng</h2>
              <ul>
                <li><a href="#">Giới thiệu</a></li>
                <li><a href="#">Chính sách bảo mật</a></li>
                <li><a href="#">Hình thức vận chuyển</a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h2>Thông Tin Mua Hàng</h2>
              <ul>
                <li><a href="#">Chính sách thanh toán</a></li>
                <li><a href="#">Chính sách vận chuyển</a></li>
                <li><a href="#">Chính sách hoàn trả</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row payment align-items-center">
          <div className="col-md-6">
            <div className="payment-method">
              <h2>Nhận thanh toán bằng:</h2>
              <img src="../img/payment-method.png" alt="Payment Method" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="payment-security">
              <h2>Chứng chỉ bảo mật:</h2>
              <img src="../img/godaddy.svg" alt="Payment Security" />
              <img src="../img/norton.svg" alt="Payment Security" />
              <img src="../img/ssl.svg" alt="Payment Security" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Footer End --> */}

    {/* <!-- Footer Bottom Start --> */}
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-6 copyright">
            <p>
              Copyright &copy;
              <a href="https:www.facebook.com/ybx1802">Ruou Ngon Store</a>. All
              Rights Reserved
            </p>
          </div>

          <div className="col-md-6 template-by">
            <p>Developed By <a href="https://htmlcodex.com">Khang Nguyen</a></p>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Footer Bottom End --> */}

    {/* <!-- Back to Top --> */}
    <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>

    </div>
  )
}
