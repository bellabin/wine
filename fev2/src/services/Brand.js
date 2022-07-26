import HttpService from "./Gateway"

//API get list products
export const GetListBrand = async () => {
  return HttpService.get(`trademarks`)
}

export const GetBrandById = async (id) => {
  return HttpService.get(`trademarks/${id}`)
}




