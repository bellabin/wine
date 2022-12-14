import React from 'react'

export default function LoginPage() {
  console.log('Login Page')
  return (
    <div>
      <div class="top-bar">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6">
              <i class="fa fa-envelope"></i> HoangKhang1999ag@gmail.com
            </div>
            <div class="col-sm-6">
              <i class="fa fa-phone-alt"></i> +0338744192
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
              </div>
              <div class="navbar-nav ml-auto"></div>
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
            <li class="breadcrumb-item active">Đăng nhập</li>
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
                <form action="/users/dang-nhap" method="post">
                  <div class="row">
                    <legend class="text-center">Đăng nhập</legend>
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
                        {/* <!-- <input type="checkbox" class="custom-control-input" id="newaccount">
                                            <label class="custom-control-label" for="newaccount">Lưu đăng nhập</label> --> */}
                        <a href="/users/quen-mat-khau">Quên mật khẩu?</a>
                      </div>
                    </div>
                    <div class="col-md-12 text-center">
                      <button class="btn">Đăng nhập</button>
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
      <div class="footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer-widget">
                <h2>Liên Hệ</h2>
                <div class="contact-info">
                  <p><i class="fa fa-map-marker"></i>Thành phố Hồ Chí Minh</p>
                  <p><i class="fa fa-envelope"></i>HoangKhang1999ag@gmail.com</p>
                  <p><i class="fa fa-phone"></i>+0338744192</p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="footer-widget">
                <h2>Theo Dõi Tôi</h2>
                <div class="contact-info">
                  <div class="social">
                    <a href=""><i class="fab fa-twitter"></i></a>
                    <a href="https://www.facebook.com/ybx1802"
                    ><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.linkedin.com/in/huy-tran-57777b202/"
                    ><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/huy_jr18"
                    ><i class="fab fa-instagram"></i></a>
                    <a
                      href="https://www.youtube.com/channel/UCctcteJFmH4Wxc8npHW9Cog"
                    ><i class="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="footer-widget">
                <h2>Thông Tin Cửa Hàng</h2>
                <ul>
                  <li><a href="#">Giới thiệu</a></li>
                  <li><a href="#">Chính sách bảo mật</a></li>
                  <li><a href="#">Hình thức vận chuyển</a></li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="footer-widget">
                <h2>Thông Tin Mua Hàng</h2>
                <ul>
                  <li><a href="#">Chính sách thanh toán</a></li>
                  <li><a href="#">Chính sách vận chuyển</a></li>
                  <li><a href="#">Chính sách hoàn trả</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="row payment align-items-center">
            <div class="col-md-6">
              <div class="payment-method">
                <h2>Nhận thanh toán bằng:</h2>
                <img src="../img/payment-method.png" alt="Payment Method" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="payment-security">
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
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-6 copyright">
              <p>
                Copyright &copy;
                <a href="https:www.facebook.com/ybx1802">Ruou Ngon Store</a>. All
                Rights Reserved
              </p>
            </div>

            <div class="col-md-6 template-by">
              <p>Developed By <a href="https://htmlcodex.com">Khang Nguyen</a></p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer Bottom End --> */}

      {/* <!-- Back to Top --> */}
      <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

    </div>
  )
}
