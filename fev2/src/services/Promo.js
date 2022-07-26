import HttpService from "./Gateway"

//API get list products
export const GetListPromo = async () => {
  return HttpService.get(`promotion`)
}

export const GetPromoById = async (id) => {
  return HttpService.get(`promotion/${id}`)
}




