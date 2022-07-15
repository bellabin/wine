import React from 'react'

export default function EditProviderPage() {
  return (
    <div>
        <div class="container mt-3">
      <h3 class="text-center">Cập nhật nhà cung cấp</h3>
      <form action="/quan-tri/edit" method="post">
        <label for="name">Mã nhà cung cấp</label>
        <input
          type="text"
          name="id"
          value="<%=data.MANCC%>"
          class="form-control"
        />
        <label for="age">Tên nhà cung cấp</label>
        <input
          type="text"
          name="name"
          value="<%=data.TENNCC%>"
          class="form-control"
        />
        <label for="class">Địa chỉ</label>
        <input
          type="text"
          name="address"
          value="<%=data.DIACHI%>"
          class="form-control"
        />
        <label for="class">Email</label>
        <input
          type="text"
          name="email"
          value="<%=data.EMAIL%>"
          class="form-control"
        />
        <label for="class">Số điện thoại</label>
        <input
          type="text"
          name="phone"
          value="<%=data.SDT%>"
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
