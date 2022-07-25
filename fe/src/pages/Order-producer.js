import React from 'react'

export default function OrderProducerPage() {
  return (
    <div>
        <div className="cart-page"
    style={{marginLeft: '200px', border: '1px solid grey', maxWidth: '1100px'}}>
        <div className="container"
        style={{maxWidth : '1100px', margin: '0 auto', marginLeft: '80px'}}>
         <div className="row">
            <div className="col-lg-10">
                <div className="cart-page-inner">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                        <div className="container mt-3">
                        <h2 style={{paddingLeft : '330px'}}>Đơn đặt hàng</h2>
                        <form action="/quan-tri/exportexcel" method="post" id="myForm">
                            <label for="age">Tên nhà cung cấp</label>

                            <input
                            type="text"
                            name="name"
                            value="<%=data[0].TENNCC%>"
                            className="form-control"
                            />
                            <label for="class">Địa chỉ</label>
                            <input
                            type="text"
                            name="address"
                            value="<%=data[0].DIACHI%>"
                            className="form-control"
                            />
                            <label for="class">Email</label>
                            <input
                            type="text"
                            name="email"
                            value="<%=data[0].EMAIL%>"
                            className="form-control"
                            />
                            <label for="class">Số điện thoại</label>
                            <input
                            type="text"
                            name="phone"
                            value="<%=data[0].SDT%>"
                            className="form-control"
                            />
                            <br />
                            <h3 style={{marginLeft:'200px'}}>Danh mục sản phẩm từ nhà cung cấp</h3>
                            <br>
                            <thead className="thead-dark" style={{marginLeft: '500px'}}>
                            <tr>
                                <th>ID</th>
                                <th>Hình ảnh</th>
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>Chọn</th>
                            </tr>
                            </thead>

                            <tbody className="align-middle" id="cart">
                            <% for (product of data) { %>

                            <div>
                                <tr className="item-cart" data-id="<%=product.MADONG%>">
                                <td className="id-wine"><%=product.MADONG%></td>
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
                                <td className="price" style={{width:'100px'}}><%=product.GIA%> $</td>
                                <td><button type="button" className="btn btn-primary"><i className="fas fa-plus-circle addcart" style={{fontSize: '20px'}} onclick="alert('Đã thêm vào danh sách')"></i></button></td>
                                </tr>
                            </div>
                            <% } %>
                            </tbody>
                    </table>
                </div>
             </div>
            </div>
        </div>
    </div>
    </div>
    <a href="/quan-tri/export_excel/<%=data[0].MANCC%>" className="btn btn-primary mt-2" style={{marginLeft: '700px'}}/>Tiếp tục</a><br>
        <a href="/quan-tri/crud">Quay lại?</a>
      
      </form>
    </div>

    </div>
  )
}
