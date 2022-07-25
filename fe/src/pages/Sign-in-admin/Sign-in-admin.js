import React, { useState, useEffect } from 'react'
import { GetListStaffs, Login } from '../../services/Account'
import { useNavigate } from 'react-router-dom'



export default function SignInAdminPage() {
  const navigate = useNavigate();

  const [listStaffs, setListStaffs] = useState([])

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  

  

  const showData = async () => {
    
    console.log("username", username)
    console.log("password", password)

    //goi api login
    const login = (await Login(username, password)).data

    console.log(login)
  }
  const [error, setError] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    console.log("username", username)
    const login = (await Login(username, password).then(response => {
      if(response.status === 201) {
        
        console.log('hghgjg')
        navigate('/admin')
      }
    },reason => {
        setError('Sai tên đăng nhập hoặc mật khẩu')
    }))
  }
    

  //demo cach goi api
  useEffect(() => {
    async function fetchListStaffs () {
      const staffs = (await GetListStaffs()).data

      setListStaffs(staffs)
    }
    
    fetchListStaffs()
  }, [listStaffs])
  //console.log(username)
  

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
                      onChange={(e) => setUsername(e.target.value)}
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
                      onChange={(e) => setPassword(e.target.value)}
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
                    <button  onClick={handleSubmit}>Đăng nhập</button>
                    {error?<p style={{color: "red"}}>{ error}</p>:null}
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
