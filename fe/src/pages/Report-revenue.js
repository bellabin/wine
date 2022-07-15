import React from 'react'

export default function ReportRevenuePage() {
  return (
    <div>
        <div class="container mt-5 mb-5" id="bill-content">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div class="toolbar" style="display: flex">
            <button
              style="margin-left: 830px"
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
                    style="width: 30%; height: 40%; margin-left: 250px"
                  />
                </div>
              </div>
              <div class="title">
                <h5 style="margin-left: 130px; font-weight: bold">
                  BÁO CÁO DOANH THU TỪNG THÁNG TRONG NĂM <%=year%>
                </h5>
              </div>
              <div class="date-confirm">
                <p>
                  <span style="margin-left: 300px"
                    >Ngày lập: <span id="date-tagg"></span
                  ></span>
                </p>
              </div>

              <div
                class="product border-bottom table-responsive"
                style="margin-left: 100px"
              >
                <table class="table table-borderless">
                  <tbody id="data-db">
                    <tr class="title" style="justify-content: space-between">
                      <td><span style="font-weight: bold">Tháng</span></td>
                      <td>
                        <span style="font-weight: bold; margin-left: 100px"
                          >Doanh thu</span
                        >
                      </td>
                      <!-- <td>
                        <span style="font-weight: bold; margin-left: 100px"
                          >Lợi nhuận</span
                        >
                      </td> -->
                    </tr>
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
