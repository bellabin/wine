import { Cungcap } from "src/modules/cungcap/entities/cungcap.entity";
import { Order } from "src/modules/order/entities/order.entity";
export declare class Provider {
    MANCC: string;
    TENNCC: string;
    DIACHI: string;
    EMAIL: string;
    SDT: string;
    orders: Order[];
    cungcaps: Cungcap[];
}
