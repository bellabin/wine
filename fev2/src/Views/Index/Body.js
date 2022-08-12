import React, { Component } from "react";
import HotProducts from "./HotProducts";
import TopPromo from "./TopPromo";

export default class Body extends Component {
  render() {
    return (
      <main id="main">
        {/* <div className="types">
          <div className="container">
            <div className="Liquor">
              <a href="">
                <img
                  src="/img/wine-content1.jpg"
                  width="200"
                  height="400"
                  alt=""
                />
              </a>
              <div className="content">
                <h1>Liquor</h1>
                <span className="amounts">11 items</span>
              </div>
            </div>

            <div className="Wine">
              <a href="">
                <img
                  src="/img/wine-content3.jpg"
                  width="200"
                  height="400"
                  alt=""
                />
              </a>
              <div className="content">
                <h1>Wine</h1>
                <span className="amounts">11 items</span>
              </div>
            </div>

            <div className="Beer">
              <a href="">
                <img
                  src="/img/wine-content2.jpg"
                  width="200"
                  height="400"
                  alt=""
                />
              </a>
              <div className="content">
                <h1>Beer</h1>
                <span className="amounts">11 items</span>
              </div>
            </div>

            <div className="Accessories">
              <a href="">
                <img
                  src="/img/wine-content4.jpg"
                  width="200"
                  height="400"
                  alt=""
                />
              </a>
              <div className="content">
                <h1>Accessories</h1>
                <span className="amounts">11 items</span>
              </div>
            </div>
          </div>
        </div> */}

        {/* <!-- Brand Start --> */}
        <div className="brand">
          <div className="container-fluid">
            <div className="brand-slider">
              <div className="brand-item">
                <a href="/danh-muc/agv">
                  <img src="img/hennessy.jpg" alt="" />
                </a>
              </div>
              <div className="brand-item">
                <a href="/danh-muc/shoei">
                  <img src="img/bacardi.jpg" alt="" />
                </a>
              </div>
              <div className="brand-item">
                <a href="/danh-muc/arai">
                  <img src="img/chivas.jpg" alt="" />
                </a>
              </div>
              <div className="brand-item">
                <a href="/danh-muc/torc">
                  <img src="img/camus.jpg" alt="" />
                </a>
              </div>
              <div className="brand-item">
                <a href="/danh-muc/yohe">
                  <img src="img/ciroc.png" alt="" />
                </a>
              </div>
              <div className="brand-item">
                <a href="/danh-muc/yohe">
                  <img src="img/raynal.jpg" alt="rượu raynal" />
                </a>
              </div>
              <div className="brand-item">
                <a href="/danh-muc/yohe">
                  <img src="img/martin.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Brand End --> */}
        {/* <!-- Category Start--> */}
        <div className="category">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <div className="category-item ch-400">
                  <img src="img/banner8.jpg" />
                  <a className="category-name" href="">
                    <p>Nothing is impossible</p>
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="category-item ch-250">
                  <img src="img/banner3.jpg" />
                  <a className="category-name" href="">
                    <p>Ride or die</p>
                  </a>
                </div>
                <div className="category-item ch-150">
                  <img src="img/banner9.jpg" />
                  <a className="category-name" href="">
                    <p>I love scene beautfiull</p>
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="category-item ch-150">
                  <img src="img/banner10.jpg" />
                  <a className="category-name" href="">
                    <p>My brothers and me</p>
                  </a>
                </div>
                <div className="category-item ch-250">
                  <img src="img/banner5.jpg" />
                  <a className="category-name" href="">
                    <p>
                      He said: "One day, you'll leave this world behind so live
                      a life you will remember"
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="category-item ch-400">
                  <img src="img/banner11.jpg" />
                  <a className="category-name" href="">
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
        
        <div className="feature">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-6 feature-col">
                <div className="feature-content">
                  <i className="fab fa-cc-mastercard"></i>
                  <h2>Bảo Mật Thanh Toán</h2>
                  <p>Website cam kết bảo mật thông tin khách hàng</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 feature-col">
                <div className="feature-content">
                  <i className="fa fa-truck"></i>
                  <h2>Vận Chuyển Toàn Quốc</h2>
                  <p>Freeship toàn quốc, có hỗ trợ SHIP CODE cho khách hàng</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 feature-col">
                <div className="feature-content">
                  <i className="fa fa-sync-alt"></i>
                  <h2>90 Ngày Đổi Trả</h2>
                  <p>
                    Cho phép khách hàng được đổi trả sản phẩm trong vòng 90 ngày
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 feature-col">
                <div className="feature-content">
                  <i className="fa fa-comments"></i>
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

        

        
        {/* <HotProducts/> */}
       

        <TopPromo/>

       

        

        {/* <!--intro--> */}
        <div className="banner">
          <div className="container">
            <div className="timer">
              <div className="content">
                <span className="first">DEALS OF THE MONTH</span>
                <h1>Savvy Savings</h1>
                <button>Shop now</button>
              </div>
            </div>

            <div className="right">
              <div className="top-right">
                <div className="content">
                  <h1>15 Whisky Cocktail You'll Fall For</h1>
                  <span>
                    We partnered with talented Ontario bartenders to create this
                    autumn-inspired whisky cocktail collection.
                  </span>
                  <br />
                  <button>Get the recipes</button>
                </div>
              </div>

              <div className="bottom-right">
                <div className="Sale">
                  <div className="content">
                    <span>LOCALLY MADE</span>
                    <h1>Sale Now</h1>
                    <button>Shop now</button>
                  </div>
                </div>

                <div className="vintages">
                  <div className="content">
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
    );
  }
}
