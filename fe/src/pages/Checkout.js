import React from 'react'

export default function EditCustomerPage() {
  return (
    <div>
        <div class="top-bar">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">
            <i class="fa fa-envelope"></i>HoangKhang1999ag@gmail.com
          </div>
          <div class="col-sm-6"><i class="fa fa-phone-alt"></i>0338744192</div>
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
              <a href="/san-pham" class="nav-item nav-link">Sản Phẩm</a>
              <!-- <a href="product-detail.html" class="nav-item nav-link">Product Detail</a> -->
              <a href="/users/tai-khoan" class="nav-item nav-link"
                >Tài khoản của bạn</a
              >
              </div>
            </div>
            <div class="navbar-nav ml-auto">
              <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  ><%=user.email%></a
                >
                <div class="dropdown-menu">
                  <a href="/users/dang-xuat" class="dropdown-item">Đăng xuất</a>
                </div>
              </div>
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
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item"><a href="/san-pham">Products</a></li>
          <li class="breadcrumb-item active">Checkout</li>
        </ul>
      </div>
    </div>
    {/* <!-- Breadcrumb End --> */}

    {/* <!-- Checkout Start --> */}
    <div class="checkout">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8">
            <div class="checkout-inner">
              <div class="billing-address">
                <h2>Thông Tin Đặt Hàng</h2>
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="info-1"
                    name="info"
                    onclick="renderInforOrder()"
                  />
                  <label class="custom-control-label" for="info-1"
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

                

                
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="info-2"
                    name="info"
                    onclick="renderInforOrder()"
                  />
                  <label class="custom-control-label" for="info-2"
                    >Địa chỉ khác</label
                  >
                  <br>
                  
                </div>
                <form name="myform" id="form-info-order" action="/check-out/payment" method="post" onsubmit="return validateform()">
                  <div class="row" id="checkout-info">
                    <!-- <div class="col-md-6">
                      <input
                        class="form-control"
                        name="ho"
                        id="order-surname2"
                        type="text"
                        placeholder="Họ"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        class="form-control"
                        name="ten"
                        id="order-name2"
                        type="text"
                        placeholder="Tên"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        class="form-control"
                        name="sdt"
                        id="order-phone2"
                        type="text"
                        placeholder="Số điện thoại"
                      />
                    </div>
                    <div class="col-md-12">
                      <input
                        class="form-control"
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
          <div class="col-lg-4">
            <div class="checkout-inner">
              <div class="checkout-sum" id="sum-checkout">
                <!-- <div class="checkout-summary">
                  <h1>Tổng Giỏ Hàng</h1>
                  <p class="sub-total">Tạm tính<span>1.000.000 đ</span></p>
                  <p class="ship-cost">Phí ship<span>30.000 đ</span></p>
                  <h2>Tổng cộng<span>1.030.000 đ</span></h2>
                </div> -->
              </div>

              <div class="checkout-payment">
                <div class="payment-methods">
                  <h1>Phương thức thanh toán</h1>
                  <div class="payment-method">
                    <div class="custom-control custom-radio">
                      <input
                        type="radio"
                        class="custom-control-input"
                        id="payment-1"
                        name="payment"
                        checked="true"
                        onclick=" payment()"
                      />
                      <label class="custom-control-label" for="payment-1"
                        >Paypal</label
                      >
                    </div>
                    <div class="payment-content" id="payment-1-show">
                      <p>Thanh toán trực tuyến qua Paypal</p>
                    </div>
                  </div>
                  <div class="payment-method">
                    <div class="custom-control custom-radio">
                      <input
                        type="radio"
                        class="custom-control-input"
                        id="payment-2"
                        name="payment"
                        onclick=" payment()"
                      />
                      <label class="custom-control-label" for="payment-2"
                        >Ship COD</label
                      >
                    </div>
                    <div class="payment-content" id="payment-2-show">
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
    <div class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="footer-widget">
              <h2>Liên Hệ</h2>
              <div class="contact-info">
                <p>
                  <i class="fa fa-map-marker"></i>
                </p>
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
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                  <a href="https://www.linkedin.com/in/huy-tran-57777b202/"
                    ><i class="fab fa-linkedin-in"></i
                  ></a>
                  <a href="https://www.instagram.com/huy_jr18"
                    ><i class="fab fa-instagram"></i
                  ></a>
                  <a
                    href="https://www.youtube.com/channel/UCctcteJFmH4Wxc8npHW9Cog"
                    ><i class="fab fa-youtube"></i
                  ></a>
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
