import { Bill } from "src/modules/bills/entities/bill.entity";
import { Changeprice } from "src/modules/changeprice/entities/changeprice.entity";
import { Order } from "src/modules/order/entities/order.entity";
import { Phieudat } from "src/modules/phieudat/entities/phieudat.entity";
import { Phieunhap } from "src/modules/phieunhap/entities/phieunhap.entity";
import { Phieutra } from "src/modules/phieutra/entities/phieutra.entity";
import { Promotion } from "src/modules/promotion/entities/promotion.entity";
import { Role } from "src/modules/role/entities/role.entity";
export declare class Staff {
    MANV: string;
    HO: string;
    TEN: string;
    GIOITINH: string;
    NGAYSINH: Date;
    DIACHI: string;
    SDT: string;
    EMAIL: string;
    USERNAME: string;
    PASSWORD: string;
    MANQ: string;
    role: Role;
    phieudats: Phieudat[];
    phieunhaps: Phieunhap[];
    phieutras: Phieutra[];
    changeprices: Changeprice[];
    bills: Bill[];
    promotions: Promotion[];
    orders: Order[];
}
