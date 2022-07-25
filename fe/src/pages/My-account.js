import React from 'react'

export default function MyAccoutPage() {
  return (
    <div>
        {/* <!-- Top bar Start --> */}
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
              {/* <!-- <a href="product-detail.html" className="nav-item nav-link">Product Detail</a> --> */}
            </div>
            <div className="navbar-nav ml-auto">
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  >Tài khoản: <%=user.ten%></a>
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
          <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
          <li className="breadcrumb-item active">Tài khoản</li>
        </ul>
      </div>
    </div>
    {/* <!-- Breadcrumb End --> */}

    {/* <!-- My Account Start --> */}
    <div className="my-account">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div
              className="nav flex-column nav-pills"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link active"
                id="dashboard-nav"
                data-toggle="pill"
                href="#dashboard-tab"
                role="tab"
                ><i className="fa fa-tachometer-alt"></i>Chào <%=user.ten%></a>
              <a
                className="nav-link"
                id="orders-nav"
                data-toggle="pill"
                href="#orders-tab"
                role="tab"
                ><i className="fa fa-shopping-bag"></i>Đơn Hàng của bạn</a>
              <a
                className="nav-link"
                id="account-nav"
                data-toggle="pill"
                href="#account-tab"
                role="tab"
                ><i className="fa fa-user"></i>Chi Tiết Tài Khoản</a>
              <a className="nav-link" href="/users/dang-xuat"
                ><i className="fa fa-sign-out-alt"></i>Đăng Xuất</a>
            </div>
          </div>
          <div className="col-md-9">
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="dashboard-tab"
                role="tabpanel"
                aria-labelledby="dashboard-nav"
              >
                <h4>Chào <%=user.ten%></h4>
                <p>Đây là trang quản lý tài khoản của bạn.</p>
              </div>
              <div
                className="tab-pane fade"
                id="orders-tab"
                role="tabpanel"
                aria-labelledby="orders-nav"
              >
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="thead-dark">
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
                      {/* <!-- <tr>
                        <td>1</td>
                        <td>Product Name</td>
                        <td>01 Jan 2020</td>
                        <td>$99</td>
                        <td>Approved</td>
                        <td><button className="btn">View</button></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Product Name</td>
                        <td>01 Jan 2020</td>
                        <td>$99</td>
                        <td>Approved</td>
                        <td><button className="btn">View</button></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Product Name</td>
                        <td>01 Jan 2020</td>
                        <td>$99</td>
                        <td>Approved</td>
                        <td><button className="btn">View</button></td>
                      </tr> --> */}
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                className="tab-pane fade"
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
                className="tab-pane fade"
                id="address-tab"
                role="tabpanel"
                aria-labelledby="address-nav"
              >
                <h4>Address</h4>
                <div className="row">
                  <div className="col-md-6">
                    <h5>Payment Address</h5>
                    <p>123 Payment Street, Los Angeles, CA</p>
                    <p>Mobile: 012-345-6789</p>
                    <button className="btn">Edit Address</button>
                  </div>
                  <div className="col-md-6">
                    <h5>Shipping Address</h5>
                    <p>123 Shipping Street, Los Angeles, CA</p>
                    <p>Mobile: 012-345-6789</p>
                    <button className="btn">Edit Address</button>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="account-tab"
                role="tabpanel"
                aria-labelledby="account-nav"
              >
                <h4>Chi Tiết Tài Khoản</h4>
                <form action="/users/update" method="post">
                  <div className="row">
                    <div className="col-md-6">
                      <label for="ho">Họ</label>
                      <input
                        id="ho"
                        name="ho"
                        value="<%=user.ho%>"
                        className="form-control"
                        type="text"
                        placeholder="Họ"
                      />
                    </div>
                    <div className="col-md-6">
                      <label for="ten">Tên</label>
                      <input
                        id="ten"
                        name="ten"
                        value="<%=user.ten%>"
                        className="form-control"
                        type="text"
                        placeholder="Tên"
                      />
                    </div>
                    <div className="col-md-6">
                      <label for="phone">Số điện thoại</label>
                      <input
                        id="phone"
                        name="phone"
                        value="<%=user.phone%>"
                        className="form-control"
                        type="text"
                        placeholder="Số Điện Thoại"
                      />
                    </div>
                    <div className="col-md-6">
                      <label for="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        value="<%=user.email%>"
                        className="form-control"
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-md-12">
                      <label for="address">Địa chỉ</label>
                      <input
                        name="address"
                        value="<%=user.address%>"
                        className="form-control"
                        type="text"
                        placeholder="Địa Chỉ"
                      />
                    </div>
                    <div className="col-md-12">
                      <button className="btn">Cập Nhật Tài Khoản</button>
                      <br /><br />
                    </div>
                  </div>
                </form>
                <h4>Đổi Mật Khẩu</h4>
                <form action="/users/doi-mat-khau" method="post">
                  <div className="row">
                    <div className="col-md-12">
                      <input
                        name="password"
                        className="form-control"
                        type="password"
                        placeholder="Mật khẩu hiện tại"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        name="newPassword"
                        className="form-control"
                        type="text"
                        placeholder="Mật khẩu mới"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        name="confirmPassword"
                        className="form-control"
                        type="text"
                        placeholder="Xác nhận mật khẩu mới"
                      />
                    </div>
                    <div className="col-md-12">
                      <button className="btn">Đổi mật khẩu</button>
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
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h2>Liên Hệ</h2>
              <div className="contact-info">
                <p><i className="fa fa-map-marker"></i>Thành phố Hồ Chí Minh</p>
                <p><i className="fa fa-envelope"></i>HoangKhang1999ag</p>
                <p><i className="fa fa-phone"></i>+0333 744 192</p>
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
