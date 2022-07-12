import { CtPromotion } from "src/modules/ct_promotion/entities/ct_promotion.entity";
import { Staff } from "src/modules/staffs/entities/staff.entity";
export declare class Promotion {
    MAKM: string;
    TENKM: string;
    NGAYBATDAU: Date;
    NGAYKETTHUC: Date;
    LIDO: string;
    MANV: string;
    staff: Staff;
    ct_khuyenmais: CtPromotion[];
}
