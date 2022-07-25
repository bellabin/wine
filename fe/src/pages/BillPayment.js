import React from 'react'

export default function BillPaymentPage() {
  return (
    <div>
        <div className="container mt-5 mb-5" id="bill-content">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="text-left logo p-2 px-5">
              <div className="logo-image">
                <img src="/img/logoReport.PNG" width="100" />
              </div>
            </div>
            <div className="invoice p-5">
              <div className="info-Bill">
                <div className="Bill-info">
                  <p>Tax Code: <%=data[0].MASOTHUE%></p>
                  <p>Payer: <%=data[0].honv%><%=data[0].tennv%></p>
                </div>
                <div className="office">
                  <p><span>Address: </span> 91 Man Thiện, quận 9,Thủ Đức</p>
                  <p><span>Phone: </span> 0338744199</p>
                  <p><span>Email: </span> Lusion@gmail.com</p>
                  <p><span>Website: </span>Lusion.com</p>
                </div>
              </div>
              {/* <!-- <h5>Your order Confirmed!</h5>
              <span className="font-weight-bold d-block mt-4"
                >Hello, <%=data[0].TEN%></span
              >
              <span
                >You order has been confirmed and will be shipped in next two
                days!</span
              > --> */}
              <div
                className="
                  payment
                  border-top
                  mt-3
                  mb-3
                  border-bottom
                  table-responsive
                "
              >
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <div className="py-2">
                          <span className="d-block text-muted">Order Date</span>
                          <span><%=data[0].NGAY%></span>
                        </div>
                      </td>
                      <td>
                        <div className="py-2">
                          <span className="d-block text-muted">Order No</span>
                          <span><%=data[0].MAHD%></span>
                        </div>
                      </td>
                      <td>
                        <div className="py-2">
                          <span className="d-block text-muted">Payment</span>
                          <span
                            ><img
                              src="https://img.icons8.com/color/48/000000/mastercard.png"
                              width="20"
                          /></span>
                        </div>
                      </td>
                      <td>
                        <div className="py-2">
                          <span className="d-block text-muted"
                            >Shiping Address</span
                          >
                          <span><%=data[0].DIACHINN%></span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="product border-bottom table-responsive">
                <table className="table table-borderless">
                  <tbody>
                    <% for (product of data) { %>
                    <tr>
                      <td width="20%">
                        <img src="/<%=product.HINHANH%>" width="70" />
                      </td>
                      <td width="60%">
                        <span className="font-weight-bold"
                          ><%=product.TENDONG%></span>
                        <div className="product-qty">
                          <span className="d-block" style={{color: 'black'}}
                            >Quantity: <%=product.SOLUONG%></span>
                        </div>
                      </td>
                      <td width="20%">
                        <div className="text-right">
                          <span className="font-weight-bold"
                            >$<%=product.TONG%></span>
                        </div>
                      </td>
                    </tr>
                    <% } %>
                  </tbody>
                </table>
              </div>
              <div className="row d-flex justify-content-end">
                <div className="col-md-5">
                  <table className="table table-borderless">
                    <tbody className="totals">
                      <tr>
                        <td>
                          <div className="text-left">
                            <span className="text-muted">Subtotal</span>
                          </div>
                        </td>
                        <td>
                          <div className="text-right">
                            <span>$<%=data[0].subtotal%></span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="text-left">
                            <span className="text-muted">Shipping Fee</span>
                          </div>
                        </td>
                        <td>
                          <div className="text-right">
                            <%if (data[0].subtotal >= 200) { %>
                            <span>Free</span>
                            <% }else{ %>
                            <span>$<%=data[0].sl*2%></span>
                            <% } %>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="text-left">
                            <span className="text-muted">Discount</span>
                          </div>
                        </td>
                        <td>
                          <div className="text-right">
                            <span className="text-success">$0</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-top border-bottom">
                        <td>
                          <div className="text-left">
                            <span className="font-weight-bold">Total</span>
                          </div>
                        </td>
                        <td>
                          <div className="text-right">
                            <span className="font-weight-bold"
                              >$<%=data[0].THANHTIEN%></span
                            >
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <!-- <p>
                We will be sending shipping confirmation email when the item
                shipped successfully!
              </p>
              <p className="font-weight-bold mb-0">Thanks for shopping with us!</p>
              <span>Lusion Team</span> --> */}
            </div>
            <div className="d-flex justify-content-between footer p-3">
              <span>Need Help? visit our <a href="#"> help center</a></span>
              <span><%=data[0].NGAY%></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="editor"></div>

    <button id="cmd">In hóa đơn</button>

    </div>
  )
}
