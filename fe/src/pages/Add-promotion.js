import React from 'react'

export default function AddPromotionPage() {
  return (
    <div>
        <div class="container mt-3">
      <h3 class="text-center">Thêm khuyến mãi</h3>
      <form action="/quan-tri/addkm" method="post">
        <label for="name">Mã khuyến mãi</label>
        <input type="text" name="id" value="" class="form-control" />
        <label for="text">Tên khuyến mãi</label>
        <input type="text" name="name" value="" class="form-control" />
        <label for="date">Ngày bắt đầu</label>
        <input type="date" name="start" value="" class="form-control" />
        <label for="date">Ngày kết thúc</label>
        <input type="date" name="end" value="" class="form-control" />
        <label for="age">Lí do</label>
        <input type="text" name="reason" value="" class="form-control" />
        <input id="idnhanvien" type="hidden" name="manv" class="form-control" />
        <input type="submit" value="Cập nhật" class="btn btn-primary mt-2" />
        <br />
        <a href="/quan-tri/crud">Quay lại?</a>
      </form>
    </div>

    </div>
  )
}
