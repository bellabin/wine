import HttpService from "./Gateway"

//API get list products
export const GetListStaff = async () => {
  return HttpService.get(`staffs`)
}

export const GetStaffById = async (id) => {
  return HttpService.get(`staffs/${id}`)
}




