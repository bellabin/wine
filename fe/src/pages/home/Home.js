
import React, { useState, useEffect } from 'react'
import { GetListProduct } from '../../services/Product'
import { GetListWinetype } from '../../services/Product'

import '../../assets/css/style.css'

export default function HomePage() {
  const [listProducts, setListProducts] = useState([])

  //demo cach goi api
  useEffect(() => {
    async function fetchListProducts () {
      const products = (await GetListProduct()).data

      setListProducts(products)
    }
    
    fetchListProducts()
  }, [listProducts])

  //thay vi thang kia dung the <% %>
  //thay = {product.MADONG}

  const Card = (product) => {
    return (
      <div>
        <p>Ma dong {product.MADONG}</p>
        <p>Ten dong {product.TENDONG}</p> 
      </div>
    )
  }
  //////
  const [listWinetype, setListWinetype] = useState([])

  //demo cach goi api
  useEffect(() => {
    async function fetchListWinetype () {
      const winetype = (await GetListWinetype()).data

      setListWinetype(winetype)
    }
    
    fetchListWinetype()
  }, [listWinetype])

  //thay vi thang kia dung the <% %>
  //thay = {product.MADONG}

  const Cardwinetype = (winetype) => {
    return (
      <div>
        <p> {winetype.TENLOAI}</p> 
      </div>
    )
  }
  return (
    
    <div>
    
    <div class="header">
      <div class="container">
        <div class="logo">
          <a href=""><img src="/img/logoReport.PNG" alt="" /></a>
        </div>

        <div class="center-bar">
          <nav>
            <ul>
              <li>
                <a href="">Trang chủ</a>
              </li>
              <li><a href="/product">Sản phẩm</a></li>
              <li><a href="/gio-hang">Giỏ hàng</a></li>
              <li><a href="users/tai-khoan">Tài khoản</a></li>
              <li><a href="">Blog</a></li>

              <li class="sign-in">
                <a href="/users/dang-nhap">Sign in</a> 
                <div class="dropdown-menu" id="sign-in">
                  <a href="/users/dang-nhap" class="dropdown-item">Đăng nhập</a>
                  <a href="/users/dang-ky" class="dropdown-item">Đăng ký</a>
                  <a href="/Sign-in-admin" class="dropdown-item">Admin</a>
                </div>
              </li>
              <li><a href="/Sign-in-admin">Admin</a></li> 
            </ul>
          </nav>
        </div>
      </div>
    </div>

    {/* <!-- Bottom Bar Start --> */}
    <div class="bottom-bar">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-3">
            <div class="logo">
              <a href="/"> </a>
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
                <span class="cart-number">(0)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Bottom Bar End --> */}

    <main id="main">
      {/* <!-- Main Slider Start --> */}

      <div class="types">
        <div class="container">
          <div class="Liquor">
            <a href=""><img src="/img/wine-content1.jpg" alt="" /></a>
            <div class="content">
              <h1>Liquor</h1>
              <span class="amounts">11 items</span>
            </div>
          </div>

          <div class="Wine">
            <a href=""><img src="/img/wine-content3.jpg" alt="" /></a>
            <div class="content">
              <h1>Wine</h1>
              <span class="amounts">11 items</span>
            </div>
          </div>

          <div class="Beer">
            <a href=""><img src="/img/wine-content2.jpg" alt="" /></a>
            <div class="content">
              <h1>Beer</h1>
              <span class="amounts">11 items</span>
            </div>
          </div>

          <div class="Accessories">
            <a href=""><img src="/img/wine-content4.jpg" alt="" /></a>
            <div class="content">
              <h1>Accessories</h1>
              <span class="amounts">11 items</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!--  <div class="header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <nav class="navbar bg-light">
                <ul class="navbar-nav">
                  { <% for (cat of listCat) { %>
                  <li class="nav-item">
                    <a class="nav-link" href="/danh-muc/<%=cat.TENLOAI%>"
                      ><i class="fa fa-wine-bottle"></i>Rượu <%= cat.TENLOAI
                      %></a
                    >
                  </li>
                  <% } %> 
                    
                  listWinetype && listWinetype.length && listWinetype.map(winetype => Cardwinetype(winetype))
                  }
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
                    <p></p>
                    <a class="btn" href="/danh-muc/AGV"
                      ><i class="fa fa-shopping-cart"></i>Shop Now</a>
                  </div>
                </div>
                <div class="header-slider-item">
                  <img
                    src="https://hn.arrowpress.net/lusion/wp-content/uploads/2020/11/felix-w-aNMMayob3pw-unsplash-500x367.jpg.webp"
                    alt="Slider Image"
                  />
                  <div class="header-slider-caption">
                    <p></p>
                    <a class="btn" href="/danh-muc/Shoei"
                      ><i class="fa fa-shopping-cart"></i>Shop Now</a>
                  </div>
                </div>
                <div class="header-slider-item">
                  <img
                    src="https://hn.arrowpress.net/lusion/wp-content/uploads/2020/11/5_VerresCarafe-copie-1024x0-1-500x367.jpg.webp"
                    alt="Slider Image"
                  />
                  <div class="header-slider-caption">
                    <p></p>
                    <a class="btn" href="/danh-muc/Royal"
                      ><i class="fa fa-shopping-cart"></i>Shop Now</a>
                  </div>
                </div>

                <div class="header-slider-item">
                  <img
                    src="https://hn.arrowpress.net/lusion/wp-content/uploads/2020/11/mika-houtmeyers-ttNVVqxg_xE-unsplash-500x367.jpg.webp"
                    alt="Slider Image"
                  />
                  <div class="header-slider-caption">
                    <p></p>
                    <a class="btn" href="/danh-muc/Royal"
                      ><i class="fa fa-shopping-cart"></i>Shop Now</a>
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
                    <p></p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> --> */}
      {/* <!-- Main Slider End --> */}

      {/* <!-- Brand Start --> */}
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
      {/* <!-- Brand End --> */}
      {/* <!-- Category Start--> */}
      <div class="category">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <div class="category-item ch-400">
                <img src="img/banner8.jpg" />
                <a class="category-name" href="">
                  <p>Nothing is impossible</p>
                </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="category-item ch-250">
                <img src="img/banner3.jpg" />
                <a class="category-name" href="">
                  <p>Ride or die</p>
                </a>
              </div>
              <div class="category-item ch-150">
                <img src="img/banner9.jpg" />
                <a class="category-name" href="">
                  <p>I love scene beautfiull</p>
                </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="category-item ch-150">
                <img src="img/banner10.jpg" />
                <a class="category-name" href="">
                  <p>My brothers and me</p>
                </a>
              </div>
              <div class="category-item ch-250">
                <img src="img/banner5.jpg" />
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
                <img src="img/banner11.jpg" />
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
      {/* <!-- Category End--> */}
      {/* <!-- Feature Start--> */}
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
      {/* <!-- Feature End--> */}

      {/* <!-- Call to Action Start --> */}
      <div class="call-to-action">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h1>Liên hệ với tôi qua Email</h1>
            </div>
            <div class="col-md-6">
              <a href="">HoangKhang1999ag@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Call to Action End --> */}

      {/* <!-- Featured Product Start BY API --> */}
      <div class="featured-product product">
        <div class="container-fluid">
          <div class="section-header">
            <h1>HÀNG HOT!!!</h1>
          </div>
          <div id="non-noi-bat"></div>
        </div>
      </div>
      {/* <!-- Featured Product End BY API --> */}

      {/* <!-- Newsletter Start --> */}
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
      {/* <!-- Newsletter End --> */}

      {/* <!-- Recent Product Start --> */}
      {/* <!-- 
      <div class="recent-product product">
        <div class="container-fluid">
          <div class="section-header">
            <h1>HÀNG MỚI VỀ</h1>
          </div>
          <div id="non-moi-ve" class="row align-items-center"></div>
        </div>
      </div> 
      --> */}
      {/* <!-- Recent Product End --> */}

      {/* <!--Khuyen mai--> */}
      <div class="recent-product product">
        <div class="container-fluid">
          <div class="section-header">
            <h1>KHUYẾN MÃI KHỦNG!!!</h1>
          </div>
          <div id="hang-khuyen-mai" class="row align-items-center"></div>
        </div>
      </div>

      {/* <!--End of Khuyen mai--> */}

      {/* <!--Banner--> */}
      <div class="Liqueur-spirit">
        <div class="container">
          <div class="content">
            <h1>Liqueur & Spirits</h1>
            <span
              >In addition to the 2 large categories of Wine and Whiskey, you
              will quickly discover the world of other drinks in this category
              with just one click.</span>
          </div>

          <div class="wine-list">
            <div class="items">
              <a href="/danh-muc/Vodka"
                ><img
                  src="https://hn.arrowpress.net/lusion/wp-content/uploads/2020/11/img-drinks-1.png.webp"
                  alt=""
              /></a>
              <span>Vodka</span>
            </div>
            <div class="items">
              <a href="/danh-muc/Cognag"
                ><img
                  src="https://hn.arrowpress.net/lusion/wp-content/uploads/2020/11/img-drinks-2.png.webp"
                  alt=""
              /></a>
              <span>Cognac</span>
            </div>
            <div class="items">
              <a href="/danh-muc/Grappa"
                ><img
                  src="https://hn.arrowpress.net/lusion/wp-content/uploads/elementor/thumbs/img-drinks-3-p3rffircgjwa94zlmt189ah13wa2vgxao261ketli8.png"
                  alt=""
              /></a>
              <span>Grappa</span>
            </div>
            <div class="items">
              <a href="/danh-muc/Scotch"
                ><img
                  src="https://hn.arrowpress.net/lusion/wp-content/uploads/2020/11/img-drinks-4.png.webp"
                  alt=""
              /></a>
              <span>Scotch</span>
            </div>
            <div class="items">
              <a href="/danh-muc/Tequilla"
                ><img
                  src="https://hn.arrowpress.net/lusion/wp-content/uploads/2020/11/img-drinks-5.png.webp"
                  alt=""
              /></a>
              <span>Tequila</span>
            </div>
            <div class="items">
              <a href="/danh-muc/Rum"
                ><img
                  src="https://hn.arrowpress.net/lusion/wp-content/uploads/2020/11/img-drinks-6.png.webp"
                  alt=""
              /></a>
              <span>Rum</span>
            </div>
          </div>
        </div>
      </div>

      {/* <!--End of Banner--> */}

      {/* <!--intro--> */}
      <div class="banner">
        <div class="container">
          <div class="timer">
            <div class="content">
              <span class="first">DEALS OF THE MONTH</span>
              <h1>Savvy Savings</h1>
              <button>Shop now</button>
            </div>
          </div>

          <div class="right">
            <div class="top-right">
              <div class="content">
                <h1>15 Whisky Cocktail You'll Fall For</h1>
                <span
                  >We partnered with talented Ontario bartenders to create this
                  autumn-inspired whisky cocktail collection.</span><br />
                <button>Get the recipes</button>
              </div>
            </div>

            <div class="bottom-right">
              <div class="Sale">
                <div class="content">
                  <span>LOCALLY MADE</span>
                  <h1>Sale Now</h1>
                  <button>Shop now</button>
                </div>
              </div>

              <div class="vintages">
                <div class="content">
                  <span>NEW ARRIVALS</span>
                  <h1>Vintages</h1>
                  <button>Shop now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--end of intro--> */}
    </main>

    {/* <!-- Footer Start --> */}
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
                  <a href="https://www.facebook.com/ybx1802"><i class="fab fa-facebook-f"></i></a>
                  <a href="https://www.linkedin.com/in/huy-tran-57777b202/"><i class="fab fa-linkedin-in"></i></a>
                  <a href="https://www.instagram.com/huy_jr18"><i class="fab fa-instagram"></i></a>
                  <a
                    href="https://www.youtube.com/channel/UCctcteJFmH4Wxc8npHW9Cog"><i class="fab fa-youtube"></i></a>
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

    {/* <!-- Back to Top --> */}
    <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

    </div>
  )
}
