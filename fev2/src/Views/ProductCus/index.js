import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { KeyNavigate } from '../../helper/KeyNavigate'

export default class ProductCus extends Component {
    render() {
        return (
            <div>
                {/* <!-- Top bar Start --> */}
                <div className="top-bar">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <i className="fa fa-envelope"></i> tamtvh96@gmail.com
                            </div>
                            <div className="col-sm-6"><i className="fa fa-phone-alt"></i> +963548171</div>
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
                                    <Link to={KeyNavigate.Cart} className="nav-item nav-link">Giỏ Hàng</Link>

                                    <Link to={KeyNavigate.Account} className="nav-item nav-link"
                                    >Tài khoản của bạn</Link>
                                </div>
                                <div className="navbar-nav ml-auto"></div>
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
                            <li className="breadcrumb-item"><a href="/san-pham">Sản phẩm</a></li>
                            {/* <li className="breadcrumb-item active"><%=breadcrumb%></li> */}
                        </ul>
                    </div>
                </div>
                {/* <!-- Breadcrumb End --> */}

                {/* <!-- Product List Start --> */}
                <div className="product-view">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="product-view-top">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="product-search">
                                                        <input
                                                            id="myInput"
                                                            type="email"
                                                            placeholder="Tìm kiếm tên sản phẩm"
                                                        />
                                                        <button><i className="fa fa-search"></i></button>
                                                    </div>
                                                </div>

                                                {/* <!-- <div className="col-md-4">
                      <div className="product-price-range">
                        <div className="dropdown" style="display: flex">
                          <p>Mức giá</p>
                          <select>
                            <option>0$ - 20$</option>
                            <option>20$ - 50$</option>
                            <option>50$ - 100$</option>
                            <option>Trên 100$</option>
                          </select>
                        </div>
                      </div>
                    </div> --> */}
                                                <div className="col-md-4"></div>
                                                <div className="col-md-4">
                                                    <div className="product-price-range"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- danh sách sản phẩm theo loại đc nhúng tại đây --> */}
                                    <div className="col-md-12">
                                        <div id="myTable" className="row"></div>
                                    </div>
                                </div>

                                {/* <!-- Pagination Start --> */}
                                {/* <!-- <div className="col-md-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabindex="-1">Previous</a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div> --> */}
                                {/* <!-- Pagination Start --> */}
                            </div>

                            {/* <!-- Side Bar Start --> */}
                            <div className="col-lg-4 sidebar">
                                <div className="sidebar-widget category">
                                    <h2 className="title">Danh mục</h2>
                                    <nav className="navbar bg-light">
                                        <ul className="navbar-nav">
                                            {/* <% for (cat of listCat) { %>
                  <li className="nav-item">
                    <a className="nav-link" href="/danh-muc/<%=cat.TENLOAI%>"
                      ><i className="fa fa-wine-bottle"></i>RƯỢU <%= cat.TENLOAI
                      %></a
                    >
                  </li>
                  <% } %> */}
                                        </ul>
                                    </nav>
                                </div>

                                <div className="sidebar-widget widget-slider">
                                    <h3 style={{ textAlign: 'center', color: '#ff6f61' }}>RƯỢU HOT!!!</h3>
                                    <div className="sidebar-slider normal-slider">
                                        {/* <% for (product of listProPopular) { %>
                <div className="product-item">
                  <div className="product-title">
                    <a href="#"> <%=product.TENDONG%> </a>
                    <div className="ratting">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                  <div className="product-image">
                    <a href="product-detail.html">
                      <img src="../<%=product.HINHANH%>" alt="Product Image" />
                    </a>
                    <div className="product-action">
                      <a href="#"><i className="fa fa-cart-plus"></i></a>
                      <a href="#"><i className="fa fa-heart"></i></a>
                      <a className="slug" href="/san-pham/<%=product.TENDONG%>"
                        ><i className="fa fa-search"></i
                      ></a>
                    </div>
                  </div>
                  <div className="product-price">
                    <h3>
                      <%=product.GIA.toLocaleString('en-US')%> <span> $</span>
                    </h3>
                    <a className="btn" href=""
                      ><i className="fa fa-shopping-cart"></i>Mua Ngay</a>
                  </div>
                </div>
                <% } %> */}
                                    </div>
                                </div>

                                <div className="sidebar-widget brands">
                                    <h2 className="title">Our Brands</h2>
                                    <ul>
                                        <li><a href="#">Nulla </a><span>(45)</span></li>
                                        <li><a href="#">Curabitur </a><span>(34)</span></li>
                                        <li><a href="#">Nunc </a><span>(67)</span></li>
                                        <li><a href="#">Ullamcorper</a><span>(74)</span></li>
                                        <li><a href="#">Fusce </a><span>(89)</span></li>
                                        <li><a href="#">Sagittis</a><span>(28)</span></li>
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
                {/* <!-- Product List End --> */}

                {/* <!-- Brand Start --> */}
                <div className="brand">
                    <div className="container-fluid">
                        <div className="brand-slider">
                            <div className="brand-item">
                                <a href="/danh-muc/agv"><img src="../img/hennessy.jpg" alt="" /></a>
                            </div>
                            <div className="brand-item">
                                <a href="/danh-muc/shoei"
                                ><img src="../img/bacardi.jpg" alt=""
                                    /></a>
                            </div>
                            <div className="brand-item">
                                <a href="/danh-muc/arai"><img src="../img/chivas.jpg" alt="" /></a>
                            </div>
                            <div className="brand-item">
                                <a href="/danh-muc/torc"><img src="../img/camus.jpg" alt="" /></a>
                            </div>
                            <div className="brand-item">
                                <a href="/danh-muc/yohe"><img src="../img/ciroc.png" alt="" /></a>
                            </div>
                            <div className="brand-item">
                                <a href="/danh-muc/yohe"
                                ><img src="../img/raynal.jpg" alt="rượu raynal"
                                    /></a>
                            </div>
                            <div className="brand-item">
                                <a href="/danh-muc/yohe"><img src="../img/martin.jpg" alt="" /></a>
                            </div>
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
                                        <p><i className="fa fa-map-marker"></i>Thành Phố Hồ Chí Minh</p>
                                        <p><i className="fa fa-envelope"></i>HoangKhang1999ag@gmail.com</p>
                                        <p><i className="fa fa-phone"></i>0338744192</p>
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
                                <p>Developed By <a href="https://htmlcodex.com">Hoang Tam</a></p>
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
}
