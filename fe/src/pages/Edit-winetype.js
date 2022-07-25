import React from 'react'

export default function EditWineTypePage() {
  return (
    <div>
        <div className="container mt-3">
      <h3 className="text-center">Cập nhật loại sản phẩm</h3>
      <form action="/quan-tri/editloai" method="post">
        <label for="name">Mã loại</label>
        <input
          type="text"
          name="id"
          value="<%=data.MALOAI%>"
          className="form-control"
        />
        <label for="age">Tên loại</label>
        <input
          type="text"
          name="name"
          value="<%=data.TENLOAI%>"
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
