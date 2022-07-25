import React from 'react'

export default function ProductDetailPage() {
  return (
    <div>
        <div className="top-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <i className="fa fa-envelope"></i> huyyntran@.com
          </div>
          <div className="col-sm-6">
            <i className="fa fa-phone-alt"></i> +0333 964 846
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
              <a href="/" className="nav-item nav-link active">Trang Chủ</a>
              <a href="/san-pham" className="nav-item nav-link">Sản Phẩm</a>
              {/* <!-- <a href="product-detail.html" className="nav-item nav-link">Product Detail</a> --> */}
              <a href="/gio-hang" className="nav-item nav-link">Giỏ Hàng</a>
              <a href="/thanh-toan" className="nav-item nav-link">Thanh Toán</a>
              <a href="/tai-khoan" className="nav-item nav-link"
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
                <img src="../img/logo.png" alt="Logo" />
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
              <a href="wishlist.html" className="btn wishlist">
                <i className="fa fa-heart"></i>
                <span>(0)</span>
              </a>
              <a href="cart.html" className="btn cart">
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
          <li className="breadcrumb-item"><a href="/san-pham">Sản phẩm</a></li>
          <li className="breadcrumb-item active"><%=breadcrumb%></li>
        </ul>
      </div>
    </div>
    {/* <!-- Breadcrumb End --> */}

    {/* <!-- Product Detail Start --> */}
    <div className="product-detail">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div className="product-detail-top">
              <div id="chi-tiet-san-pham" className="row align-items-center">
                <div className="col-md-5">
                  <div className="product-slider-single normal-slider">
                    
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="product-content">
                    <div className="title">
                      <h2 id="nameProduct"></h2>
                    </div>
                    <div className="ratting">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="price">
                      <h4>Giá:</h4>
                      <p id="priceProduct"></p>
                    </div>
                    <div className="quantity">
                      <h4>Số lượng:</h4>
                      <div className="qty">
                        <button className="btn-minus">
                          <i className="fa fa-minus"></i>
                        </button>
                        <input type="text" value="1" />
                        <button className="btn-plus">
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <div className="p-size">
                      <h4>Kích thước:</h4>
                      <div
                        id="sizeProduct"
                        className="btn-group btn-group-sm"
                      ></div>
                    </div>
                    <div className="p-color">
                      <h4>Màu:</h4>
                      <div className="btn-group btn-group-sm">
                        <button type="button" className="btn">Trắng</button>
                        <button type="button" className="btn">Đen</button>
                        <button type="button" className="btn">Cam</button>
                      </div>
                    </div>
                    <div className="action">
                      <a className="btn" href="#"
                        ><i className="fa fa-shopping-bag"></i>Mua Ngay</a>
                      <a className="btn" href="#"
                        ><i className="fa fa-shopping-cart"></i>Thêm vào giỏ</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row product-detail-bottom">
              <div className="col-lg-12">
                <ul className="nav nav-pills nav-justified">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="pill"
                      href="#description"
                      >Mô tả</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#specification"
                      >Chi tiết</a>
                  </li>
                  
                </ul>

                <div className="tab-content">
                  <div id="description" className="container tab-pane active">
                    <h4>Mô tả sản phẩm</h4>
                    <p id="desProduct"></p>
                  </div>
                  <div id="specification" className="container tab-pane fade">
                    <h4>Chi tiết sản phẩm</h4>
                    <ul>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                  </div>
                  <div id="reviews" className="container tab-pane fade">
                    
                    <form
                      action="/san-pham/comment/createcomment"
                      method="post"
                    >
                      <div className="reviews-submit">
                        <div className="field">
                          <h4>Viết đánh giá của bạn:</h4>
                          <div className="control">
                            <div className="rating">
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

                        <div className="row form clearfix">
                          <div className="col-sm-6">
                            <input name="ten" type="text" placeholder="Tên" />
                          </div>
                          <div className="col-sm-6">
                            <input
                              name="email"
                              type="email"
                              placeholder="Email"
                            />
                          </div>
                          <div className="col-sm-12">
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
                          <div className="col-sm-12">
                            <button>Gửi</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="product">
              <div className="section-header">
                <h1>Nón tương tự</h1>
              </div>

              <div
                className="row align-items-center product-slider product-slider-3"
              >
                
              </div>
            </div>
          </div>

          {/* <!-- Side Bar Start --> */}
          <div className="col-lg-4 sidebar">
            <div className="sidebar-widget category">
              <h2 className="title">Danh mục</h2>
              <nav className="navbar bg-light">
                <ul className="navbar-nav">
                  
                </ul>
              </nav>
            </div>

            <div className="sidebar-widget widget-slider">
              <h3 style={{textAlign: 'center', color: '#ff6f61'}}>RƯỢU NỔI BẬT</h3>
              <div className="sidebar-slider normal-slider">
                
              </div>
            </div>

            <div className="sidebar-widget brands">
              <h2 className="title">Thương hiệu</h2>
              <ul>
                
              </ul>
            </div>

            <div className="sidebar-widget tag">
              <h2 className="title">Tags Cloud</h2>
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
    <div className="brand">
      <div className="container-fluid">
        <div className="brand-slider">
          <div className="brand-item"><img src="../img/brand-1.png" alt="" /></div>
          <div className="brand-item"><img src="../img/brand-2.png" alt="" /></div>
          <div className="brand-item"><img src="../img/brand-3.png" alt="" /></div>
          <div className="brand-item"><img src="../img/brand-4.png" alt="" /></div>
          <div className="brand-item"><img src="../img/brand-5.png" alt="" /></div>
          <div className="brand-item"><img src="../img/brand-6.png" alt="" /></div>
        </div>
      </div>
    </div>
    {/* <!-- Brand End --> */}

    {/* <!-- Footer Start --> */}
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h2>Liên Hệ</h2>
              <div className="contact-info">
                <p>
                  <i className="fa fa-map-marker"></i>Trảng Bàng, Tây Ninh, Việt Nam
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
