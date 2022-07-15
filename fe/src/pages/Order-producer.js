import React from 'react'

export default function OrderProducerPage() {
  return (
    <div>
        <div class="cart-page"
    style="margin-left: 200px; border: 1px solid grey; max-width: 1100px">
        <div class="container"
        style="max-width: 1100px; margin: 0 auto; margin-left: 80px">
         <div class="row">
            <div class="col-lg-10">
                <div class="cart-page-inner">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                        <div class="container mt-3">
                        <h2 style="padding-left:330px">Đơn đặt hàng</h2>
                        <form action="/quan-tri/exportexcel" method="post" id="myForm">
                            <label for="age">Tên nhà cung cấp</label>

                            <input
                            type="text"
                            name="name"
                            value="<%=data[0].TENNCC%>"
                            class="form-control"
                            />
                            <label for="class">Địa chỉ</label>
                            <input
                            type="text"
                            name="address"
                            value="<%=data[0].DIACHI%>"
                            class="form-control"
                            />
                            <label for="class">Email</label>
                            <input
                            type="text"
                            name="email"
                            value="<%=data[0].EMAIL%>"
                            class="form-control"
                            />
                            <label for="class">Số điện thoại</label>
                            <input
                            type="text"
                            name="phone"
                            value="<%=data[0].SDT%>"
                            class="form-control"
                            />
                            <br />
                            <h3 style="margin-left:200px">Danh mục sản phẩm từ nhà cung cấp</h3>
                            <br>
                            <thead class="thead-dark" style="margin-left: 500px">
                            <tr>
                                <th>ID</th>
                                <th>Hình ảnh</th>
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>Chọn</th>
                            </tr>
                            </thead>

                            <tbody class="align-middle" id="cart">
                            <% for (product of data) { %>

                            <div>
                                <tr class="item-cart" data-id="<%=product.MADONG%>">
                                <td class="id-wine"><%=product.MADONG%></td>
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
                                <td class="price" style="width:100px"><%=product.GIA%> $</td>
                                <td><button type="button" class="btn btn-primary"><i class="fas fa-plus-circle addcart" style="font-size: 20px;" onclick="alert('Đã thêm vào danh sách')"></i></button></td>
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
    <a href="/quan-tri/export_excel/<%=data[0].MANCC%>" class="btn btn-primary mt-2" style="margin-left: 700px"/>Tiếp tục</a><br>
        <a href="/quan-tri/crud">Quay lại?</a>
      
      </form>
    </div>

    </div>
  )
}
