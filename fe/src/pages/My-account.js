import React from 'react'

export default function MyAccoutPage() {
  return (
    <div>
        {/* <!-- Top bar Start --> */}
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
              <!-- <a href="product-detail.html" class="nav-item nav-link">Product Detail</a> -->
            </div>
            <div class="navbar-nav ml-auto">
              <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  >Tài khoản: <%=user.ten%></a
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
          <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
          <li class="breadcrumb-item active">Tài khoản</li>
        </ul>
      </div>
    </div>
    {/* <!-- Breadcrumb End --> */}

    {/* <!-- My Account Start --> */}
    <div class="my-account">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <div
              class="nav flex-column nav-pills"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                class="nav-link active"
                id="dashboard-nav"
                data-toggle="pill"
                href="#dashboard-tab"
                role="tab"
                ><i class="fa fa-tachometer-alt"></i>Chào <%=user.ten%></a
              >
              <a
                class="nav-link"
                id="orders-nav"
                data-toggle="pill"
                href="#orders-tab"
                role="tab"
                ><i class="fa fa-shopping-bag"></i>Đơn Hàng của bạn</a
              >
              <a
                class="nav-link"
                id="account-nav"
                data-toggle="pill"
                href="#account-tab"
                role="tab"
                ><i class="fa fa-user"></i>Chi Tiết Tài Khoản</a
              >
              <a class="nav-link" href="/users/dang-xuat"
                ><i class="fa fa-sign-out-alt"></i>Đăng Xuất</a
              >
            </div>
          </div>
          <div class="col-md-9">
            <div class="tab-content">
              <div
                class="tab-pane fade show active"
                id="dashboard-tab"
                role="tabpanel"
                aria-labelledby="dashboard-nav"
              >
                <h4>Chào <%=user.ten%></h4>
                <p>Đây là trang quản lý tài khoản của bạn.</p>
              </div>
              <div
                class="tab-pane fade"
                id="orders-tab"
                role="tabpanel"
                aria-labelledby="orders-nav"
              >
                <div class="table-responsive">
                  <table class="table table-bordered">
                    <thead class="thead-dark">
                      <tr>
                        <th>No</th>
                        <th>Thông tin đặt hàng</th>
                        <th>Ngày đặt</th>
                        <th>Tổng Giá</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody id="list-orders-user">
                      <!-- <tr>
                        <td>1</td>
                        <td>Product Name</td>
                        <td>01 Jan 2020</td>
                        <td>$99</td>
                        <td>Approved</td>
                        <td><button class="btn">View</button></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Product Name</td>
                        <td>01 Jan 2020</td>
                        <td>$99</td>
                        <td>Approved</td>
                        <td><button class="btn">View</button></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Product Name</td>
                        <td>01 Jan 2020</td>
                        <td>$99</td>
                        <td>Approved</td>
                        <td><button class="btn">View</button></td>
                      </tr> -->
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="payment-tab"
                role="tabpanel"
                aria-labelledby="payment-nav"
              >
                <h4>Payment Method</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  condimentum quam ac mi viverra dictum. In efficitur ipsum
                  diam, at dignissim lorem tempor in. Vivamus tempor hendrerit
                  finibus. Nulla tristique viverra nisl, sit amet bibendum ante
                  suscipit non. Praesent in faucibus tellus, sed gravida lacus.
                  Vivamus eu diam eros. Aliquam et sapien eget arcu rhoncus
                  scelerisque.
                </p>
              </div>
              <div
                class="tab-pane fade"
                id="address-tab"
                role="tabpanel"
                aria-labelledby="address-nav"
              >
                <h4>Address</h4>
                <div class="row">
                  <div class="col-md-6">
                    <h5>Payment Address</h5>
                    <p>123 Payment Street, Los Angeles, CA</p>
                    <p>Mobile: 012-345-6789</p>
                    <button class="btn">Edit Address</button>
                  </div>
                  <div class="col-md-6">
                    <h5>Shipping Address</h5>
                    <p>123 Shipping Street, Los Angeles, CA</p>
                    <p>Mobile: 012-345-6789</p>
                    <button class="btn">Edit Address</button>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="account-tab"
                role="tabpanel"
                aria-labelledby="account-nav"
              >
                <h4>Chi Tiết Tài Khoản</h4>
                <form action="/users/update" method="post">
                  <div class="row">
                    <div class="col-md-6">
                      <label for="ho">Họ</label>
                      <input
                        id="ho"
                        name="ho"
                        value="<%=user.ho%>"
                        class="form-control"
                        type="text"
                        placeholder="Họ"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="ten">Tên</label>
                      <input
                        id="ten"
                        name="ten"
                        value="<%=user.ten%>"
                        class="form-control"
                        type="text"
                        placeholder="Tên"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="phone">Số điện thoại</label>
                      <input
                        id="phone"
                        name="phone"
                        value="<%=user.phone%>"
                        class="form-control"
                        type="text"
                        placeholder="Số Điện Thoại"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        value="<%=user.email%>"
                        class="form-control"
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                    <div class="col-md-12">
                      <label for="address">Địa chỉ</label>
                      <input
                        name="address"
                        value="<%=user.address%>"
                        class="form-control"
                        type="text"
                        placeholder="Địa Chỉ"
                      />
                    </div>
                    <div class="col-md-12">
                      <button class="btn">Cập Nhật Tài Khoản</button>
                      <br /><br />
                    </div>
                  </div>
                </form>
                <h4>Đổi Mật Khẩu</h4>
                <form action="/users/doi-mat-khau" method="post">
                  <div class="row">
                    <div class="col-md-12">
                      <input
                        name="password"
                        class="form-control"
                        type="password"
                        placeholder="Mật khẩu hiện tại"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        name="newPassword"
                        class="form-control"
                        type="text"
                        placeholder="Mật khẩu mới"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        name="confirmPassword"
                        class="form-control"
                        type="text"
                        placeholder="Xác nhận mật khẩu mới"
                      />
                    </div>
                    <div class="col-md-12">
                      <button class="btn">Đổi mật khẩu</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- My Account End --> */}

    {/* <!-- Footer Start --> */}
    <div class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="footer-widget">
              <h2>Liên Hệ</h2>
              <div class="contact-info">
                <p><i class="fa fa-map-marker"></i>Thành phố Hồ Chí Minh</p>
                <p><i class="fa fa-envelope"></i>HoangKhang1999ag</p>
                <p><i class="fa fa-phone"></i>+0333 744 192</p>
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