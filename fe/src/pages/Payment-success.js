import React from 'react'

export default function PaymentSuccessPage() {
  return (
    <div>
        {/* <!-- Top bar Start --> */}
    <div className="top-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <i className="fa fa-envelope"></i>HoangKhang1999ag@gmail.com
          </div>
          <div className="col-sm-6">
            <i className="fa fa-phone-alt"></i> +0338744192
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Top bar End --> */}

    {/* <!-- Breadcrumb Start --> */}
    <div className="breadcrumb-wrap">
      <div className="container-fluid">
        <ul className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
          <li className="breadcrumb-item active">Thành công</li>
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
                  <legend className="text-center">
                    <h1>GIAO DỊCH THÀNH CÔNG</h1>
                  </legend>
                  <a className="mx-auto" href="/">Quay lại trang chủ</a>
                </div>
              </form>
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
