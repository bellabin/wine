import React from 'react'

export default function ExportExcelOrderPage() {
  return (
    <div>
        {/* <!-- Cart Start --> */}
    <h1 style="padding: 30px 600px; background: gray">Đơn đặt hàng</h1>
    <div class="info-company" style="margin-left: 200px">
      <h4 style="font-weight: bold">Công ty</h4>
      <p><%=data[0].TENNCC%></p>
      <h4 style="font-weight: bold">Địa chỉ</h4>
      <p><%=data[0].DIACHI%></p>
      <h4 style="font-weight: bold">Email</h4>
      <p><%=data[0].EMAIL%></p>
      <h4 style="font-weight: bold">Số điện thoại</h4>
      <p><%=data[0].SDT%></p>
    </div>

    <div class="cart-page" style="margin-left: 200px; max-width: 1100px">
      <div
        class="container"
        style="max-width: 1100px; margin: 0 auto; margin-left: 80px"
      >
        <div class="row">
          <div class="col-lg-10">
            <div class="cart-page-inner">
              <div class="table-responsive">
                <table class="table table-bordered">
                  <div class="clear-cart">
                    <!-- <button class="ClearCartBtn" onclick="clearCart()">
                      Clear Cart
                    </button> -->
                  </div>
                  <h4>Danh sách sản phẩm</h4>
                  <thead class="thead-dark">
                    <tr>
                      <th>Sản phẩm</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Tổng</th>
                      <th>Xóa</th>
                    </tr>
                  </thead>
                  <tbody class="align-middle" id="cart"></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <form
      name="myform"
      id="form-info-order"
      action="/quan-tri/saveOrder"
      method="post"
      onsubmit="return checkValidateID()"
    >
      <div class="row" id="checkout-info">
        <div class="col-md-6">
          <input
            class="form-control"
            name="idncc"
            id="order-name2"
            type="hidden"
            placeholder="Tên"
            value="<%=data[0].MANCC%>"
          />
        </div>
        <div class="col-md-6">
          <p style="font-weight: bold; margin-left: 20px">Nhập mã đơn hàng</p>
          <input
            class="form-control"
            name="iddh"
            id="idorder"
            type="text"
            placeholder="Nhập mã đơn hàng"
            style="width: 200px"
          />
          <p style="color: red" id="render-fault"></p>
        </div>
        <input
          class="btn-checkout"
          type="submit"
          value="Lưu và xuất File Excel"
          style="margin-left: 800px"
        />
      </div>
    </form>

    <table id="data">
      <tbody></tbody>
    </table>
    <!-- <button onclick="getData()">DATA</button>
    <button onclick="exportToExcel('Orders', 'Orders', 'ĐƠN ĐẶT HÀNG')">
      Export to Excel
    </button> -->

    {/* <!-- Back to Top --> */}
    <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

    </div>
  )
}
