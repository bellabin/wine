import { CtPhieunhap } from "src/modules/ct_phieunhap/entities/ct_phieunhap.entity";
import { Order } from "src/modules/order/entities/order.entity";
import { Staff } from "src/modules/staffs/entities/staff.entity";
export declare class Phieunhap {
    MAPN: string;
    NGAYLAP: Date;
    staff: Staff;
    order: Order;
    ct_phieunhaps: CtPhieunhap[];
}
