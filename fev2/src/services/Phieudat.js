import HttpService from "./Gateway"
import * as moment from 'moment'

export const createPhieuDat = (data) => {
    return HttpService.post('phieudat', {
        NGAYDAT: moment(new Date()).format('YYYY-MM-DD'),
        HONN: data.HONN,
        TENNN: data.TENNN,
        DIACHINN: data.DIACHINN,
        SDTNN: data.SDTNN,
        GHICHU: data.GHICHU,
        TRANGTHAI: "Chưa duyệt",
        MANVD: "",
        MANVGH: "",
        MAKH: data.MAKH,
        CTPDS: data.CTPDS
        
        // [
        //   {
        //     MADONG: "001",
        //     SOLUONG: 5,
        //     GIA: 60000
        //   }
        // ]
      })
}

export const UpdatePdById = async (id, data) => {
  console.log(data)
  return HttpService.put(`phieudat/${id}`, {
    MAPD: data.MAPD,
    NGAYDAT: data.NGAYDAT,
    HONN: data.HONN,
    TENNN: data.TENNN,
    DIACHINN: data.DIACHINN,
    SDTNN: data.SDTNN,
    GHICHU: data.GHICHU,
    TRANGTHAI: data.TRANGTHAI,
    MANVD: data.MANVD,
    MANVGH: data.MANVGH,
    MAKH: data.MAKH,
    CTPDS: data.CTPDS

  })
}

export const findByState = (TRANGTHAI) => {
  return HttpService.get('phieudat/state/'.concat(TRANGTHAI))
}

export const getTotal = (data) => {
  return HttpService.post('phieudat/getTotal', { totals: data })
}

export const getListPdByNVGH = (MANV) => {
  return HttpService.get(`phieudat/list/NVGH/${MANV}`)
}

export const getListPdByStateAndNVGH = (TRANGTHAI,MANV) => {
  return HttpService.get(`phieudat/NV&state/${TRANGTHAI},${MANV}`)
}