import React from 'react'

export default function EditProviderPage() {
  return (
    <div>
        <div className="container mt-3">
      <h3 className="text-center">Cập nhật nhà cung cấp</h3>
      <form action="/quan-tri/edit" method="post">
        <label for="name">Mã nhà cung cấp</label>
        <input
          type="text"
          name="id"
          value="<%=data.MANCC%>"
          className="form-control"
        />
        <label for="age">Tên nhà cung cấp</label>
        <input
          type="text"
          name="name"
          value="<%=data.TENNCC%>"
          className="form-control"
        />
        <label for="class">Địa chỉ</label>
        <input
          type="text"
          name="address"
          value="<%=data.DIACHI%>"
          className="form-control"
        />
        <label for="class">Email</label>
        <input
          type="text"
          name="email"
          value="<%=data.EMAIL%>"
          className="form-control"
        />
        <label for="class">Số điện thoại</label>
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
