import React from 'react'

export default function ExportExcelOrderPage() {
  return (
    <div>
        {/* <!-- Cart Start --> */}
    <h1 style={{padding: '30px 600px', background: 'gray'}}>Đơn đặt hàng</h1>
    <div className="info-company" style={{marginLeft: '200px'}}>
      <h4 style={{fontWeight: 'bold'}}>Công ty</h4>
      <p><%=data[0].TENNCC%></p>
      <h4 style={{fontWeight: 'bold'}}>Địa chỉ</h4>
      <p><%=data[0].DIACHI%></p>
      <h4 style={{fontWeight: 'bold'}}>Email</h4>
      <p><%=data[0].EMAIL%></p>
      <h4 style={{fontWeight: 'bold'}}>Số điện thoại</h4>
      <p><%=data[0].SDT%></p>
    </div>

    <div className="cart-page" style={{marginLeft: '200px', maxWidth: '1100px'}}>
      <div
        className="container"
        style={{maxWidth: '1100px', margin: '0 auto', marginLeft: '80px'}}
      >
        <div className="row">
          <div className="col-lg-10">
            <div className="cart-page-inner">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <div className="clear-cart">
                    {/* <!-- <button className="ClearCartBtn" onclick="clearCart()">
                      Clear Cart
                    </button> --> */}
                  </div>
                  <h4>Danh sách sản phẩm</h4>
                  <thead className="thead-dark">
                    <tr>
                      <th>Sản phẩm</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Tổng</th>
                      <th>Xóa</th>
                    </tr>
                  </thead>
                  <tbody className="align-middle" id="cart"></tbody>
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
      <div className="row" id="checkout-info">
        <div className="col-md-6">
          <input
            className="form-control"
            name="idncc"
            id="order-name2"
            type="hidden"
            placeholder="Tên"
            value="<%=data[0].MANCC%>"
          />
        </div>
        <div className="col-md-6">
          <p style={{fontWeight: 'bold', marginLeft: '20px'}}>Nhập mã đơn hàng</p>
          <input
            className="form-control"
            name="iddh"
            id="idorder"
            type="text"
            placeholder="Nhập mã đơn hàng"
            style={{width: '200px'}}
          />
          <p style={{color: 'red'}} id="render-fault"></p>
        </div>
        <input
          className="btn-checkout"
          type="submit"
          value="Lưu và xuất File Excel"
          style={{marginLeft: '800px'}}
        />
      </div>
    </form>

    <table id="data">
      <tbody></tbody>
    </table>
    {/* <!-- <button onclick="getData()">DATA</button>
    <button onclick="exportToExcel('Orders', 'Orders', 'ĐƠN ĐẶT HÀNG')">
      Export to Excel
    </button> --> */}

    {/* <!-- Back to Top --> */}
    <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>

    </div>
  )
}
