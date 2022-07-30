import HttpService from "./Gateway"

//API get list products
export const GetListCustomer = async () => {
  return HttpService.get(`customers`)
}

export const GetCustomerById = async (id) => {
  return HttpService.get(`customers/${id}`)
}

export const LoginCustomer = async (payload) => {
  return HttpService.post(`customers/login`, payload)
}


