import React from 'react'

export default function EditStaffPage() {
  return (
    <div>
        <div className="container mt-3">
      <h3 className="text-center">Cập nhật thông tin nhân viên</h3>
      <form action="/quan-tri/editnv" method="post">
        {/* <!-- <label for="name">Mã loại</label> --> */}
        <input
          type="hidden"
          name="id"
          value="<%=data.MANV%>"
          className="form-control"
        />
        <label for="age">Họ</label>
        <input
          type="text"
          name="surname"
          value="<%=data.HO%>"
          className="form-control"
        />
        <label for="age">Tên</label>
        <input
          type="text"
          name="name"
          value="<%=data.TEN%>"
          className="form-control"
        />
        <label for="age">Giới tính</label>
        <input name="sex" type="radio" value="Nam" />Nam
        <input name="sex" type="radio" value="Nữ" />Nữ
        <input name="sex" type="radio" value="Khác" />Khác <br />
        <label for="age">Ngày sinh</label><br />
        <input
          type="date"
          name="birthday"
          min="1990-01-02"
          value="<%=data.NGAYSINH%>"
        /><br /><br />
        <label for="age">Địa chỉ</label>
        <input
          type="text"
          name="address"
          value="<%=data.DIACHI%>"
          className="form-control"
        />
        <label for="age">Email</label>
        <input
          type="text"
          name="email"
          value="<%=data.EMAIL%>"
          className="form-control"
        />
        <label for="name">Số điện thoại</label>
        <input
          type="text"
          name="phone"
          value="<%=data.SDT%>"
          className="form-control"
        />
        <input type="submit" value="Cập nhật" className="btn btn-primary mt-2" />
        <br />
        <a href="/quan-tri/crud">Quay lại?</a>
      </form>
    </div>

    </div>
  )
}
