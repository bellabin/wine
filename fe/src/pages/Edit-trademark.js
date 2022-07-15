import React from 'react'

export default function EditTradeMarkPage() {
  return (
    <div>
        <div class="container mt-3">
      <h3 class="text-center">Cập nhật Thương Hiệu</h3>
      <form action="/quan-tri/editth" method="post">
        <label for="name">Mã Thương Hiệu</label>
        <input
          type="text"
          name="id"
          value="<%=data.MATH%>"
          class="form-control"
        />
        <label for="age">Tên Thương Hiệu</label>
        <input
          type="text"
          name="name"
          value="<%=data.TENTH%>"
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
