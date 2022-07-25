import React from 'react'

export default function ReportRevenuePage() {
  return (
    <div>
        <div className="container mt-5 mb-5" id="bill-content">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <div className="toolbar" style={{display: 'flex'}}>
            <button
              style={{marginLeft: '830px'}}
              onclick="printJS('bill-content', 'html')"
            >
              <i className="fas fa-print"></i>
            </button>

            <button style={{marginLeft: '10px'}} onclick="generatePDF()">
              <i className="fas fa-download"></i>
            </button>
          </div>
          <div className="card" id="invoice">
            <div className="text-left logo p-2 px-5"></div>
            <div className="invoice p-5">
              <div className="info-Bill">
                <div className="office" style={{display: 'flex'}}>
                  <div className="info-office">
                    <p style={{fontWeight: 'bold', fontSize: '20px'}}>
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
                    style={{width: '30%', height: '40%', marginLeft: '250px'}}
                  />
                </div>
              </div>
              <div className="title">
                <h5 style={{marginLeft: '130px', fontWeight: 'bold'}}>
                  BÁO CÁO DOANH THU TỪNG THÁNG TRONG NĂM <%=year%>
                </h5>
              </div>
              <div className="date-confirm">
                <p>
                  <span style={{marginLeft: '300px'}}
                    >Ngày lập: <span id="date-tagg"></span></span>
                </p>
              </div>

              <div
                className="product border-bottom table-responsive"
                style={{marginLeft: '100px'}}
              >
                <table className="table table-borderless">
                  <tbody id="data-db">
                    <tr className="title" style={{justifyContent: 'space-between'}}>
                      <td><span style={{fontWeight: 'bold'}}>Tháng</span></td>
                      <td>
                        <span style={{fontWeight: 'bold', marginLeft: '100px'}}
                          >Doanh thu</span>
                      </td>
                      {/* <!-- <td>
                        <span style={{fontWeight: 'bold', marginLeft: '100px'}}
                          >Lợi nhuận</span
                        >
                      </td> --> */}
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
