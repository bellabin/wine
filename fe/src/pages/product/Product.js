import React, { useState, useEffect } from 'react'
import { GetListProduct, GetListWinetype } from '../../services/Product'

export default function Product() {
  //Goi api -> show data len tren giao dien
  //1. Goi API get list products
  const [listProducts, setListProducts] = useState([])

  
  useEffect(() => {
    async function fetchListProducts () {
      const products = (await GetListProduct()).data

      setListProducts(products)
    }
    
    fetchListProducts()
  }, [listProducts])


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

  const Card = (product) => {
    return (
      <div>
        <p>Ma dong {product.MADONG}</p>
        <p>Ten dong {product.TENDONG}</p> 
      </div>
    )
  }

  const Cardwinetype = (listWinetype) => {
    return (
      listWinetype && listWinetype.length && listWinetype.map(winetype =>
      <li className="nav-item">
        <a className="nav-link" href={"/danh-muc/" + winetype.TENLOAI}
            ><i className="fa fa-wine-bottle"></i>RƯỢU {winetype.TENLOAI}
        </a>
      </li>)  
    )
  }
  

  return (
    <div>
      <div className="top-bar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <i className="fa fa-envelope"></i> tamtvh96@gmail
            </div>
            <div className="col-sm-6">
              <i className="fa fa-phone-alt"></i> +963548171
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
              data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse">
              <div className="navbar-nav mr-auto">
                <a href="/home" className="nav-item nav-link">Trang Chủ</a>
                <a href="/product" className="nav-item nav-link">Sản Phẩm</a>
                {/* <!-- <a href="product-detail.html" class="nav-item nav-link">Product Detail</a> --> */}
                <a href="/gio-hang" className="nav-item nav-link">Giỏ Hàng</a>
                <a href="/users/tai-khoan" className="nav-item nav-link">Tài khoản của bạn</a>
              </div>
              <div className="navbar-nav ml-auto">
              
              </div>
            </div>
          </nav>
        </div>
      </div>
    {/* <!-- Nav Bar End --> */}

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
                            autoComplete="off"/>
                            <button><i className="fa fa-search"></i></button>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="product-short">
                        
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="product-price-range">
                        <input
                            id="myInput"
                            type="email"
                            placeholder="Tìm kiếm tên sản phẩm"
                            autoComplete="off"/>
                            <button><i className="fa fa-search"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>  
              {/* <!-- Pagination Start --> */}
            
              {/* <!-- Pagination END --> */}
              
          {/* <!-- Side Bar Start --> */}
          <div className="col-lg-4 sidebar">
            <div className="sidebar-widget category">
              <h2 className="title">Danh mục</h2>
              <nav className="navbar bg-light">
              <ul className="navbar-nav">
                {Cardwinetype(listWinetype)}

                  {/* <% for (cat of listCat) { %>
                  <li class="nav-item">
                    <a class="nav-link" href="/danh-muc/<%=cat.TENLOAI%>"
                      ><i class="fa fa-wine-bottle"></i>RƯỢU <%= cat.TENLOAI
                      %></a
                    >
                    </li>
                    <% } %> */}
              </ul>
              </nav>
            </div>
                

{/* h3? */}
            <div className="sidebar-widget widget-slider">
              <h3 style={{textAlign:'center', color:'#ff6f61'}}>
                RƯỢU NỔI BẬT
              </h3>
              <div className="sidebar-slider normal-slider">
                {/* <% for (product of listProPopular) { %>
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
                      <img
                            src="../<%=product.HINHANH%>"
                            alt="Product Image"
                          />
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
                          <%=product.GIA.toLocaleString('vi-VN')%>
                          <span>₫</span>
                        </h3>
                      </div>
                    </div>
                    <% } %> */}
              </div>
            </div>

            <div className="sidebar-widget brands">
              <h2 className="title">Thương hiệu</h2>
              <ul>
                <li><a href="#">Chivas </a><span>(45)</span></li>
                <li><a href="#">Remy Martin </a><span>(34)</span></li>
                <li><a href="#">Absolut </a><span>(67)</span></li>
                <li><a href="#">Martell</a><span>(74)</span></li>
                <li><a href="#">Vang Pháp</a><span>(89)</span></li>
                <li><a href="#">Camus</a><span>(28)</span></li>
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
              

             

              
            
        

        {/* <!-- Brand Start --> */}
        <div className="brand">
          <div className="container-fluid">
            <div className="brand-slider">
              <div className="brand-item">
                <a href="/danh-muc/agv"><img src="img/hennessy.jpg" alt="" /></a>
              </div>
              <div className="brand-item">
                <a href="/danh-muc/shoei"><img src="img/bacardi.jpg" alt="" /></a>
              </div>
              <div className="brand-item">
                <a href="/danh-muc/arai"><img src="img/chivas.jpg" alt="" /></a>
              </div>
              <div className="brand-item">
                <a href="/danh-muc/torc"><img src="img/camus.jpg" alt="" /></a>
              </div>
              <div className="brand-item">
                <a href="/danh-muc/yohe"><img src="img/ciroc.png" alt="" /></a>
              </div>
              <div className="brand-item">
                <a href="/danh-muc/yohe"
                  ><img src="img/raynal.jpg" alt="rượu raynal"
                /></a>
              </div>
              <div className="brand-item">
                <a href="/danh-muc/yohe"><img src="img/martin.jpg" alt="" /></a>
              </div>
            </div>
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
                <p>
                  <i className="fa fa-map-marker"></i>Thành Phố Hồ Chí Minh
                </p>
                <p><i className="fa fa-envelope"></i>tamtvh96@gmail</p>
                <p><i className="fa fa-phone"></i>+963548171</p>
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
              <a href="https:www.facebook.com/ybx1802">RƯỢU NGON STORE</a>. All
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
    <a href="#" className="back-to-top"><i class="fa fa-chevron-up"></i></a>
    </div>
  )
}
