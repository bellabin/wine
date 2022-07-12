import { CtOrder } from "src/modules/ct_order/entities/ct_order.entity";
import { Provider } from "src/modules/provider/entities/provider.entity";
import { Staff } from "src/modules/staffs/entities/staff.entity";
export declare class Order {
    MADDH: string;
    NGAYDAT: Date;
    MANV: string;
    staff: Staff;
    MANCC: string;
    provider: Provider;
    ct_orders: CtOrder[];
}
