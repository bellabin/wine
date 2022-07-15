import React from 'react'

export default function WishListPage() {
  return (
    <div>
        {/* <!-- Top bar Start --> */}
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
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav mr-auto">
                        <a href="/" class="nav-item nav-link active">Trang Chủ</a>
                        <a href="/san-pham" class="nav-item nav-link">Sản Phẩm</a>
                        <!-- <a href="product-detail.html" class="nav-item nav-link">Product Detail</a> -->
                        <a href="/gio-hang/" class="nav-item nav-link">Giỏ Hàng</a>
                        <a href="/thanh-toan" class="nav-item nav-link">Thanh Toán</a>
                        <a href="/users/tai-khoan" class="nav-item nav-link">Tài khoản của bạn</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Trang khác</a>
                            <div class="dropdown-menu">
                                <a href="/wishlist" class="dropdown-item">Sản phẩm đã thích</a>
                                <a href="/lien-he" class="dropdown-item">Liên hệ</a>
                            </div>
                        </div>
                    </div>
                    <div class="navbar-nav ml-auto">
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Tài khoản</a>
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
                            <img src="img/logo.png" alt="Logo">
                        </a>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="search">
                        <input type="text" placeholder="Search">
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
    {/* <!-- Bottom Bar End --> */}

    {/* <!-- Breadcrumb Start --> */}
    <div class="breadcrumb-wrap">
        <div class="container-fluid">
            <ul class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Products</a></li>
                <li class="breadcrumb-item active">Wishlist</li>
            </ul>
        </div>
    </div>
    {/* <!-- Breadcrumb End --> */}

    {/* <!-- Wishlist Start --> */}
    <div class="wishlist-page">
        <div class="container-fluid">
            <div class="wishlist-page-inner">
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead class="thead-dark">
                                    <tr>
                                        <th>Tên sản phẩm</th>
                                        <th>Giá</th>
                                        <th>Số lượng</th>
                                        <th>Thêm vào giỏ</th>
                                        <th>Xóa</th>
                                    </tr>
                                </thead>
                                <tbody class="align-middle">
                                    <% for (let p of listPro) { %>
                                        <tr>
                                            <td>
                                                <div class="img">
                                                    <a href="#"><img src="/<%=p.imgProduct%>" alt="Image"></a>
                                                    <p>
                                                        <%=p.nameProduct%>
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <%=p.priceProduct.toLocaleString()%>
                                            </td>
                                            <td>
                                                <div class="qty">
                                                    <button class="btn-minus"><i class="fa fa-minus"></i></button>
                                                    <input type="text" value="1">
                                                    <button class="btn-plus"><i class="fa fa-plus"></i></button>
                                                </div>
                                            </td>
                                            <td><button class="btn-cart">Thêm</button></td>
                                            <td><button><i class="fa fa-trash"></i></button></td>
                                        </tr>
                                        <% } %>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Wishlist End --> */}

    {/* <!-- Footer Start --> */}
    <div class="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="footer-widget">
                        <h2>Liên Hệ</h2>
                        <div class="contact-info">
                            <p><i class="fa fa-map-marker"></i>Trảng Bàng, Tây Ninh, Việt Nam</p>
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
                                <a href="https://www.facebook.com/ybx1802"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://www.linkedin.com/in/huy-tran-57777b202/"><i class="fab fa-linkedin-in"></i></a>
                                <a href="https://www.instagram.com/huy_jr18"><i class="fab fa-instagram"></i></a>
                                <a href="https://www.youtube.com/channel/UCctcteJFmH4Wxc8npHW9Cog"><i class="fab fa-youtube"></i></a>
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
                    <p>Copyright &copy; <a href="https:www.facebook.com/ybx1802">Fullface Store</a>. All Rights Reserved</p>
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
