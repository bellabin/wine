import React from 'react'

export default function ReportQuantityPage() {
  return (
    <div>
        <div class="container mt-5 mb-5" id="bill-content">
      <div class="row d-flex justify-content-center">
        <div class="col-md-20">
          <div class="toolbar" style="display: flex">
            <button
              style="margin-left: 1080px"
              onclick="printJS('bill-content', 'html')"
            >
              <i class="fas fa-print"></i>
            </button>

            <button style="margin-left: 10px" onclick="generatePDF()">
              <i class="fas fa-download"></i>
            </button>
          </div>
          <div class="card" id="invoice">
            <div class="text-left logo p-2 px-5"></div>
            <div class="invoice p-5">
              <div class="info-Bill">
                <div class="office" style="display: flex">
                  <div class="info-office">
                    <p style="font-weight: bold; font-size: 20px">
                      Công ty rượu Lusion Wine
                    </p>
                    <p><span>Địa chỉ: </span> 91 Man Thiện, quận 9,Thủ Đức</p>
                    <p><span>Phone: </span> 0338744199</p>
                    <p><span>Email: </span> Lusion@gmail.com</p>
                    <p><span>Nhân viên lập: </span><%=user.ho%><%=user.ten%></p>
                  </div>
                  <img
                    src="/img/logoReport.PNG"
                    alt=""
                    style="width: 30%; height: 40%; margin-left: 350px"
                  />
                </div>
              </div>
              <div class="title">
                <h5
                  style="
                    margin-left: 180px;
                    font-weight: bold;
                    font-size: 25px;
                    margin-bottom: 130px;
                  "
                >
                  BÁO CÁO TỒN KHO TÍNH ĐẾN NGÀY <span class="date-check"></span>
                </h5>
              </div>

              <div class="product border-bottom">
                <table class="table">
                  <tbody id="data-db">
                    <td style="text-align: center">
                      <span style="font-weight: bold">Mã</span>
                    </td>
                    <td style="text-align: center">
                      <span style="font-weight: bold">Tên dòng</span>
                    </td>
                    <td style="text-align: center">
                      <span style="font-weight: bold">Dung tích</span>
                    </td>
                    <td style="text-align: center">
                      <span style="font-weight: bold">ĐVT</span>
                    </td>
                    <td style="text-align: center">
                      <span style="font-weight: bold">Số lượng</span>
                    </td>
                    <td style="text-align: center">
                      <span style="font-weight: bold">Đơn Giá</span>
                    </td>
                    <td style="text-align: center">
                      <span style="font-weight: bold">Trị giá</span>
                    </td>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
