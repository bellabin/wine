import React, { useState, useEffect } from 'react'
import { renderMatches } from 'react-router-dom'
import { GetListAccounts, GetListStaffs } from '../../services/Account'

export default function AdminPage() {

  const [listStaffs, setListStaffs] = useState([])
  const [select, setSelect] = useState()
  const [tk, setTk] = useState()

  //demo cach goi api
  useEffect(() => {
    async function fetchListStaffs () {
      const staffs = (await GetListStaffs()).data

      setListStaffs(staffs)
    }
    
    fetchListStaffs()
  }, [listStaffs])

  useEffect(() => {
    //goi api thong ke
    // add no vao 1 state thong ke
    

  }, [])
  
  var html = ''

  const handleSelectChange = (e) => {
    console.log('slect value', e.target.value);
    setSelect(e.target.value)

    setTk('/admin/Report_revenu/' + e.target.value)
    React.createElement('a', {id:'report-year',className:'btn btn-primary'}, React.createElement('i',{className:'fas fa-search'}))
    
    html = tk
    

    const rptk = document.getElementById('report-year').innerHTML = html
  }

  const PageHTML = () => {
    return tk
  }

  return (
    <div>
      <div className="top-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <i className="fa fa-users-cog"></i> Trang quản trị
          </div>
          <div className="col-sm-6">
            <i className=""></i>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Top bar End --> */}

    {/* <!-- Nav Bar Start --> */}
    <div className="nav">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <a href="#" className="navbar-brand">MENU</a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse">
            <div className="navbar-nav mr-auto">
              
              <div className="navbar-nav ml-auto">
                <div className="nav-item dropdown">
                  <div className="dropdown-menu">
                    <a href="/Sign-in-admin" className="dropdown-item">Đăng xuất</a>
                  
                </div>
              </div>
            </div>
          </div>
          </div>
        </nav>
      </div>
    </div>
    {/* <!-- Nav Bar End --> */}

    

    {/* <!-- Breadcrumb Start --> */}
    <div className="breadcrumb-wrap">
      <div className="container-fluid">
        <ul className="breadcrumb">
          {/* <!-- <li className="breadcrumb-item"><a href="#">Trang chủ</a></li> --> */}
          <li className="breadcrumb-item active">Quản trị</li>
          <li className="breadcrumb-item active">Admin {/*<%=user.ho%><%=user.ten%>*/}</li>
        </ul>
      </div>
    </div>
    {/* <!-- Breadcrumb End --> */}

    {/* <!-- My Account Start --> */}
    {/* <!-- My Account Start --> */}
    <div className="my-account">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div
              className="nav flex-column nav-pills"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link"
                id="address-nav"
                data-toggle="pill"
                href="#nhacungcap"
                role="tab"
                ><i className="fa fa-user-tie"></i>Nhà cung cấp</a>
              <a
              className="nav-link"
              id="payment-nav"
              data-toggle="pill"
              href="#catalog"
              role="tab"
              ><i className="fa fa-credit-card"></i>Loại sản phẩm</a>
            <a
              className="nav-link"
              id="payment-nav"
              data-toggle="pill"
              href="#thuong-hieu"
              role="tab"
              ><i className="fa fa-credit-card"></i>Thương hiệu</a>
        
              <a
                className="nav-link"
                id="payment-nav"
                data-toggle="pill"
                href="#product"
                role="tab"
                ><i className="fa fa-credit-card"></i>Sản phẩm</a>
          
            
              <a
              className="nav-link"
              id="orders-nav"
              data-toggle="pill"
              href="#orders-tab"
              role="tab"
              ><i className="fa fa-shopping-bag"></i>Đơn Hàng</a>
            <a
              className="nav-link"
              id="orders-nav"
              data-toggle="pill"
              href="#khuyen-mai"
              role="tab"
              ><i className="fa fa-percentage"></i>khuyến mãi</a>
            <a
              className="nav-link"
              id="orders-nav"
              data-toggle="pill"
              href="#sp-khuyen-mai"
              role="tab"
              ><i className="fa fa-percentage"></i>Sản phẩm khuyến mãi</a>
            <a
            className="nav-link"
            id="orders-nav"
            data-toggle="pill"
            href="#thong-ke"
            role="tab"
            ><i className="fa fa-chart-bar"></i>Thống kê</a>
              <a
                className="nav-link"
                id="account-nav"
                data-toggle="pill"
                href="#khach-hang"
                role="tab"
                ><i className="fa fa-user"></i>Khách hàng</a>
              <a
                className="nav-link"
                id="account-nav"
                data-toggle="pill"
                href="#nhan-vien"
                role="tab"
                ><i className="fa fa-user"></i>Nhân viên</a>
              
              <a
                className="nav-link"
                id="account-nav"
                href="http://localhost:3000/quan-tri/import_product"
                ><i className="fas fa-file-import"></i>Nhập hàng</a>
              <a
                className="nav-link"
                id="account-nav"
                data-toggle="pill"
                href="#report-pdf"
                role="tab"
                ><i className="fas fa-file-pdf"></i>Report</a>
              
              <a className="nav-link" href="/Sign-in-admin"
                ><i className="fa fa-sign-out-alt"></i>Đăng Xuất</a>
            </div>
          </div>


          {/* ///////// */}
          <div className="col-md-9">
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="dashboard-tab"
                role="tabpanel"
                aria-labelledby="dashboard-nav"
              >  
              </div>

              <div
              className="tab-pane fade doanh-thu"
              id="thong-ke"
              role="tabpanel"
              aria-labelledby="orders-nav">
            
             <div className="container mt-3" >
               <div className="top" style={{display:'flex'}}>
                <div className="all-orders" style={{background: '#ff6f61', width: '240px',padding: '20px 30px', borderRadius: '10px'}}>
                  <p style={{color:'blanchedalmond', fontSize: '20px'}} id="count-order">Tổng số đơn hàng</p>
                </div>
                <div className="revenu" style={{background: '#ff6f61', width: '260px',padding: '20px 30px',marginLeft: '100px',borderRadius: '10px'}}>
                  <p id="sum-revenu" style={{color:'blanchedalmond', fontSize: '20px'}}></p>
                </div>

                <div className="chosen">
                  <p style={{marginLeft:'100px',fontWeight: '600'}}>Lọc doanh thu</p>
                  <div id="result">
                 
                  </div>
                  <select name="statistical" id="" className="combo" style={{height:'25px',width:'150px',marginLeft: '100px'}} onChange={handleSelectChange}>
                    <option value="today">Hôm nay</option>
                    <option value="7d">7 Ngày</option>
                    <option value="30d" >30 Ngày</option>
                    <option value="1y">Cả năm</option>
                  </select>
                  <PageHTML/>
                </div>
                
               </div>

               <div className="status-order-count">
                 <p style={{color: 'blue'}} id="count-order-complete">Đã giao: </p>
                 <p style={{color: 'red'}} id="count-order-cancle">Đã hủy: </p>
                 <p id="count-order-not">Chưa duyệt: </p>
                 <p style={{color: 'green'}} id="count-order-ok">Đã phân công: </p>
               </div>
              

              <div className="product-sold" style={{marginTop: '70px'}}>
                <h3>Sản phẩm đã bán</h3>
                <table className="table">
                  <thead>
                    <th>No</th>
                    <th>Sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng đã bán</th>
                  </thead>
                  <tbody id="spdaban">
                  </tbody>
                </table>
              </div>
    
            </div> 
            </div>
            <div
                className="tab-pane fade"
                id="report-pdf"
                role="tabpanel"
                aria-labelledby="orders-nav"
                
              >
            <div className="container mt-3" >
              <h2 style={{marginLeft: '420px'}}>Report</h2>
            <table className="table">
                  <thead>
                  
                  </thead>
                  <tbody id="listreport">
                    <tr>
                      <td>1</td>
                      <td style={{textAlign: 'left'}}>Báo cáo doanh thu từng tháng trong năm </td>
                      <td>Năm:<select value={"today"} name="statistical" id="combobox-year-revenue" className="combo" style={{height:'25px', width:'150px', marginLeft: '100px'}} onChange={handleSelectChange}>
                        <option value="">None</option>
                      </select></td>
                      <td style={{textAlign:'left'}} id="report-year"></td>
                    </tr>
                    <tr>
                      <td>2</td>  
                      <td style={{textAlign:'left'}}>Báo cáo tồn kho tính đến hiện tại <a href="/quan-tri/Report_QuantityInStock" className="btn btn-primary"><i className="fas fa-search"></i></a></td>
                      <td style={{textAlign:'left'}}></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td style={{textAlign:'left'}}>Báo cáo thống kê TOP những sản phẩm bán chạy <button onclick="product_sold_pdf()" className="btn btn-primary"><i className="fas fa-search"></i></button></td>
                      {/* <span style={{position: 'absolute', marginTop: '130px', marginLeft: '500px'}}> NO: <input id="quantity-product-pdf" type="text" style={{width:'40px'}}> FROM: <input id="date-from-pdf" type="date" style={{width:'170px'}}>
                        TO <input id="date-to-pdf" type="date" style={{width:'170px'}}>

                        </span> */}
                     
                   
                    </tr>
                  </tbody>
                </table>
              </div> 
              </div>




              <div
                className="tab-pane fade"
                id="khuyen-mai"
                role="tabpanel"
                aria-labelledby="orders-nav"
              >
              
               <div className="container mt-3" >
                {/* <!-- Button to Open the Modal --> */}
      <button type="button" className="btn btn-primary" >
        <a href="/quan-tri/addkm">Thêm</a>
   </button>
            <table className="table">
                  <thead>
                    <th>Mã</th>
                    <th>Tên KM</th>
                    <th>Ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Lí do</th>
                    <th>Mã NV</th>
                    <th>Thêm SP</th>
                    <th>Quản lí</th>
                  </thead>
                  <tbody id="listkhuyenmai">
                  </tbody>
                </table>
              </div> 
              </div>


              <div
                className="tab-pane fade"
                id="sp-khuyen-mai"
                role="tabpanel"
                aria-labelledby="orders-nav"
              >
              
               <div className="container mt-3" >
              
   {/* </button> */}
            <table className="table">
                  <thead>
                    <th>Mã</th>
                    <th>Tên KM</th>
                    <th>Sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Giảm</th>
                    <th>Quản lí</th>
                  </thead>
                  <tbody id="listkm">
                  </tbody>
                </table>
              </div> 
              </div>
              



              <div
                className="tab-pane fade"
                id="nhacungcap"
                role="tabpanel"
                aria-labelledby="orders-nav"
              >
              
               <div className="container mt-3" >
                {/* <!-- Button to Open the Modal --> */}
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
        Thêm
   </button>

   {/* <!-- The Modal --> */}
   <div className="modal" id="myModal">
      <div className="modal-dialog">
         <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
               <h4 className="modal-title">Thêm mới nhà cung cấp</h4>
               <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <div className="container mt-3">
                {/* <form name="form_ncc" action="/quan-tri/addncc" method="post" onsubmit="return validateform_ncc()">
                    <div id="alert-ncc" style={{color: 'red'}}></div>
                    <label for="maso">Mã Nhà cung cấp <span style={{color: 'red'}}>*</span></label>
                    <input type="text" name="mancc" className="form-control"></input>
                    <label for="name">Tên <span style={{color: 'red'}}>*</span></label>
                    <input type="text" name="ten" className="form-control"></input>
                    <label for="address">Địa chỉ <span style={{color: 'red'}}>*</span></label>
                    <input type="text" name="diachi" className="form-control"></input>
                    <label for="email">Email <span style={{color: 'red'}}>*</span></label>
                    <input type="text" name="email" className="form-control"></input>
                    <label for="phone">Số điện thoại <span style={{color: 'red'}}>*</span></label>
                    <input type="text" name="sdt" className="form-control"></input>
                    <input type="submit" value="Thêm mới" className="btn btn-primary mt-2" style={{marginLeft: '120px'}}> </
                </form> */}
               </div>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="modal-footer">
               <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
         </div>
      </div>
   </div>
            <table className="table">
                  <thead>
                    <th>Mã số</th>
                    <th>Tên</th>
                    <th>Địa chỉ</th>
                    <th>Email</th>
                    <th>Số điện thoại</th>
                    <th>Quản lí</th>
                  </thead>
                  <tbody id="listncc">
                  </tbody>
                </table>
              </div> 
              </div>
              <div
                className="tab-pane fade"
                id="khach-hang"
                role="tabpanel"
                aria-labelledby="payment-nav"
              >
              <div className="container mt-3" >
         <table className="table">
                <thead>
                  <th>Mã</th>
                  <th>Họ Tên</th>
                  <th>Địa chỉ</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Quản lí</th>
                </thead>
                <tbody id="listkhachhang">
                </tbody>
              </table>
              </div>
            </div> 
            <div
                className="tab-pane fade"
                id="nhan-vien"
                role="tabpanel"
                aria-labelledby="payment-nav"
              >
              <div className="container mt-3" >
                    {/* <!-- Button to Open the Modal --> */}
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal6">
        Thêm
   </button>

   {/* <!-- The Modal --> */}
   <div className="modal" id="myModal6">
      <div className="modal-dialog">
         <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
               <h4 className="modal-title">Thêm mới nhân viên</h4>
               <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <div className="container mt-3">
                {/* <form name="form_nv" action="/quan-tri/addnhanvien" method="post" onsubmit="return validateform_nv()">
                    <div id="alert-nv" style="color: red;"></div>
                    <label for="maso">Mã nhân viên <span style="color: red;">*</span></label>
                    <input type="text" name="id" className="form-control">
                    <label for="maso">họ <span style="color: red;">*</span></label>
                    <input type="text" name="surname" className="form-control">
                    <label for="name">Tên <span style="color: red;">*</span></label>
                    <input type="text" name="name" className="form-control">
                    <label for="name">Giới tính <span style="color: red;">*</span></label>
                    <input className="input-sex" name="sex" type="radio" value="Nam"/>Nam
                    <input className="input-sex" name="sex" type="radio" value="Nữ" />Nữ<br>
                    <label for="age">Ngày sinh <span style="color: red;">*</span></label><br />
                    <input
                      type="date"
                      name="birthday"
                      min="1990-01-02"
                    /><br /><br />
                    <label for="address">Địa chỉ <span style="color: red;">*</span></label>
                    <input type="text" name="address" className="form-control">
                    <label for="email">Email <span style="color: red;">*</span></label>
                    <input type="text" name="email" className="form-control">
                    <label for="phone">Số điện thoại <span style="color: red;">*</span></label>
                    <input type="text" name="phone" className="form-control">
                    <label for="phone">Username <span style="color: red;">*</span></label>
                    <input type="text" name="username" className="form-control">
                    <input type="submit" value="Thêm mới" className="btn btn-primary mt-2"> <br>
                </form> */}
               </div>
            </div>
    
            
         </div>
      </div>
   </div>
              <table className="table">
                <thead>
                  <th>Mã</th>
                  <th>Họ Tên</th>
                  <th>Địa chỉ</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Quản lí</th>
                </thead>
                <tbody id="listnhanvien">
                </tbody>
              </table>
              </div>
            </div> 
            <div
                className="tab-pane fade"
                id="catalog"
                role="tabpanel"
                aria-labelledby="address-nav"
              >
              <div className="container mt-3" >
                {/* <!-- Button to Open the Modal --> */}
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal2">
        Thêm
   </button>

   {/* <!-- The Modal --> */}
   <div className="modal" id="myModal2">
      <div className="modal-dialog">
         <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
               <h4 className="modal-title">Thêm mới loai sản phẩm</h4>
               <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <div className="container mt-3">
                {/* <form name="form_cat" action="/quan-tri/addloai" method="post" onsubmit="return validateform_cat()">
                    <div id="alert-cat" style="color: red;"></div>
                    <label for="maso">Mã loại <span style="color: red;">*</span></label>
                    <input type="text" name="id" className="form-control">
                    <label for="name">Tên loại <span style="color: red;">*</span></label>
                    <input type="text" name="ten" className="form-control">
                    <input type="submit" value="Thêm mới" className="btn btn-primary mt-2"> <br>
                </form> */}
               </div>
            </div>

        
         </div>
      </div>
   </div>
   <table className="table">
                  <thead>
                    <th>Mã số</th>
                    <th>Tên loại</th>
                    <th>Quản lí</th>
                  </thead>
                  <tbody id="listcatalog">
                  </tbody>
                </table>
              </div> 
              </div>
              <div
                className="tab-pane fade"
                id="thuong-hieu"
                role="tabpanel"
                aria-labelledby="address-nav"
              >
              <div className="container mt-3" >
              
                 {/* <!-- Button to Open the Modal --> */}
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal3">
        Thêm
   </button>

   {/* <!-- The Modal --> */}
   <div className="modal" id="myModal3">
      <div className="modal-dialog">
         <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
               <h4 className="modal-title">Thêm mới Thương Hiệu</h4>
               <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <div className="container mt-3">
                {/* <form name="form_th" action="/quan-tri/addth" method="post" onsubmit="return validateform_th()">
                    <div id="alert-th" style="color: red;"></div>
                    <label for="maso">Mã Thương Hiệu <span style="color: red;">*</span></label>
                    <input type="text" name="id" className="form-control">
                    <label for="name">Tên Thương Hiệu <span style="color: red;">*</span></label>
                    <input type="text" name="ten" className="form-control">
                    <input type="submit" value="Thêm mới" className="btn btn-primary mt-2"> <br>
                </form> */}
               </div>
            </div>

        
         </div>
      </div>
   </div>
          <table className="table">
                <thead>
                  <th>Mã thương hiệu</th>
                  <th>Tên thương hiệu</th>
                  <th>Quản lí</th>
                </thead>
                <tbody id="listthuonghieu">
                </tbody>
              </table>
            </div>
              </div>


              <div
                className="tab-pane fade"
                id="orders-tab"
                role="tabpanel"
                aria-labelledby="address-nav"
              >
              {/* <div className="container mt-3" >
                <div className="checkbox-orders">
                <input type="radio" id="all-orders" name="status" value="all" checked="true" onclick="renderOrderAll()">
                <label for="name"><span>Tất cả</span></label>
                <input type="radio" id="not-confirm" name="status" value="not" onclick="renderOrdernot()">
                <label for="name"><span style="color: red;">Chưa duyệt</span></label>
                <input type="radio" id="confirm" name="status" value="ok" onclick="renderOrderok()">
                <label for="name"><span style="color: green;">Đã phân công</span></label>
                <input type="radio" id="complete" name="status" value="complete" onclick="renderOrdercomplete()">
                <label for="name"><span style="color: blue;">Đã giao</span></label>
                <input type="radio" id="cancle" name="status" value="cancle" onclick="renderOrdercancle()">
                <label for="name"><span style="color: red;">Đã hủy</span></label>
              </div> */}
                
   {/* <!-- The Modal --> */}
   <div className="modal" id="myModal10">
      <div className="modal-dialog">
         <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
               <h4 className="modal-title">Phân công giao hàng</h4>
               <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <div className="container mt-3">
                {/* <form action="/quan-tri/confirm_order" method="post" >
                    <label for="maso">Mã Đơn hàng</label>
                    <input id="id_order_rec" type="none" name="iddonhang" className="form-control" value="">
                    <input type="hidden" name="idnvd" value="<%=user.id%>">
                    <label for="maso">Nhân viên giao hàng <span style="color: red;">*</span></label><br>
                    <select name="idnvgh" id="dropdown-nvgh" className="combo" style="height:25px;">
                     
                    </select>
                    <br>
                    <input type="submit" value="Xác nhận" className="btn btn-primary mt-2"> <br>
                </form> */}
               </div>
            </div>

        
         </div>
      </div>
   </div>
   <div className="modal" id="myModal11">
    <div className="modal-dialog">
       <div className="modal-content">
          {/* <!-- Modal Header --> */}
          <div className="modal-header">
             <h4 className="modal-title">Phân công giao hàng</h4>
             <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="modal-body">
            <div className="container mt-3">
              {/* <form action="/quan-tri/change_delivery" method="post" >
                  <label for="maso">Mã Đơn hàng</label>
                  <input id="id_order_rec_1" type="none" name="iddonhang" className="form-control" value="">
                  <input type="hidden" name="idnvd" value="<%=user.id%>">
                  <label for="maso">Nhân viên giao hàng <span style="color: red;">*</span></label><br>
                  <select name="idnvgh" id="dropdown-nvgh1" className="combo" style="height:25px;">
                   
                  </select>
                  <br>
                  <input type="submit" value="Xác nhận" className="btn btn-primary mt-2"> <br>
              </form> */}
             </div>
          </div>

      
       </div>
    </div>
 </div>
          <table className="table">
                <thead>
                  <th>Mã</th>
                  <th>Ngày đặt</th>
                  <th>Thông tin người đặt</th>
                  <th>Status</th>
                  <th>Giá trị</th>
                  <th>Quản lí</th>
                </thead>
                <tbody id="listorders">
                 
                </tbody>
              </table>

            </div>
              </div>
              <div
                className="tab-pane fade"
                id="product"
                role="tabpanel"
                aria-labelledby="address-nav"
              >
              <div className="container mt-3" >
                        {/* <!-- Button to Open the Modal --> */}
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal4">
        Thêm
   </button>

   {/* <!-- The Modal --> */}
   <div className="modal" id="myModal4">
      <div className="modal-dialog">
         <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
               <h4 className="modal-title">Thêm mới sản phẩm</h4>
               <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <div className="container mt-3">
                {/* <form name="form_sp" action="/quan-tri/addsp" method="post" onsubmit="return validateform_sp()">
                    <div id="alert-sp" style="color: red;"></div>
                    <label for="maso">Mã dòng <span style="color: red;">*</span></label>
                    <input type="text" name="id" className="form-control">
                    <label for="name">Tên dòng rượu <span style="color: red;">*</span></label>
                    <input type="text" name="name" className="form-control">
                    <label for="name">Giá <span style="color: red;">*</span></label>
                    <input type="text" name="price" className="form-control">
                    <!-- <label for="name">Trạng thái <span style="color: red;">*</span></label>
                    <input type="text" name="status" className="form-control"> -->
                    <label for="name">Hình ảnh <span style="color: red;">*</span></label>
                    <input type="file" name="image" className="form-control">
                    <label for="name">Mô tả <span style="color: red;">*</span></label>
                    <input type="text" name="des" className="form-control">
                    <label for="name">Loại rượu <span style="color: red;">*</span></label><br>
                    <select name="maloai" id="dropdown-cat" className="combo" style="height:25px;">
                      <option value="">None</option>
                    </select>
                    <br>
                    <label for="name">Thương hiệu <span style="color: red;">*</span></label><br>
                    <select name="math" id="dropdown-brand" className="combo" style="height:25px;">
                      <option value="">None</option>
                    </select>
                    <br>
                    <input type="submit" value="Thêm mới" className="btn btn-primary mt-2" > <br>
                </form> */}
               </div>
            </div>

        
         </div>
      </div>
   </div>
              <table className="table">
                <thead>
                  <th>Mã</th>
                  <th>Tên dòng</th>
                  <th>Giá</th>
                  <th>Hình ảnh</th>
                  <th>SL</th>
                  <th>Loại</th>
                  <th>Quản lí</th><img src="" alt=""></img>
                </thead>
                <tbody id="listproduct">
                </tbody>
              </table>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center" >
                  <li className="page-items prev-item" >
                    <a className="btn-prev page-link" href="#">Previous</a>
                  </li>
                  <div className="number-page" id="number-page"></div>
                  <li className="page-items next-item">
                    <a className="btn-next page-link"  href="#">Next</a>
                  </li>
                </ul>
              </nav>
              </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    {/* </div> */}
    {/* <!-- Back to Top --> */}
    <a href="#" className="back-to-top"><i class="fa fa-chevron-up"></i></a>
    
    </div>
  )
}
