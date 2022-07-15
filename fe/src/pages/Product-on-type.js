import React from 'react'

export default function ProductOnTypePage() {
  return (
    <div>
        {/* <!-- Top bar Start --> */}
    <div class="top-bar">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">
            <i class="fa fa-envelope"></i> HoangKhang1999ag@gmail.com
          </div>
          <div class="col-sm-6"><i class="fa fa-phone-alt"></i> 0338744192</div>
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
              <a href="/gio-hang" class="nav-item nav-link">Giỏ Hàng</a>

              <a href="/users/tai-khoan" class="nav-item nav-link"
                >Tài khoản của bạn</a
              >
            </div>
            <div class="navbar-nav ml-auto"></div>
          </div>
        </nav>
      </div>
    </div>
    {/* <!-- Nav Bar End --> */}

    {/* <!-- Bottom Bar Start --> */}
    <!-- <div class="bottom-bar">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-3">
            <div class="logo">
              <a href="/">
                <img
                  src="https://hn.arrowpress.net/lusion/wp-content/uploads/2020/11/logo_liquor.png.webp"
                  alt="Logo"
                />
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
              <a href="wishlist.html" class="btn wishlist">
                <i class="fa fa-heart"></i>
                <span>(0)</span>
              </a>
              <a href="/gio-hang" class="btn cart">
                <i class="fa fa-shopping-cart"></i>
                <span class="cart-number">(0)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    {/* <!-- Bottom Bar End --> */}

    {/* <!-- Breadcrumb Start --> */}
    <div class="breadcrumb-wrap">
      <div class="container-fluid">
        <ul class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item"><a href="/san-pham">Sản phẩm</a></li>
          <li class="breadcrumb-item active"><%=breadcrumb%></li>
        </ul>
      </div>
    </div>
    {/* <!-- Breadcrumb End --> */}

    {/* <!-- Product List Start --> */}
    <div class="product-view">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-md-12">
                <div class="product-view-top">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="product-search">
                        <input
                          id="myInput"
                          type="email"
                          placeholder="Tìm kiếm tên sản phẩm"
                        />
                        <button><i class="fa fa-search"></i></button>
                      </div>
                    </div>

                    <!-- <div class="col-md-4">
                      <div class="product-price-range">
                        <div class="dropdown" style="display: flex">
                          <p>Mức giá</p>
                          <select>
                            <option>0$ - 20$</option>
                            <option>20$ - 50$</option>
                            <option>50$ - 100$</option>
                            <option>Trên 100$</option>
                          </select>
                        </div>
                      </div>
                    </div> -->
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                      <div class="product-price-range"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- danh sách sản phẩm theo loại đc nhúng tại đây --> */}
              <div class="col-md-12">
                <div id="myTable" class="row"></div>
              </div>
            </div>

            {/* <!-- Pagination Start --> */}
            <!-- <div class="col-md-12">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div> -->
            {/* <!-- Pagination Start --> */}
          </div>

          {/* <!-- Side Bar Start --> */}
          <div class="col-lg-4 sidebar">
            <div class="sidebar-widget category">
              <h2 class="title">Danh mục</h2>
              <nav class="navbar bg-light">
                <ul class="navbar-nav">
                  <% for (cat of listCat) { %>
                  <li class="nav-item">
                    <a class="nav-link" href="/danh-muc/<%=cat.TENLOAI%>"
                      ><i class="fa fa-wine-bottle"></i>RƯỢU <%= cat.TENLOAI
                      %></a
                    >
                  </li>
                  <% } %>
                </ul>
              </nav>
            </div>

            <div class="sidebar-widget widget-slider">
              <h3 style="text-align: center; color: #ff6f61">RƯỢU HOT!!!</h3>
              <div class="sidebar-slider normal-slider">
                <% for (product of listProPopular) { %>
                <div class="product-item">
                  <div class="product-title">
                    <a href="#"> <%=product.TENDONG%> </a>
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
                      <img src="../<%=product.HINHANH%>" alt="Product Image" />
                    </a>
                    <div class="product-action">
                      <a href="#"><i class="fa fa-cart-plus"></i></a>
                      <a href="#"><i class="fa fa-heart"></i></a>
                      <a class="slug" href="/san-pham/<%=product.TENDONG%>"
                        ><i class="fa fa-search"></i
                      ></a>
                    </div>
                  </div>
                  <div class="product-price">
                    <h3>
                      <%=product.GIA.toLocaleString('en-US')%> <span> $</span>
                    </h3>
                    <a class="btn" href=""
                      ><i class="fa fa-shopping-cart"></i>Mua Ngay</a
                    >
                  </div>
                </div>
                <% } %>
              </div>
            </div>

            <div class="sidebar-widget brands">
              <h2 class="title">Our Brands</h2>
              <ul>
                <li><a href="#">Nulla </a><span>(45)</span></li>
                <li><a href="#">Curabitur </a><span>(34)</span></li>
                <li><a href="#">Nunc </a><span>(67)</span></li>
                <li><a href="#">Ullamcorper</a><span>(74)</span></li>
                <li><a href="#">Fusce </a><span>(89)</span></li>
                <li><a href="#">Sagittis</a><span>(28)</span></li>
              </ul>
            </div>

            <div class="sidebar-widget tag">
              <h2 class="title">Tags Cloud</h2>
              <a href="#">Lorem ipsum</a>
              <a href="#">Vivamus</a>
              <a href="#">Phasellus</a>
              <a href="#">pulvinar</a>
              <a href="#">Curabitur</a>
              <a href="#">Fusce</a>
              <a href="#">Sem quis</a>
              <a href="#">Mollis metus</a>
              <a href="#">Sit amet</a>
              <a href="#">Vel posuere</a>
              <a href="#">orci luctus</a>
              <a href="#">Nam lorem</a>
            </div>
          </div>
          {/* <!-- Side Bar End --> */}
        </div>
      </div>
    </div>
    {/* <!-- Product List End --> */}

    {/* <!-- Brand Start --> */}
    <div class="brand">
      <div class="container-fluid">
        <div class="brand-slider">
          <div class="brand-item">
            <a href="/danh-muc/agv"><img src="../img/hennessy.jpg" alt="" /></a>
          </div>
          <div class="brand-item">
            <a href="/danh-muc/shoei"
              ><img src="../img/bacardi.jpg" alt=""
            /></a>
          </div>
          <div class="brand-item">
            <a href="/danh-muc/arai"><img src="../img/chivas.jpg" alt="" /></a>
          </div>
          <div class="brand-item">
            <a href="/danh-muc/torc"><img src="../img/camus.jpg" alt="" /></a>
          </div>
          <div class="brand-item">
            <a href="/danh-muc/yohe"><img src="../img/ciroc.png" alt="" /></a>
          </div>
          <div class="brand-item">
            <a href="/danh-muc/yohe"
              ><img src="../img/raynal.jpg" alt="rượu raynal"
            /></a>
          </div>
          <div class="brand-item">
            <a href="/danh-muc/yohe"><img src="../img/martin.jpg" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Brand End --> */}

    {/* <!-- Footer Start --> */}
    <div class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="footer-widget">
              <h2>Liên Hệ</h2>
              <div class="contact-info">
                <p><i class="fa fa-map-marker"></i>Thành Phố Hồ Chí Minh</p>
                <p><i class="fa fa-envelope"></i>HoangKhang1999ag@gmail.com</p>
                <p><i class="fa fa-phone"></i>0338744192</p>
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
