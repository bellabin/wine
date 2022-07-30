import { Bill } from "src/modules/bills/entities/bill.entity";
import { CtPhieudat } from "src/modules/ct_phieudat/entities/ct_phieudat.entity";
import { Customer } from "src/modules/customers/entities/customer.entity";
import { Staff } from "src/modules/staffs/entities/staff.entity";
export declare class Phieudat {
    MAPD: string;
    NGAYDAT: Date;
    HONN: string;
    TENNN: string;
    DIACHINN: string;
    SDTNN: string;
    GHICHU: string;
    TRANGTHAI: string;
    staff: Staff;
    MANVGH: string;
    MAKH: string;
    customer: Customer;
    ct_phieudats: CtPhieudat[];
    bill: Bill;
}
