import React, { Component } from 'react'
import Button from '@mui/material/Button';
import { Link, Routes } from 'react-router-dom';
import { KeyNavigate } from '../../helper/KeyNavigate';
import { GetListStaff, LoginStaff } from '../../services/Staff';

export default class LoginAdmin extends Component {
    //const navigate = useNavigate();
    constructor(props) {
        super(props);
        this.state = {
            listStaffs: [],
            username: '',
            password: '',
            error: ''
        };
    }

    componentDidMount() {
        console.log('sadasd');
        // async function fetchListStaffs() {
        //     const staffs = (await GetListStaff()).data

        //     this.setListStaffs(staffs)
        //     console.log(this.state.listStaffs)
        // };

        // fetchListStaffs()
    }




    handleSubmit = async (event) => {
        event.preventDefault();
        const payload = {
            USERNAME: this.state.username,
            PASSWORD: this.state.password,
        }
        console.log('payload', payload);
        await LoginStaff(payload).then(response => {
            if (response.status === 201) {
                
                console.log('success')
                return (
                    <Link>to={KeyNavigate.Admin}</Link>
                )
                //navigate('/admin')
            }
        }, error => {
            this.setState({error: 'Sai tên đăng nhập hoặc mật khẩu'});
        })
    }




    //demo cach goi api
    // useEffect(() => {
    //     async function fetchListStaffs() {
    //         const staffs = (await GetListStaffs()).data

    //         setListStaffs(staffs)
    //     }

    //     fetchListStaffs()
    // }, [listStaffs])

    render() {
        return (

            <div>
                <div class="top-bar">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-6">
                                <i class="fa fa-envelope"></i>tamtvh96@gmail
                            </div>
                            <div class="col-sm-6">
                                <i class="fa fa-phone-alt"></i>+963548171
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Top bar End --> */}

                {/* <!-- Nav Bar Start --> */}
                <div class="nav">
                    <div class="container-fluid">
                        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                            <a href="#" class="navbar-brand">MENU</a>
                            <button
                                type="button"
                                class="navbar-toggler"
                                data-toggle="collapse"
                                data-target="#navbarCollapse"
                            >
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div
                                class="collapse navbar-collapse justify-content-between"
                                id="navbarCollapse"
                            >
                                <div class="navbar-nav mr-auto">
                                    <a href="/" class="nav-item nav-link">Trang Chủ</a>
                                    <div class="navbar-nav ml-auto">
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                {/* <!-- Nav Bar End --> */}



                {/* <!-- Breadcrumb Start --> */}
                <div class="breadcrumb-wrap">
                    <div class="container-fluid">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Trang chủ</a></li>
                            <li class="breadcrumb-item active">Đăng nhập trang quản trị</li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Breadcrumb End --> */}

                {/* <!-- Login Start --> */}
                <div class="login">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-6 mx-auto">
                                <div class="login-form">
                                    <form  >
                                        <div class="row">
                                            <legend class="text-center">Đăng nhập Admin</legend>
                                            <div class="col-md-6">
                                                <label for="username">Username</label>
                                                <input
                                                    id="username"
                                                    name="username"
                                                    class="form-control"
                                                    type="text"
                                                    placeholder="Username"
                                                    onChange={(e) => this.setState({ username: e.target.value})}
                                                />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="password">Mật khẩu</label>
                                                <input
                                                    id="password"
                                                    name="password"
                                                    class="form-control"
                                                    type="password"
                                                    placeholder="Mật khẩu"
                                                    onChange={(e) => this.setState({ password: e.target.value})}
                                                />
                                            </div>
                                            <div class="col-md-12">
                                                <div class="custom-control custom-checkbox">
                                                    {/* <!-- <input type="checkbox" class="custom-control-input" id="newaccount">
                                            <label class="custom-control-label" for="newaccount">Lưu đăng nhập</label> --> */}
                                                    <a href="">Quên mật khẩu?</a>
                                                </div>
                                            </div>
                                            <div class="col-md-12 text-center">
                                                <button onClick={(e) => this.handleSubmit(e)}>Đăng nhập</button>
                                            {this.state.error ? <p style={{ color: "red" }}>{this.state.error}</p> : null}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Login End --> */}

                {/* <!-- Back to Top --> */}
                <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

            </div>
        )
    }
}
