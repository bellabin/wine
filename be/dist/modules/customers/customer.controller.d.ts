import { CustomerService } from "./customer.service";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
export declare class CustomerController {
    private customerService;
    constructor(customerService: CustomerService);
    findAll(): Promise<import("./entities/customer.entity").Customer[]>;
    findById(id: string): Promise<import("./entities/customer.entity").Customer>;
    create(payload: CreateCustomerDto): Promise<import("./entities/customer.entity").Customer>;
    update(id: string, body: UpdateCustomerDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("./entities/customer.entity").Customer>;
}
