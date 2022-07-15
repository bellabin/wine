import React from 'react'

export default function ProductDetailPage() {
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
              <a href="/" class="nav-item nav-link active">Trang Chủ</a>
              <a href="/san-pham" class="nav-item nav-link">Sản Phẩm</a>
              <!-- <a href="product-detail.html" class="nav-item nav-link">Product Detail</a> -->
              <a href="/gio-hang" class="nav-item nav-link">Giỏ Hàng</a>
              <a href="/thanh-toan" class="nav-item nav-link">Thanh Toán</a>
              <a href="/tai-khoan" class="nav-item nav-link"
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
    {/* <!-- Nav Bar End --> */}

    {/* <!-- Bottom Bar Start --> */}
    <div class="bottom-bar">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-3">
            <div class="logo">
              <a href="/">
                <img src="../img/logo.png" alt="Logo" />
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
              <a href="cart.html" class="btn cart">
                <i class="fa fa-shopping-cart"></i>
                <span>(0)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
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

    {/* <!-- Product Detail Start --> */}
    <div class="product-detail">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8">
            <div class="product-detail-top">
              <div id="chi-tiet-san-pham" class="row align-items-center">
                <div class="col-md-5">
                  <div class="product-slider-single normal-slider">
                    
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="product-content">
                    <div class="title">
                      <h2 id="nameProduct"></h2>
                    </div>
                    <div class="ratting">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="price">
                      <h4>Giá:</h4>
                      <p id="priceProduct"></p>
                    </div>
                    <div class="quantity">
                      <h4>Số lượng:</h4>
                      <div class="qty">
                        <button class="btn-minus">
                          <i class="fa fa-minus"></i>
                        </button>
                        <input type="text" value="1" />
                        <button class="btn-plus">
                          <i class="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <div class="p-size">
                      <h4>Kích thước:</h4>
                      <div
                        id="sizeProduct"
                        class="btn-group btn-group-sm"
                      ></div>
                    </div>
                    <div class="p-color">
                      <h4>Màu:</h4>
                      <div class="btn-group btn-group-sm">
                        <button type="button" class="btn">Trắng</button>
                        <button type="button" class="btn">Đen</button>
                        <button type="button" class="btn">Cam</button>
                      </div>
                    </div>
                    <div class="action">
                      <a class="btn" href="#"
                        ><i class="fa fa-shopping-bag"></i>Mua Ngay</a
                      >
                      <a class="btn" href="#"
                        ><i class="fa fa-shopping-cart"></i>Thêm vào giỏ</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row product-detail-bottom">
              <div class="col-lg-12">
                <ul class="nav nav-pills nav-justified">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      data-toggle="pill"
                      href="#description"
                      >Mô tả</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#specification"
                      >Chi tiết</a
                    >
                  </li>
                  
                </ul>

                <div class="tab-content">
                  <div id="description" class="container tab-pane active">
                    <h4>Mô tả sản phẩm</h4>
                    <p id="desProduct"></p>
                  </div>
                  <div id="specification" class="container tab-pane fade">
                    <h4>Chi tiết sản phẩm</h4>
                    <ul>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                  </div>
                  <div id="reviews" class="container tab-pane fade">
                    
                    <form
                      action="/san-pham/comment/createcomment"
                      method="post"
                    >
                      <div class="reviews-submit">
                        <div class="field">
                          <h4>Viết đánh giá của bạn:</h4>
                          <div class="control">
                            <div class="rating">
                              <input
                                type="radio"
                                name="star"
                                id="star1"
                                value="5"
                              /><label for="star1"> </label>
                              <input
                                type="radio"
                                name="star"
                                id="star2"
                                value="4"
                              /><label for="star2"> </label>
                              <input
                                type="radio"
                                name="star"
                                id="star3"
                                value="3"
                              /><label for="star3"> </label>
                              <input
                                type="radio"
                                name="star"
                                id="star4"
                                value="2"
                              /><label for="star4"> </label>
                              <input
                                type="radio"
                                name="star"
                                id="star5"
                                value="1"
                              /><label for="star5"> </label>
                            </div>
                          </div>
                        </div>

                        <div class="row form clearfix">
                          <div class="col-sm-6">
                            <input name="ten" type="text" placeholder="Tên" />
                          </div>
                          <div class="col-sm-6">
                            <input
                              name="email"
                              type="email"
                              placeholder="Email"
                            />
                          </div>
                          <div class="col-sm-12">
                            <textarea
                              name="content"
                              placeholder="Đánh giá..."
                            ></textarea>
                          </div>
                          <input
                            type="hidden"
                            name="idProduct"
                            value="<%=itemPro.MADONG%>"
                          />
                          <input
                            type="hidden"
                            name="nameProduct"
                            value="<%=itemPro.TENDONG%>"
                          />
                          <div class="col-sm-12">
                            <button>Gửi</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div class="product">
              <div class="section-header">
                <h1>Nón tương tự</h1>
              </div>

              <div
                class="row align-items-center product-slider product-slider-3"
              >
                
              </div>
            </div>
          </div>

          {/* <!-- Side Bar Start --> */}
          <div class="col-lg-4 sidebar">
            <div class="sidebar-widget category">
              <h2 class="title">Danh mục</h2>
              <nav class="navbar bg-light">
                <ul class="navbar-nav">
                  
                </ul>
              </nav>
            </div>

            <div class="sidebar-widget widget-slider">
              <h3 style="text-align: center; color: #ff6f61">RƯỢU NỔI BẬT</h3>
              <div class="sidebar-slider normal-slider">
                
              </div>
            </div>

            <div class="sidebar-widget brands">
              <h2 class="title">Thương hiệu</h2>
              <ul>
                
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
    {/* <!-- Product Detail End --> */}

    {/* <!-- Brand Start --> */}
    <div class="brand">
      <div class="container-fluid">
        <div class="brand-slider">
          <div class="brand-item"><img src="../img/brand-1.png" alt="" /></div>
          <div class="brand-item"><img src="../img/brand-2.png" alt="" /></div>
          <div class="brand-item"><img src="../img/brand-3.png" alt="" /></div>
          <div class="brand-item"><img src="../img/brand-4.png" alt="" /></div>
          <div class="brand-item"><img src="../img/brand-5.png" alt="" /></div>
          <div class="brand-item"><img src="../img/brand-6.png" alt="" /></div>
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
                <p>
                  <i class="fa fa-map-marker"></i>Trảng Bàng, Tây Ninh, Việt Nam
                </p>
                <p><i class="fa fa-envelope"></i>huyyntran@gmail.com</p>
                <p><i class="fa fa-phone"></i>+0333 964 846</p>
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
              <a href="https:www.facebook.com/ybx1802">Fullface Store</a>. All
              Rights Reserved
            </p>
          </div>

          <div class="col-md-6 template-by">
            <p>Developed By <a href="https://htmlcodex.com">Huy JR</a></p>
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
