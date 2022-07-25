import React from 'react'

export default function EditWineLinePage() {
  return (
    <div>
        <div className="container mt-3">
      <h3 className="text-center">Cập nhật loại sản phẩm</h3>
      <form action="/quan-tri/editsp" method="post">
        <label for="name">Mã dòng</label>
        <label for="name"><%=data.MADONG%></label><br />
        <input
          type="hidden"
          name="id"
          value="<%=data.MADONG%>"
          className="form-control"
        />
        <label for="age">Tên dòng rượu</label>
        <input
          type="text"
          name="name"
          value="<%=data.TENDONG%>"
          className="form-control"
        />
        <label for="age">Giá</label>
        <input
          type="text"
          name="price"
          value="<%=data.GIA%>"
          className="form-control"
        />
        <label for="age">Trạng thái</label>
        <input
          type="text"
          name="status"
          value="<%=data.TRANGTHAI%>"
          className="form-control"
        />
        <label for="age">Hình ảnh</label><br />

        <img
          src="/<%=data.HINHANH%>"
          alt=""
          style={{width: '20%', border: '1px solid black'}}
        />
        <br />
        <input
          type="file"
          name="image"
          value="/<%=data.HINHANH%>"
          className="form-control"
          style={{width: '300px'}}
        />

        <label for="age">Mô tả</label>
        <input
          type="text"
          name="des"
          value="<%=data.MOTA%>"
          className="form-control"
        />
        <label for="age">Chi tiết</label>
        <input
          type="text"
          name="detail"
          value="<%=data.CHITIET%>"
          className="form-control"
        />
        <br />
        <label for="age">Loại rượu</label>
        <select
          name="maloai"
          id="dropdown-cat"
          className="combo"
          style={{height: '25px'}}
          value="<%=data.MALOAI%>"
        >
          <option value="<%=data.MALOAI%>"><%=data.TENLOAI%></option>
        </select>
        <label for="age">Thương hiệu</label>
        <select
          name="math"
          id="dropdown-brand"
          className="combo"
          style={{height: '25px'}}
          value="<%=data.MATH%>"
        >
          <option value="<%=data.MATH%>"><%=data.TENTH%></option>
        </select>
        <br />
        <input type="submit" value="Cập nhật" className="btn btn-primary mt-2" />
        <br />
        <a href="/quan-tri/crud">Quay lại?</a>
      </form>
    </div>

    </div>
  )
}
