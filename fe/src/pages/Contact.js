import React from 'react'

export default function ContactPage() {
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
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item"><a href="/san-pham">Products</a></li>
                <li class="breadcrumb-item active">Contact</li>
            </ul>
        </div>
    </div>
    {/* <!-- Breadcrumb End --> */}

    {/* <!-- Contact Start --> */}
    <div class="contact">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-4">
                    <div class="contact-info">
                        <h2>About Me</h2>
                        <h3><i class="fa fa-map-marker"></i>Quận 12, TP Hồ Chí Minh</h3>
                        <h3><i class="fa fa-envelope"></i>huyyntran@gmail.com</h3>
                        <h3><i class="fa fa-phone"></i>0333 964 846</h3>
                        <div class="social">
                            <a href=""><i class="fab fa-twitter"></i></a>
                            <a href="https://www.facebook.com/ybx1802" target="_blank"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://www.linkedin.com/in/huy-tran-57777b202/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://www.instagram.com/huy_jr18/" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.youtube.com/channel/UCC9y0ezePwQHINCyIvQn0WA" target="_blank"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="contact-info">
                        <h2>About Store</h2>
                        <h3><i class="fas fa-info"></i>Backend: NodeJS</h3>
                        <h3><i class="fas fa-info"></i>MVC NodeJS</h3>
                        <h3><i class="fas fa-info"></i>RESTFUL API</h3>
                        <div class="social">
                            <a href=""><i class="fab fa-twitter"></i></a>
                            <a href="https://www.facebook.com/ybx1802" target="_blank"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://www.linkedin.com/in/huy-tran-57777b202/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://www.instagram.com/huy_jr18/" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.youtube.com/channel/UCC9y0ezePwQHINCyIvQn0WA" target="_blank"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="contact-form">
                        <form>
                            <div class="row">
                                <div class="col-md-6">
                                    <input type="text" class="form-control" placeholder="Your Name" />
                                </div>
                                <div class="col-md-6">
                                    <input type="email" class="form-control" placeholder="Your Email" />
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Subject" />
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" rows="5" placeholder="Message"></textarea>
                            </div>
                            <div><button class="btn" type="submit">Send Message</button></div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248043701!2d-118.24532098539802!3d34.05071312525937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c648fa1d4803%3A0xdec27bf11f9fd336!2s123%20S%20Los%20Angeles%20St%2C%20Los%20Angeles%2C%20CA%2090012%2C%20USA!5e0!3m2!1sen!2sbd!4v1585634930544!5m2!1sen!2sbd"
                            frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact End --> */}

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
