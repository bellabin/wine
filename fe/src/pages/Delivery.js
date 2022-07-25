import React from 'react'

export default function DeliveryPage() {
  return (
    <div>
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
            <div className="navbar-nav ml-auto"></div>
          </div>
        </nav>
      </div>
    </div>
    {/* <!-- Nav Bar End --> */}

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
                id="orders-nav"
                data-toggle="pill"
                href="#history-tab"
                role="tab"
                ><i className="fa fa-shopping-bag"></i>Lịch sử giao hàng</a>
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
                        <th>Giá trị</th>
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
                id="history-tab"
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
                        <th>Giá trị</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody id="list-history">
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

    {/* <!-- Back to Top --> */}
    <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>

    </div>
  )
}
