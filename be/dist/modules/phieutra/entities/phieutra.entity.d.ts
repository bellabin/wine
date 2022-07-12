import { Bill } from "src/modules/bills/entities/bill.entity";
import { CtPhieutra } from "src/modules/ct_phieutra/entities/ct_phieutra.entity";
import { Staff } from "src/modules/staffs/entities/staff.entity";
export declare class Phieutra {
    MAPT: string;
    NGAYTRA: Date;
    bill: Bill;
    staff: Staff;
    ct_phieutras: CtPhieutra[];
}
