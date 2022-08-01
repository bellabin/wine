import React, { Component } from 'react'
import Button from '@mui/material/Button';
import { Link, Routes } from 'react-router-dom';
import { KeyNavigate } from '../../helper/KeyNavigate';


export default class LayoutAdmin extends Component {
    
    render() {
        
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
                                    <Link
                                        to={KeyNavigate.Layout.concat(KeyNavigate.Provider)}
                                        className="nav-link"
                                        id="address-nav"
                                        data-toggle="pill"
                                        href="#nhacungcap"
                                        role="tab"
                                    ><i className="fa fa-user-tie"></i>Nhà cung cấp</Link>
                                    <Link
                                        to={KeyNavigate.Layout.concat(KeyNavigate.ProductType)}
                                        className="nav-link"
                                        id="payment-nav"
                                        data-toggle="pill"
                                        href="#catalog"
                                        role="tab"
                                    ><i className="fa fa-wine-bottle"></i>Loại sản phẩm</Link>
                                    <Link
                                        to={KeyNavigate.Layout.concat(KeyNavigate.Brand)}
                                        className="nav-link"
                                        id="payment-nav"
                                        data-toggle="pill"
                                        href="#thuong-hieu"
                                        role="tab"
                                    ><i className="fa fa-wine-glass"></i>Thương hiệu</Link>

                                    <Link
                                        to={KeyNavigate.Layout.concat(KeyNavigate.Product)}
                                        className="nav-link"
                                        id="payment-nav"
                                        data-toggle="pill"
                                        href="#product"
                                        role="tab"
                                    ><i className="fa fa-wine-glass-alt"></i>Sản phẩm</Link>


                                    <Link
                                        to={KeyNavigate.Layout.concat(KeyNavigate.Bill)}
                                        className="nav-link"
                                        id="orders-nav"
                                        data-toggle="pill"
                                        href="#orders-tab"
                                        role="tab"
                                    ><i className="fa fa-shopping-bag"></i>Đơn Hàng</Link>


                                    <Link
                                        to={KeyNavigate.Layout.concat(KeyNavigate.Promo)}
                                        className="nav-link"
                                        id="orders-nav"
                                        data-toggle="pill"
                                        href="#khuyen-mai"
                                        role="tab"
                                    ><i className="fa fa-percentage"></i>Khuyến mãi</Link>
                                    <Link
                                        to={KeyNavigate.Layout.concat(KeyNavigate.PromoProduct)}
                                        className="nav-link"
                                        id="orders-nav"
                                        data-toggle="pill"
                                        href="#sp-khuyen-mai"
                                        role="tab"
                                    ><i className="fa fa-percentage"></i>Sản phẩm khuyến mãi</Link>

                                    <Link
                                        to={KeyNavigate.Layout.concat(KeyNavigate.Revenue)}
                                        className="nav-link"
                                        id="orders-nav"
                                        data-toggle="pill"
                                        href="#thong-ke"
                                        role="tab"
                                    ><i className="fa fa-chart-bar"></i>Thống kê</Link>

                                    <Link
                                        to={KeyNavigate.Layout.concat(KeyNavigate.Customer)}
                                        className="nav-link"
                                        id="account-nav"
                                        data-toggle="pill"
                                        href="#khach-hang"
                                        role="tab"
                                    ><i className="fa fa-user"></i>Khách hàng</Link>

                                    <Link
                                        to={KeyNavigate.Layout.concat(KeyNavigate.Staff)}
                                        className="nav-link"
                                        id="account-nav"
                                        data-toggle="pill"
                                        href="#nhan-vien"
                                        role="tab"
                                    ><i className="fa fa-user"></i>Nhân viên</Link>

                                    {/* <a
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
                                    ><i className="fas fa-file-pdf"></i>Report</a> */}

                                    <a className="nav-link" href="/Sign-in-admin"
                                    ><i className="fa fa-sign-out-alt"></i>Đăng Xuất</a>
                                </div>
                            </div>

                            <div className="col-md-9">
                                <Routes>
                                    {this.props.children}
                                </Routes>
                            </div>

                        </div>
                    </div>
                </div>
                {/* </div> */}
                {/* <!-- Back to Top --> */}
                <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>


            </div>
        )
    }
}
