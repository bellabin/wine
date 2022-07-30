import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { Customer } from "./entities/customer.entity";

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer) private customerRepo: Repository<Customer>
        ) {}

    findAll() {
        return this.customerRepo.find({
            relations: ['role', 'phieudats'],
          })
    }
    
    findById(MAKH : string) {
        return this.customerRepo.findOne({
            where: { MAKH: MAKH  },
            relations: ['role', 'phieudats'],
          })
    }

    findByUsername(USERNAME: string) {
        return this.customerRepo
            .createQueryBuilder('customers')
            .where('customers.USERNAME = :USERNAME', {USERNAME})
            .getOne()
    
    }

   async create (payload:CreateCustomerDto)  {
    const customer = this.customerRepo.create(payload)

    await this.customerRepo.save(customer)

    return customer
   }

   async update (MAKH: string, body: UpdateCustomerDto) {
    const customer = await this.findById(MAKH)

    if(!customer) throw new NotFoundException ('Cus is not exist')

    return this.customerRepo.update(MAKH, body)
   }

   async delete (MAKH: string) {
    const customer = await this.findById(MAKH)

    if(!customer) throw new NotFoundException('Customer is not exist')

    return this.customerRepo.remove(customer)
   }
}