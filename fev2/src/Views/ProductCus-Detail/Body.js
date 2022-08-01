import React, { Component } from "react";

export default class BodyProductDetail extends Component {
  render() {
    return (
      <div>
        {/* <!-- Product Detail Start --> */}
        <div className="product-detail">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8">
                <div className="product-detail-top">
                  <div
                    id="chi-tiet-san-pham"
                    className="row align-items-center"
                  >
                    <div className="col-md-5">
                      <div className="product-slider-single normal-slider"></div>
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
                            <button type="button" className="btn">
                              Trắng
                            </button>
                            <button type="button" className="btn">
                              Đen
                            </button>
                            <button type="button" className="btn">
                              Cam
                            </button>
                          </div>
                        </div>
                        <div className="action">
                          <a className="btn" href="#">
                            <i className="fa fa-shopping-bag"></i>Mua Ngay
                          </a>
                          <a className="btn" href="#">
                            <i className="fa fa-shopping-cart"></i>Thêm vào giỏ
                          </a>
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
                        >
                          Mô tả
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="pill"
                          href="#specification"
                        >
                          Chi tiết
                        </a>
                      </li>
                    </ul>

                    <div className="tab-content">
                      <div
                        id="description"
                        className="container tab-pane active"
                      >
                        <h4>Mô tả sản phẩm</h4>
                        <p id="desProduct"></p>
                      </div>
                      <div
                        id="specification"
                        className="container tab-pane fade"
                      >
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
                                  />
                                  <label for="star1"> </label>
                                  <input
                                    type="radio"
                                    name="star"
                                    id="star2"
                                    value="4"
                                  />
                                  <label for="star2"> </label>
                                  <input
                                    type="radio"
                                    name="star"
                                    id="star3"
                                    value="3"
                                  />
                                  <label for="star3"> </label>
                                  <input
                                    type="radio"
                                    name="star"
                                    id="star4"
                                    value="2"
                                  />
                                  <label for="star4"> </label>
                                  <input
                                    type="radio"
                                    name="star"
                                    id="star5"
                                    value="1"
                                  />
                                  <label for="star5"> </label>
                                </div>
                              </div>
                            </div>

                            <div className="row form clearfix">
                              <div className="col-sm-6">
                                <input
                                  name="ten"
                                  type="text"
                                  placeholder="Tên"
                                />
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

                  <div className="row align-items-center product-slider product-slider-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Product Detail End --> */}
      </div>
    );
  }
}
