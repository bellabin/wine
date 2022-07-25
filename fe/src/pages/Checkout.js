import React from 'react'

export default function EditCustomerPage() {
  return (
    <div>
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
              <a href="/" className="nav-item nav-link">Trang Chủ</a>
              <a href="/san-pham" className="nav-item nav-link">Sản Phẩm</a>
              {/* <!-- <a href="product-detail.html" className="nav-item nav-link">Product Detail</a> --> */}
              <a href="/users/tai-khoan" className="nav-item nav-link"
                >Tài khoản của bạn</a>
              </div>
            </div>
            <div className="navbar-nav ml-auto">
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  ><%=user.email%></a>
                <div className="dropdown-menu">
                  <a href="/users/dang-xuat" className="dropdown-item">Đăng xuất</a>
                </div>
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
                    onclick="renderInforOrder()"
                  />
                  <label className="custom-control-label" for="info-1"
                    >Địa chỉ mặc định</label
                  >
                </div>
                <p id="order-surname1" value="<%=user.ho%>">
                  Họ và Tên: <span><%=user.ho%> <%=user.ten%></span>
                </p>
                <p id="order-name1" value="<%=user.ten%>">
                </p>
                <p id="order-phone1" value="<%=user.phone%>">
                  Số điện thoại: <span><%=user.phone%></span>
                </p>
                <p id="order-email1" value="<%=user.email%>">
                  Email: <span><%=user.email%></span>
                </p>
                <p id="order-address1" value="<%=user.address%>">
                  Địa chỉ giao hàng: <span><%=user.address%></span>
                </p>

                

                
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="info-2"
                    name="info"
                    onclick="renderInforOrder()"
                  />
                  <label className="custom-control-label" for="info-2"
                    >Địa chỉ khác</label
                  >
                  <br>
                  
                </div>
                <form name="myform" id="form-info-order" action="/check-out/payment" method="post" onsubmit="return validateform()">
                  <div className="row" id="checkout-info">
                    <!-- <div className="col-md-6">
                      <input
                        className="form-control"
                        name="ho"
                        id="order-surname2"
                        type="text"
                        placeholder="Họ"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-control"
                        name="ten"
                        id="order-name2"
                        type="text"
                        placeholder="Tên"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-control"
                        name="sdt"
                        id="order-phone2"
                        type="text"
                        placeholder="Số điện thoại"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        name="diachi"
                        id="order-address2"
                        type="text"
                        placeholder="Địa chỉ giao hàng"
                      />
                    </div>
                    <button>Tiến hành đặt hàng</button> -->
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="checkout-inner">
              <div className="checkout-sum" id="sum-checkout">
                <!-- <div className="checkout-summary">
                  <h1>Tổng Giỏ Hàng</h1>
                  <p className="sub-total">Tạm tính<span>1.000.000 đ</span></p>
                  <p className="ship-cost">Phí ship<span>30.000 đ</span></p>
                  <h2>Tổng cộng<span>1.030.000 đ</span></h2>
                </div> -->
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
                        checked="true"
                        onclick=" payment()"
                      />
                      <label className="custom-control-label" for="payment-1"
                        >Paypal</label
                      >
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
                        onclick=" payment()"
                      />
                      <label className="custom-control-label" for="payment-2"
                        >Ship COD</label
                      >
                    </div>
                    <div className="payment-content" id="payment-2-show">
                      <p>Thanh toán khi nhận hàng</p>
                    </div>
                  </div>
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
                    ><i className="fab fa-facebook-f"></i
                  ></a>
                  <a href="https://www.linkedin.com/in/huy-tran-57777b202/"
                    ><i className="fab fa-linkedin-in"></i
                  ></a>
                  <a href="https://www.instagram.com/huy_jr18"
                    ><i className="fab fa-instagram"></i
                  ></a>
                  <a
                    href="https://www.youtube.com/channel/UCctcteJFmH4Wxc8npHW9Cog"
                    ><i className="fab fa-youtube"></i
                  ></a>
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
