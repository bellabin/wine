import { Phieudat } from "src/modules/phieudat/entities/phieudat.entity";
import { Phieutra } from "src/modules/phieutra/entities/phieutra.entity";
import { Staff } from "src/modules/staffs/entities/staff.entity";
export declare class Bill {
    MAHD: string;
    NGAY: Date;
    THANHTIEN: number;
    MASOTHUE: string;
    MANV: string;
    staff: Staff;
    phieudat: Phieudat;
    phieutras: Phieutra[];
}
