import React from 'react'

export default function ReviewOrderPage() {
  return (
    <div>
        {/* <!-- Cart Start --> */}
    <div
      className="cart-page"
      style={{marginLeft: '200px', border: '1px solid grey', maxWidth: '1100px'}}
    >
      <div
        className="container"
        style={{maxWidth: '1100px', margin: '0 auto', marginLeft: '80px'}}
      >
        <div className="row">
          <div className="col-lg-10">
            <div className="cart-page-inner">
              <div className="table">
                <table className="table table-bordered">
                  <div className="information-Order-Detail">
                    <div className="logo">
                      <a href=""><img src="/img/logoReport.PNG" alt="" /></a>
                    </div>
                    <h2 style={{marginLeft: '180px', padding: '50px'}}>
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
                    <h5>NHÂN VIÊN GIAO HÀNG</h5>
                    <p>
                      <%=data[0].HONVGH%> <%=data[0].TENNVGH%> (Mã nhân viên:
                      <%=data[0].MANV%>)
                    </p>
                    <h5 style={{marginLeft: '390px'}}>MÃ ĐƠN HÀNG</h5>
                    <p style={{marginLeft: '420px'}}><%=data[0].MAPD%></p>
                  </div>
                  <thead className="thead-dark">
                    <tr>
                      <th>Mã</th>
                      <th>Hình ảnh</th>
                      <th>Tên</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Tổng</th>
                    </tr>
                  </thead>
                  <tbody className="align-middle" id="cart">
                    <% for (product of data) { %>

                    <div className="item-cart">
                      <tr>
                        <td className="idsp"><%=product.MD%></td>
                        <td>
                          <div className="img" style={{display: 'flex', width: '200px'}}>
                            <a href=""
                              ><img
                                style={{width: '30%'}}
                                src="/<%=product.HINHANH%>"
                                alt="Image"
                            /></a>
                          </div>
                        </td>
                        <td className="name" id="name"><%=product.TENDONG%></td>
                        <td className="price"><%=product.GIA%> $</td>
                        <td>
                          <div className="qty">
                            <p><%=product.SOLUONG%> chai</p>
                          </div>
                        </td>
                        <td className="sum-price"><%=product.TONG%>$</td>
                      </tr>
                    </div>
                    <% } %>
                  </tbody>
                </table>
                <div>
                  <h4 style={{marginLeft: '20px'}}>
                    Phí Ship:<%if (product.subtotal >= 200) { %>
                    <span style={{color: 'rgb(19, 211, 19)'}}>Miễn phí</span>
                    <% }else{ %>
                    <span><%=product.sl*2%>$</span>
                    <% } %>
                  </h4>
                  <h4 style={{marginLeft: '20px', paddingBottom: '100px'}}>
                    Tổng Cộng:<span style={{color: 'rgb(82, 82, 226)'}}>
                      <%=product.THANHTIEN%> $</span
                    >
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="cart-page-inner">
              <div className="row">
                <div className="col-md-12"></div>
                <div className="col-md-12 cart-sum" id="sum_cart">
                  {/* <!-- <div className="cart-summary">
                    <div className="cart-content">
                      <h1>Thống kê giỏ hàng</h1>
                      <p>Tổng tiền sản phẩm<span>$99</span></p>
                      <p>Phí ship<span>$1</span></p>
                      <h2>Tổng cộng<span>$100</span></h2>
                    </div>
                    <div className="cart-btn">
                      <button>Thanh Toán</button>
                    </div>
                  </div> --> */}
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
