import { Customer } from "src/modules/customers/entities/customer.entity";
import { Staff } from "src/modules/staffs/entities/staff.entity";
export declare class Role {
    MANQ: string;
    TENNQ: string;
    staffs: Staff[];
    customers: Customer[];
}
