import React from 'react'

export default function AddPromotionPage() {
  return (
    <div>
        <div className="container mt-3">
      <h3 className="text-center">Thêm khuyến mãi</h3>
      <form action="/quan-tri/addkm" method="post">
        <label for="name">Mã khuyến mãi</label>
        <input type="text" name="id" value="" className="form-control" />
        <label for="text">Tên khuyến mãi</label>
        <input type="text" name="name" value="" className="form-control" />
        <label for="date">Ngày bắt đầu</label>
        <input type="date" name="start" value="" className="form-control" />
        <label for="date">Ngày kết thúc</label>
        <input type="date" name="end" value="" className="form-control" />
        <label for="age">Lí do</label>
        <input type="text" name="reason" value="" className="form-control" />
        <input id="idnhanvien" type="hidden" name="manv" className="form-control" />
        <input type="submit" value="Cập nhật" className="btn btn-primary mt-2" />
        <br />
        <a href="/quan-tri/crud">Quay lại?</a>
      </form>
    </div>

    </div>
  )
}
