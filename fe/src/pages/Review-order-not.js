import React from 'react'

export default function ReviewOrderNotPage() {
  return (
    <div>
        {/* <!-- Cart Start --> */}
    <div
      class="cart-page"
      style="margin-left: 200px; border: 1px solid grey; max-width: 1100px"
    >
      <div
        class="container"
        style="max-width: 1100px; margin: 0 auto; margin-left: 80px"
      >
        <div class="row">
          <div class="col-lg-10">
            <div class="cart-page-inner">
              <div class="table-responsive">
                <table class="table table-bordered">
                  <div class="information-Order-Detail">
                    <div class="logo">
                      <a href=""><img src="/img/logoReport.PNG" alt="" /></a>
                    </div>
                    <h2 style="margin-left: 180px; padding: 50px">
                      THÔNG TIN CHI TIẾT ĐƠN HÀNG
                    </h2>
                    <h5>HỌ VÀ TÊN NGƯỜI NHẬN</h5>
                    <p><%=data[0].HONN%> <%=data[0].TENNN%></p>
                    <h5>ĐỊA CHỈ NHẬN HÀNG</h5>
                    <p><%=data[0].DIACHINN%></p>
                    <h5>SỐ ĐIỆN THOẠI NGƯỜI NHẬN</h5>
                    <p><%=data[0].SDTNN%></p>
                    <h5>GHI CHÚ</h5>
                    <%if (data[0].GHICHU) { %>
                    <p><%=data[0].GHICHU%></p>
                    <% }else{ %>
                    <p>Không</p>
                    <% } %>
                    <h5 style="margin-left: 400px">MÃ ĐƠN HÀNG</h5>
                    <p style="margin-left: 420px"><%=data[0].MAPD%></p>
                  </div>
                  <thead class="thead-dark" style="margin-left: 300px">
                    <h5>Sản phẩm:</h5>
                    <tr>
                      <th>Mã</th>
                      <th>Hình ảnh</th>
                      <th>Tên</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Tổng</th>
                    </tr>
                  </thead>
                  <tbody class="align-middle" id="cart">
                    <% for (product of data) { %>

                    <div class="item-cart">
                      <tr>
                        <td class="idsp"><%=product.MD%></td>
                        <td>
                          <div class="img" style="display: flex; width: 200px">
                            <a href=""
                              ><img
                                style="width: 30%"
                                src="/<%=product.HINHANH%>"
                                alt="Image"
                            /></a>
                          </div>
                        </td>
                        <td class="name" id="name"><%=product.TENDONG%></td>
                        <td class="price"><%=product.GIA%> $</td>
                        <td>
                          <div class="qty">
                            <p><%=product.SOLUONG%> chai</p>
                          </div>
                        </td>
                        <td class="sum-price"><%=product.TONG%>$</td>
                      </tr>
                    </div>
                    <% } %>
                  </tbody>
                </table>
                <div>
                  <h4 style="margin-left: 20px">
                    Phí Ship:<%if (product.subtotal >= 200) { %>
                    <span style="color: rgb(19, 211, 19)">Miễn phí</span>
                    <% }else{ %>
                    <span><%=product.sl*2%>$</span>
                    <% } %>
                  </h4>
                  <h4 style="margin-left: 20px; padding-bottom: 100px">
                    Tổng Cộng:<span style="color: rgb(82, 82, 226)">
                      <%=product.THANHTIEN%> $</span
                    >
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="cart-page-inner">
              <div class="row">
                <div class="col-md-12"></div>
                <div class="col-md-12 cart-sum" id="sum_cart">
                  <!-- <div class="cart-summary">
                    <div class="cart-content">
                      <h1>Thống kê giỏ hàng</h1>
                      <p>Tổng tiền sản phẩm<span>$99</span></p>
                      <p>Phí ship<span>$1</span></p>
                      <h2>Tổng cộng<span>$100</span></h2>
                    </div>
                    <div class="cart-btn">
                      <button>Thanh Toán</button>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
