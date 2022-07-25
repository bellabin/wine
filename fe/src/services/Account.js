import HttpService from "./Gateway"

//API get list products
export const GetListStaffs = async () => {
  return HttpService.get(`staffs`)
}

export const GetStaffsById = async (id) => {
  return HttpService.get(`staffs/${id}`)
}

export const Login = async (username, password) => {
  // console.log(username)
  const loginDto = {
    USERNAME: username,
    PASSWORD: password
  }
  console.log(loginDto)
  return (await HttpService.post('/staffs/login',loginDto))
}

