import { Repository } from "typeorm";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { Customer } from "./entities/customer.entity";
export declare class CustomerService {
    private customerRepo;
    constructor(customerRepo: Repository<Customer>);
    findAll(): Promise<Customer[]>;
    findById(MAKH: string): Promise<Customer>;
    create(payload: CreateCustomerDto): Promise<Customer>;
    update(MAKH: string, body: UpdateCustomerDto): Promise<import("typeorm").UpdateResult>;
    delete(MAKH: string): Promise<Customer>;
}
