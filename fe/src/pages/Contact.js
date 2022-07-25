import React from 'react'

export default function ContactPage() {
  return (
    <div>
        {/* <!-- Top bar Start --> */}
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
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav mr-auto">
                        <a href="/" className="nav-item nav-link active">Trang Chủ</a>
                        <a href="/san-pham" className="nav-item nav-link">Sản Phẩm</a>
                        {/* <!-- <a href="product-detail.html" className="nav-item nav-link">Product Detail</a> --> */}
                        <a href="/gio-hang/" className="nav-item nav-link">Giỏ Hàng</a>
                        <a href="/thanh-toan" className="nav-item nav-link">Thanh Toán</a>
                        <a href="/users/tai-khoan" className="nav-item nav-link">Tài khoản của bạn</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Trang khác</a>
                            <div className="dropdown-menu">
                                <a href="/wishlist" className="dropdown-item">Sản phẩm đã thích</a>
                                <a href="/lien-he" className="dropdown-item">Liên hệ</a>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-nav ml-auto">
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Tài khoản</a>
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
                            <img src="img/logo.png" alt="Logo"/>
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="search">
                        <input type="text" placeholder="Search"></input>
                        <button><i className="fa fa-search"></i></button>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="user">
                        <a href="/wishlist" className="btn wishlist">
                            <i className="fa fa-heart"></i>
                            <span>(0)</span>
                        </a>
                        <a href="/gio-hang" className="btn cart">
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
                <li className="breadcrumb-item"><a href="/san-pham">Products</a></li>
                <li className="breadcrumb-item active">Contact</li>
            </ul>
        </div>
    </div>
    {/* <!-- Breadcrumb End --> */}

    {/* <!-- Contact Start --> */}
    <div className="contact">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4">
                    <div className="contact-info">
                        <h2>About Me</h2>
                        <h3><i className="fa fa-map-marker"></i>Quận 12, TP Hồ Chí Minh</h3>
                        <h3><i className="fa fa-envelope"></i>huyyntran@gmail.com</h3>
                        <h3><i className="fa fa-phone"></i>0333 964 846</h3>
                        <div className="social">
                            <a href=""><i className="fab fa-twitter"></i></a>
                            <a href="https://www.facebook.com/ybx1802" target="_blank"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.linkedin.com/in/huy-tran-57777b202/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://www.instagram.com/huy_jr18/" target="_blank"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.youtube.com/channel/UCC9y0ezePwQHINCyIvQn0WA" target="_blank"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="contact-info">
                        <h2>About Store</h2>
                        <h3><i className="fas fa-info"></i>Backend: NodeJS</h3>
                        <h3><i className="fas fa-info"></i>MVC NodeJS</h3>
                        <h3><i className="fas fa-info"></i>RESTFUL API</h3>
                        <div className="social">
                            <a href=""><i className="fab fa-twitter"></i></a>
                            <a href="https://www.facebook.com/ybx1802" target="_blank"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.linkedin.com/in/huy-tran-57777b202/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://www.instagram.com/huy_jr18/" target="_blank"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.youtube.com/channel/UCC9y0ezePwQHINCyIvQn0WA" target="_blank"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="contact-form">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" className="form-control" placeholder="Your Email" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                            </div>
                            <div><button className="btn" type="submit">Send Message</button></div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248043701!2d-118.24532098539802!3d34.05071312525937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c648fa1d4803%3A0xdec27bf11f9fd336!2s123%20S%20Los%20Angeles%20St%2C%20Los%20Angeles%2C%20CA%2090012%2C%20USA!5e0!3m2!1sen!2sbd!4v1585634930544!5m2!1sen!2sbd"
                            frameborder="0" style={{border:'0'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact End --> */}

    {/* <!-- Footer Start --> */}
    <div className="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="footer-widget">
                        <h2>Liên Hệ</h2>
                        <div className="contact-info">
                            <p><i className="fa fa-map-marker"></i>Trảng Bàng, Tây Ninh, Việt Nam</p>
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
                                <a href="https://www.facebook.com/ybx1802"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.linkedin.com/in/huy-tran-57777b202/"><i className="fab fa-linkedin-in"></i></a>
                                <a href="https://www.instagram.com/huy_jr18"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.youtube.com/channel/UCctcteJFmH4Wxc8npHW9Cog"><i className="fab fa-youtube"></i></a>
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
                        <img src="img/payment-method.png" alt="Payment Method" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="payment-security">
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
    <div className="footer-bottom">
        <div className="container">
            <div className="row">
                <div className="col-md-6 copyright">
                    <p>Copyright &copy; <a href="https:www.facebook.com/ybx1802">Fullface Store</a>. All Rights Reserved</p>
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
