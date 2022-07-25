import React from 'react'

export default function ThanhToanPage() {
  return (
    <div>
        {/* <!-- Top bar Start --> */}
    <div className="top-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <i className="fa fa-envelope"></i>HoangKhang1999ag@gmail.com
          </div>
          <div className="col-sm-6"><i className="fa fa-phone-alt"></i>0338744192</div>
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
              <a href="/" className="nav-item nav-link active">Trang Chủ</a>
              <a href="/san-pham" className="nav-item nav-link">Sản Phẩm</a>
              {/* <!-- <a href="product-detail.html" className="nav-item nav-link">Product Detail</a> --> */}
              <a href="/gio-hang/" className="nav-item nav-link">Giỏ Hàng</a>
              <a href="/thanh-toan" className="nav-item nav-link">Thanh Toán</a>
              <a href="/users/tai-khoan" className="nav-item nav-link"
                >Tài khoản của bạn</a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  >Trang khác</a>
                <div className="dropdown-menu">
                  <a href="/wishlist" className="dropdown-item"
                    >Sản phẩm đã thích</a>
                  <a href="/lien-he" className="dropdown-item">Liên hệ</a>
                </div>
              </div>
            </div>
            <div className="navbar-nav ml-auto">
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  >Tài khoản</a>
                <div className="dropdown-menu">
                  <a href="/users/dang-nhap" className="dropdown-item">Đăng nhập</a>
                  <a href="/users/dang-ky" className="dropdown-item">Đăng ký</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    {/* <!-- Nav Bar End --> */}

    {/* <!-- Bottom Bar Start --> */}
    <div className="bottom-bar">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-3">
            <div className="logo">
              <a href="/">
                <img src="img/logo.png" alt="Logo" />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="search">
              <input type="text" placeholder="Search" />
              <button><i className="fa fa-search"></i></button>
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
                <span>(0)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Bottom Bar End --> */}

    {/* <!-- Breadcrumb Start --> */}
    <div className="breadcrumb-wrap">
      <div className="container-fluid">
        <ul className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item"><a href="/san-pham">Products</a></li>
          <li className="breadcrumb-item active">Checkout</li>
        </ul>
      </div>
    </div>
    {/* <!-- Breadcrumb End --> */}

    {/* <!-- Checkout Start --> */}
    <div className="checkout">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div className="checkout-inner">
              <div className="billing-address">
                <h2>Thông Tin Đặt Hàng</h2>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="info-1"
                    name="info"
                  />
                  <label className="custom-control-label" for="info-1"
                    >Địa chỉ mặc định</label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="info-2"
                    name="info"
                  />
                  <label className="custom-control-label" for="info-2"
                    >Địa chỉ khác</label>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <input className="form-control" type="text" placeholder="Họ" />
                  </div>
                  <div className="col-md-6">
                    <input className="form-control" type="text" placeholder="Tên" />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Số điện thoại"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Địa chỉ giao hàng"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="checkout-inner">
              <div className="checkout-summary">
                <h1>Tổng Giỏ Hàng</h1>
                <p className="sub-total">Tạm tính<span>1.000.000 đ</span></p>
                <p className="ship-cost">Phí ship<span>30.000 đ</span></p>
                <h2>Tổng cộng<span>1.030.000 đ</span></h2>
              </div>

              <div className="checkout-payment">
                <div className="payment-methods">
                  <h1>Phương thức thanh toán</h1>
                  <div className="payment-method">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="payment-1"
                        name="payment"
                      />
                      <label className="custom-control-label" for="payment-1"
                        >Paypal</label>
                    </div>
                    <div className="payment-content" id="payment-1-show">
                      <p>Thanh toán trực tuyến qua Paypal</p>
                    </div>
                  </div>
                  <div className="payment-method">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="payment-2"
                        name="payment"
                      />
                      <label className="custom-control-label" for="payment-2"
                        >Ship code</label>
                    </div>
                    <div className="payment-content" id="payment-2-show">
                      <p>Thanh toán khi nhận hàng</p>
                    </div>
                  </div>
                </div>
                <div className="checkout-btn">
                  <button>Đặt Hàng</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Checkout End --> */}

    {/* <!-- Footer Start --> */}
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h2>Liên Hệ</h2>
              <div className="contact-info">
                <p>
                  <i className="fa fa-map-marker"></i>
                </p>
                <p><i className="fa fa-envelope"></i>huyyntran@gmail.com</p>
                <p><i className="fa fa-phone"></i>+0333 964 846</p>
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
              <img src="img/payment-method.png" alt="Payment Method" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="payment-security">
              <h2>Chứng chỉ bảo mật:</h2>
              <img src="img/godaddy.svg" alt="Payment Security" />
              <img src="img/norton.svg" alt="Payment Security" />
              <img src="img/ssl.svg" alt="Payment Security" />
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
              <a href="https:www.facebook.com/ybx1802">Fullface Store</a>. All
              Rights Reserved
            </p>
          </div>

          <div className="col-md-6 template-by">
            <p>Developed By <a href="https://htmlcodex.com">Huy JR</a></p>
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
