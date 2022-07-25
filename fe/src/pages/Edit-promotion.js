import React from 'react'

export default function EditPromotionPage() {
  return (
    <div>
        <div className="container mt-3">
      <h3 className="text-center">Sửa khuyến mãi</h3>
      <form action="/quan-tri/editkm" method="post">
        <label for="name">Mã khuyến mãi</label><br />
        {/* <label for=""><%=data.MAKM%></label><br /> */}
        <input type="hidden" name="id" value="<%=data.MAKM%>" />
        <label for="text">Tên khuyến mãi</label>
        <input
          type="text"
          name="name"
          value="<%=data.TENKM%>"
          className="form-control"
        />
        <label for="date">Ngày bắt đầu</label>
        <input
          type="date"
          name="start"
          value="<%=data.NGAYBATDAU%>"
          className="form-control"
        />
        <label for="date">Ngày kết thúc</label>
        <input
          type="date"
          name="end"
          value="<%=data.NGAYKETTHUC%>"
          className="form-control"
        />
        <label for="age">Lí do</label>
        <input
          type="text"
          name="reason"
          value="<%=data.LIDO%>"
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
