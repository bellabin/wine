import HttpService from "./Gateway"
import * as moment from 'moment'

export const createPhieuDat = (data) => {
    return HttpService.post('phieudat', {
        NGAYDAT: moment(new Date()).format('YYYY-MM-DD'),
        HONN: "string",
        TENNN: "string",
        DIACHINN: "string",
        SDTNN: "string",
        GHICHU: "string",
        TRANGTHAI: "CHUA_DUYET",
        MANVD: "001",
        MANVGH: "string",
        MAKH: "004",
        CTPDS: [
          {
            MADONG: "001",
            SOLUONG: 5,
            GIA: 60000
          }
        ]
      })
}