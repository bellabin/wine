import React from 'react'

export default function HomePage() {
  return (
    <div>
    <div class="top-bar">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">
            <i class="fa fa-envelope"></i> huyyntran@.com
          </div>
          <div class="col-sm-6">
            <i class="fa fa-phone-alt"></i> +0333 964 846
          </div>
        </div>
      </div>
    </div>

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
              <a href="/" class="nav-item nav-link active">Trang Chủ</a>
              <a href="/san-pham" class="nav-item nav-link">Sản Phẩm</a>
              <a href="/gio-hang/" class="nav-item nav-link">Giỏ Hàng</a>
              <a href="/users/thanh-toan" class="nav-item nav-link"
                >Thanh Toán</a
              >
              <a href="/users/tai-khoan" class="nav-item nav-link"
                >Tài khoản của bạn</a
              >
              <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  >Trang khác</a
                >
                <div class="dropdown-menu">
                  <a href="/wishlist" class="dropdown-item"
                    >Sản phẩm đã thích</a
                  >
                  <a href="/lien-he" class="dropdown-item">Liên hệ</a>
                </div>
              </div>
            </div>
            <div class="navbar-nav ml-auto">
              <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  >Tài khoản</a
                >
                <div class="dropdown-menu">
                  <a href="/users/dang-nhap" class="dropdown-item">Đăng nhập</a>
                  <a href="/users/dang-ky" class="dropdown-item">Đăng ký</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <div class="bottom-bar">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-3">
            <div class="logo">
              <a href="/">
                <img src="img/logo2.jpg" alt="Logo" />
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="search">
              <input type="text" placeholder="Search" />
              <button><i class="fa fa-search"></i></button>
            </div>
          </div>
          <div class="col-md-3">
            <div class="user">
              <a href="/wishlist" class="btn wishlist">
                <i class="fa fa-heart"></i>
                <span>(0)</span>
              </a>
              <a href="/gio-hang" class="btn cart">
                <i class="fa fa-shopping-cart"></i>
                <span>(0)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <main id="main">
      <div class="header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <nav class="navbar bg-light">
                <ul class="navbar-nav">
                  {/* <% for (cat of listCat) { %>
                  <li class="nav-item">
                    <a class="nav-link" href="/danh-muc/<%=cat.TENTH%>"
                      ><i class="fa fa-wine-bottle"></i>Rượu <%= cat.TENLOAI
                      %></a
                    >
                  </li>
                  <% } %> */}
                </ul>
              </nav>
            </div>
            <div class="col-md-6">
              <div class="header-slider normal-slider">
                <div class="header-slider-item">
                  <img
                    src="https://hn.arrowpress.net/lusion/wp-content/uploads/2020/11/alec-favale-KIqw3GIhdHA-unsplash-500x367.jpg.webp"
                    alt="Slider Image"
                  />
                  <div class="header-slider-caption">
                    <p>Lái xe an toàn cùng với AGV</p>
                    <a class="btn" href="/danh-muc/AGV"
                      ><i class="fa fa-shopping-cart"></i>Shop Now</a
                    >
                  </div>
                </div>
                <div class="header-slider-item">
                  <img
                    src="https://hn.arrowpress.net/lusion/wp-content/uploads/2020/11/felix-w-aNMMayob3pw-unsplash-500x367.jpg.webp"
                    alt="Slider Image"
                  />
                  <div class="header-slider-caption">
                    <p>
                      Bức phá mọi giới hạn, thỏa sức đam mê cùng <br />
                      Shoei Helmet!
                    </p>
                    <a class="btn" href="/danh-muc/Shoei"
                      ><i class="fa fa-shopping-cart"></i>Shop Now</a
                    >
                  </div>
                </div>
                <div class="header-slider-item">
                  <img
                    src="https://hn.arrowpress.net/lusion/wp-content/uploads/2020/11/5_VerresCarafe-copie-1024x0-1-500x367.jpg.webp"
                    alt="Slider Image"
                  />
                  <div class="header-slider-caption">
                    <p>Tự hào thương hiệu Việt Nam. Royal Helmet!</p>
                    <a class="btn" href="/danh-muc/Royal"
                      ><i class="fa fa-shopping-cart"></i>Shop Now</a
                    >
                  </div>
                </div>

                <div class="header-slider-item">
                  <img
                    src="https://hn.arrowpress.net/lusion/wp-content/uploads/2020/11/mika-houtmeyers-ttNVVqxg_xE-unsplash-500x367.jpg.webp"
                    alt="Slider Image"
                  />
                  <div class="header-slider-caption">
                    <p>Tự hào thương hiệu Việt Nam. Royal Helmet!</p>
                    <a class="btn" href="/danh-muc/Royal"
                      ><i class="fa fa-shopping-cart"></i>Shop Now</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="header-img">
                <div class="img-item">
                  <img
                    src="https://hn.arrowpress.net/lusion/wp-content/uploads/2020/11/brian-jones.jpg.webp"
                  />
                  <a class="img-text" href="">
                    <p>Không gì là không thể!</p>
                  </a>
                </div>
                <div class="img-item">
                  <img
                    src="https://hn.arrowpress.net/lusion/wp-content/uploads/2020/11/joseph-costa.jpg.webp"
                  />
                  <a class="img-text" href="">
                    <p>Lái xe bằng cả trái tim</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="brand">
        <div class="container-fluid">
          <div class="brand-slider">
            <div class="brand-item">
              <a href="/danh-muc/agv"><img src="img/hennessy.jpg" alt="" /></a>
            </div>
            <div class="brand-item">
              <a href="/danh-muc/shoei"><img src="img/bacardi.jpg" alt="" /></a>
            </div>
            <div class="brand-item">
              <a href="/danh-muc/arai"><img src="img/chivas.jpg" alt="" /></a>
            </div>
            <div class="brand-item">
              <a href="/danh-muc/torc"><img src="img/camus.jpg" alt="" /></a>
            </div>
            <div class="brand-item">
              <a href="/danh-muc/yohe"><img src="img/ciroc.png" alt="" /></a>
            </div>
            <div class="brand-item">
              <a href="/danh-muc/yohe"
                ><img src="img/raynal.jpg" alt="rượu raynal"
              /></a>
            </div>
            <div class="brand-item">
              <a href="/danh-muc/yohe"><img src="img/martin.jpg" alt="" /></a>
            </div>
          </div>
        </div>
      </div>

      <div class="feature">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-3 col-md-6 feature-col">
              <div class="feature-content">
                <i class="fab fa-cc-mastercard"></i>
                <h2>Bảo Mật Thanh Toán</h2>
                <p>Website cam kết bảo mật thông tin khách hàng</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 feature-col">
              <div class="feature-content">
                <i class="fa fa-truck"></i>
                <h2>Vận Chuyển Toàn Quốc</h2>
                <p>Freeship toàn quốc, có hỗ trợ SHIP CODE cho khách hàng</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 feature-col">
              <div class="feature-content">
                <i class="fa fa-sync-alt"></i>
                <h2>90 Ngày Đổi Trả</h2>
                <p>
                  Cho phép khách hàng được đổi trả sản phẩm trong vòng 90 ngày
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 feature-col">
              <div class="feature-content">
                <i class="fa fa-comments"></i>
                <h2>Tư Vấn 24/7</h2>
                <p>
                  Luôn có nhân viên tư vấn online 24/24. Hỗ trợ chăm sóc khách
                  hàng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="category">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <div class="category-item ch-400">
                <img src="img/category-3.jpg" />
                <a class="category-name" href="">
                  <p>Nothing is impossible</p>
                </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="category-item ch-250">
                <img src="img/category-4.jpg" />
                <a class="category-name" href="">
                  <p>Ride or die</p>
                </a>
              </div>
              <div class="category-item ch-150">
                <img src="img/category-5.jpg" />
                <a class="category-name" href="">
                  <p>I love scene beautfiull</p>
                </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="category-item ch-150">
                <img src="img/category-6.jpg" />
                <a class="category-name" href="">
                  <p>My brothers and me</p>
                </a>
              </div>
              <div class="category-item ch-250">
                <img src="img/category-7.jpg" />
                <a class="category-name" href="">
                  <p>
                    He said: "One day, you'll leave this world behind so live a
                    life you will remember"
                  </p>
                </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="category-item ch-400">
                <img src="img/category-8.jpg" />
                <a class="category-name" href="">
                  <p>
                    “A great love is not one who loves many, but one who loves
                    one woman for life”
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="call-to-action">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h1>Liên hệ với tôi qua số điện thoại</h1>
            </div>
            <div class="col-md-6">
              <a href="tel:0123456789">+0333 964 846</a>
            </div>
          </div>
        </div>
      </div>

        <div class="featured-product product">
            <div class="container-fluid">
                <div class="section-header">
                    <h1>NÓN NỔI BẬT</h1>
                </div>
                <div class="row align-items-center product-slider product-slider-4">
                    {/* <% for (product of listNewArrival) { %>
                        <div class="col-lg-3">
                            <div class="product-item">
                                <div class="product-title">
                                    <a class="slug" href="/san-pham/<%=product.nameProduct%>"><%=product.nameProduct%></a>
                                    <div class="ratting">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                </div>
                                <div class="product-image">
                                    <a href="product-detail.html">
                                        <img src="<%=product.imgProduct%>" alt="Product Image">
                                    </a>
                                    <div class="product-action">
                                        <a href="#"><i class="fa fa-cart-plus"></i></a>
                                        <a href="#"><i class="fa fa-heart"></i></a>
                                        <a href="#"><i class="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div class="product-price">
                                    <h3><%=product.priceProduct.toLocaleString('vi-VN')%><span> ₫</span></h3>
                                    <a class="btn" href=""><i class="fa fa-shopping-cart"></i>Mua Ngay</a>
                                </div>
                            </div>
                        </div>
                    <% } %> */}
                </div>
            </div>
        </div>

      <div class="featured-product product">
        <div class="container-fluid">
          <div class="section-header">
            <h1>NÓN NỔI BẬT</h1>
          </div>
          <div id="non-noi-bat"></div>
        </div>
      </div>

      <div class="newsletter">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <h1>Đăng ký để nhận tin tức mới nhất</h1>
            </div>
            <div class="col-md-6">
              <div class="form">
                <input type="email" placeholder="Nhập email..." />
                <button>Gửi</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="recent-product product">
        <div class="container-fluid">
          <div class="section-header">
            <h1>HOT</h1>
          </div>
          <div id="non-moi-ve" class="row align-items-center"></div>
        </div>
      </div>

      <div class="review">
        <div class="container-fluid">
          <div class="row align-items-center review-slider normal-slider">
            <div class="col-md-6">
              <div class="review-slider-item">
                <div class="review-img">
                  <img src="img/review-1.jpg" alt="Image" />
                </div>
                <div class="review-text">
                  <h2>Trần Quốc Huy</h2>
                  <h3>Khách hàng</h3>
                  <div class="ratting">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <p>
                    Nhân viên tư vấn nhiệt tình, hàng giao nhanh. Cho 5 sao !
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="review-slider-item">
                <div class="review-img">
                  <img src="img/review-2.jpg" alt="Image" />
                </div>
                <div class="review-text">
                  <h2>Phan Trung Khánh</h2>
                  <h3>Khách hàng</h3>
                  <div class="ratting">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <p>
                    Chăm sóc khách hàng rất tốt, mua mang không vừa vẫn đổi được
                    thoải mái lại còn freeship nữa.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="review-slider-item">
                <div class="review-img">
                  <img src="img/review-3.jpg" alt="Image" />
                </div>
                <div class="review-text">
                  <h2>Lê Thị Hồng Cẩm</h2>
                  <h3>Khách hàng</h3>
                  <div class="ratting">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <p>Cửa hàng gì toàn trai đẹp không hà!!!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

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
              <img src="img/payment-method.png" alt="Payment Method" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="payment-security">
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
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-6 copyright">
            <p>
              Copyright &copy;
              <a href="https:www.facebook.com/ybx1802">Rượu Ngon</a>. All Rights
              Reserved
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
