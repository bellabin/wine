import HttpService from "./Gateway"

//API get list products
export const GetListBill = async () => {
  return HttpService.get(`bill`)
}

export const GetBillById = async (id) => {
  return HttpService.get(`bill/${id}`)
}




