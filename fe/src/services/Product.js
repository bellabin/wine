import HttpService from "./Gateway"

//API get list products
export const GetListProduct = async () => {
  return HttpService.get(`winelines`)
}

export const GetProductById = async (id) => {
  return HttpService.get(`winelines/${id}`)
}
