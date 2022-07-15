import React from 'react'

export default function EditPromotionPage() {
  return (
    <div>
        <div class="container mt-3">
      <h3 class="text-center">Sửa khuyến mãi</h3>
      <form action="/quan-tri/editkm" method="post">
        <label for="name">Mã khuyến mãi</label><br />
        {/* <label for=""><%=data.MAKM%></label><br /> */}
        <input type="hidden" name="id" value="<%=data.MAKM%>" />
        <label for="text">Tên khuyến mãi</label>
        <input
          type="text"
          name="name"
          value="<%=data.TENKM%>"
          class="form-control"
        />
        <label for="date">Ngày bắt đầu</label>
        <input
          type="date"
          name="start"
          value="<%=data.NGAYBATDAU%>"
          class="form-control"
        />
        <label for="date">Ngày kết thúc</label>
        <input
          type="date"
          name="end"
          value="<%=data.NGAYKETTHUC%>"
          class="form-control"
        />
        <label for="age">Lí do</label>
        <input
          type="text"
          name="reason"
          value="<%=data.LIDO%>"
          class="form-control"
        />
        <input type="submit" value="Cập nhật" class="btn btn-primary mt-2" />
        <br />
        <a href="/quan-tri/crud">Quay lại?</a>
      </form>
    </div>

    </div>
  )
}
