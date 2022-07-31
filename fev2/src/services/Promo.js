import HttpService from "./Gateway"

//API get list products
export const GetListPromo = async () => {
  return HttpService.get(`promotion`)
}

export const GetPromoById = async (id) => {
  return HttpService.get(`promotion/${id}`)
}




export const UpdatePromoById = async (id, data) => {
  return HttpService.put(`promotion/${id}`,{
    MAKM: data.MAKM,
    TENKM: data.TENKM,
    NGAYBATDAU: data.NGAYBATDAU,
    NGAYKETTHUC: data.NGAYKETTHUC,
    LIDO: data.LIDO,
    MANV: data.MANV,

  })
}

export const DeletePromoById = async (id) => {
  return HttpService.delete(`promotion/${id}`)
}

export const CreatePromo = async (data) => {
  return HttpService.post(`promotion`,{
    MAKM: data.MAKM,
    TENKM: data.TENKM,
    NGAYBATDAU: data.NGAYBATDAU,
    NGAYKETTHUC: data.NGAYKETTHUC,
    LIDO: data.LIDO,
    MANV: data.MANV,

  })
}




///////


export const GetListCtPromo = async () => {
  return HttpService.get(`ct-promotion`)
}

export const GetCtPromoById = async (id) => {
  return HttpService.get(`ct-promotion/${id}`)
}

export const UpdateCtPromoById = async (id, data) => {
  return HttpService.put(`ct-promotion/${id}`,{
    MAKM: data.MAKM,
    MADONG: data.MADONG,
    PHANTRAMGIAM: data.PHANTRAMGIAM,
    

  })
}

export const DeleteCtPromoById = async (id) => {
  return HttpService.delete(`ct-promotion/${id}`)
}

export const CreateCtPromo = async (data) => {
  return HttpService.post(`ct-promotion`,{
    MAKM: data.MAKM,
    MADONG: data.MADONG,
    PHANTRAMGIAM: data.PHANTRAMGIAM,

  })
}