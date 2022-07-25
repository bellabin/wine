import React from 'react'

export default function ReportQuantityPage() {
  return (
    <div>
        <div className="container mt-5 mb-5" id="bill-content">
      <div className="row d-flex justify-content-center">
        <div className="col-md-20">
          <div className="toolbar" style={{display: 'flex'}}>
            <button
              style={{marginLeft: '1080px'}}
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
                    style={{width: '30%', height: '40%', marginLeft: '350px'}}
                  />
                </div>
              </div>
              <div className="title">
                <h5
                  style={{
                    marginLeft: '180px',
                    fontWeight: 'bold',
                    fontSize: '25px',
                    marginBottom: '130px'
                  }}
                >
                  BÁO CÁO TỒN KHO TÍNH ĐẾN NGÀY <span className="date-check"></span>
                </h5>
              </div>

              <div className="product border-bottom">
                <table className="table">
                  <tbody id="data-db">
                    <td style={{textAlign: 'center'}}>
                      <span style={{fontWeight: 'bold'}}>Mã</span>
                    </td>
                    <td style={{textAlign: 'center'}}>
                      <span style={{fontWeight: 'bold'}}>Tên dòng</span>
                    </td>
                    <td style={{textAlign: 'center'}}>
                      <span style={{fontWeight: 'bold'}}>Dung tích</span>
                    </td>
                    <td style={{textAlign: 'center'}}>
                      <span style={{fontWeight: 'bold'}}>ĐVT</span>
                    </td>
                    <td style={{textAlign: 'center'}}>
                      <span style={{fontWeight: 'bold'}}>Số lượng</span>
                    </td>
                    <td style={{textAlign: 'center'}}>
                      <span style={{fontWeight: 'bold'}}>Đơn Giá</span>
                    </td>
                    <td style={{textAlign: 'center'}}>
                      <span style={{fontWeight: 'bold'}}>Trị giá</span>
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
