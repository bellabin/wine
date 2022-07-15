import React from 'react'

export default function BillPaymentPage() {
  return (
    <div>
        <div class="container mt-5 mb-5" id="bill-content">
      <div class="row d-flex justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="text-left logo p-2 px-5">
              <div class="logo-image">
                <img src="/img/logoReport.PNG" width="100" />
              </div>
            </div>
            <div class="invoice p-5">
              <div class="info-Bill">
                <div class="Bill-info">
                  <p>Tax Code: <%=data[0].MASOTHUE%></p>
                  <p>Payer: <%=data[0].honv%><%=data[0].tennv%></p>
                </div>
                <div class="office">
                  <p><span>Address: </span> 91 Man Thiện, quận 9,Thủ Đức</p>
                  <p><span>Phone: </span> 0338744199</p>
                  <p><span>Email: </span> Lusion@gmail.com</p>
                  <p><span>Website: </span>Lusion.com</p>
                </div>
              </div>
              <!-- <h5>Your order Confirmed!</h5>
              <span class="font-weight-bold d-block mt-4"
                >Hello, <%=data[0].TEN%></span
              >
              <span
                >You order has been confirmed and will be shipped in next two
                days!</span
              > -->
              <div
                class="
                  payment
                  border-top
                  mt-3
                  mb-3
                  border-bottom
                  table-responsive
                "
              >
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <div class="py-2">
                          <span class="d-block text-muted">Order Date</span>
                          <span><%=data[0].NGAY%></span>
                        </div>
                      </td>
                      <td>
                        <div class="py-2">
                          <span class="d-block text-muted">Order No</span>
                          <span><%=data[0].MAHD%></span>
                        </div>
                      </td>
                      <td>
                        <div class="py-2">
                          <span class="d-block text-muted">Payment</span>
                          <span
                            ><img
                              src="https://img.icons8.com/color/48/000000/mastercard.png"
                              width="20"
                          /></span>
                        </div>
                      </td>
                      <td>
                        <div class="py-2">
                          <span class="d-block text-muted"
                            >Shiping Address</span
                          >
                          <span><%=data[0].DIACHINN%></span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="product border-bottom table-responsive">
                <table class="table table-borderless">
                  <tbody>
                    <% for (product of data) { %>
                    <tr>
                      <td width="20%">
                        <img src="/<%=product.HINHANH%>" width="70" />
                      </td>
                      <td width="60%">
                        <span class="font-weight-bold"
                          ><%=product.TENDONG%></span
                        >
                        <div class="product-qty">
                          <span class="d-block" style="color: black"
                            >Quantity: <%=product.SOLUONG%></span
                          >
                        </div>
                      </td>
                      <td width="20%">
                        <div class="text-right">
                          <span class="font-weight-bold"
                            >$<%=product.TONG%></span
                          >
                        </div>
                      </td>
                    </tr>
                    <% } %>
                  </tbody>
                </table>
              </div>
              <div class="row d-flex justify-content-end">
                <div class="col-md-5">
                  <table class="table table-borderless">
                    <tbody class="totals">
                      <tr>
                        <td>
                          <div class="text-left">
                            <span class="text-muted">Subtotal</span>
                          </div>
                        </td>
                        <td>
                          <div class="text-right">
                            <span>$<%=data[0].subtotal%></span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="text-left">
                            <span class="text-muted">Shipping Fee</span>
                          </div>
                        </td>
                        <td>
                          <div class="text-right">
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
                          <div class="text-left">
                            <span class="text-muted">Discount</span>
                          </div>
                        </td>
                        <td>
                          <div class="text-right">
                            <span class="text-success">$0</span>
                          </div>
                        </td>
                      </tr>
                      <tr class="border-top border-bottom">
                        <td>
                          <div class="text-left">
                            <span class="font-weight-bold">Total</span>
                          </div>
                        </td>
                        <td>
                          <div class="text-right">
                            <span class="font-weight-bold"
                              >$<%=data[0].THANHTIEN%></span
                            >
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!-- <p>
                We will be sending shipping confirmation email when the item
                shipped successfully!
              </p>
              <p class="font-weight-bold mb-0">Thanks for shopping with us!</p>
              <span>Lusion Team</span> -->
            </div>
            <div class="d-flex justify-content-between footer p-3">
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
