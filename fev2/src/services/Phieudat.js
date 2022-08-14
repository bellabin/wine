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
        TRANGTHAI: "CHUA_DUYET",
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

export const findByState = (TRANGTHAI) => {
  return HttpService.get('phieudat',TRANGTHAI)
}