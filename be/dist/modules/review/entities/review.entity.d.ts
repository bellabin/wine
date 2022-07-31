import { Customer } from "src/modules/customers/entities/customer.entity";
import { Wineline } from "src/modules/wineline/entities/wineline.entity";
export declare class Review {
    MAKH: string;
    customer: Customer;
    NOIDUNG: string;
    RATING: number;
    NGAYDANHGIA: Date;
    MADONG: string;
    wineline: Wineline;
}
