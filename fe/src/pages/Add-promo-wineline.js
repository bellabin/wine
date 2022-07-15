import React from 'react'

export default function AddPromotionToWinelinePage() {
  return (
    <div>
        <div class="container mt-3">
      <h3 class="text-center">Thêm sản phẩm vào đợt khuyến mãi</h3>
      <form action="/quan-tri/them_sp_km" method="post">
        <label for="name">Mã khuyến mãi:</label>
        {/* <label for="name"><%=data.MAKM%></label><br /> */}
        <input
          type="hidden"
          name="id"
          value="<%=data.MAKM%>"
          class="form-control"
        />
        <label for="text">Tên khuyến mãi:</label>
        {/* <label for="name"><%=data.TENKM%></label><br /> */}
        <input type="hidden" name="name" value="" class="form-control" />
        <label for="date">Ngày bắt đầu:</label>
        {/* <label for="name"><%=data.NGAYBATDAU%></label><br /> */}
        <input type="hidden" name="start" value="" class="form-control" />
        <label for="date">Ngày kết thúc:</label>
        {/* <label for="name"><%=data.NGAYKETTHUC%></label><br /> */}
        <input type="hidden" name="end" value="" class="forms-control" /><br />
        <label for="age">Lí do: </label>
        {/* <label for="name"><%=data.LIDO%></label><br /> */}
        <input type="hidden" name="reason" value="" class="form-control" />
        <label for="age">Phần trăm giảm</label>
        <input type="age" name="percent" value="" class="form-control" />
        <label for="text">Chọn sản phẩm</label>
        <br />
        <select
          name="idproduct"
          id="dropdown-km"
          class="combo"
          style="height: 25px"
        >
          <option value="">None</option></select
        ><br />
        <br />
        <input type="submit" value="Cập nhật" class="btn btn-primary mt-2" />
        <br />
        <a href="/quan-tri/crud">Quay lại?</a>
      </form>
    </div>
    </div>
  )
}
