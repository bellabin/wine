import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StaffService } from "../staffs/staff.service";
import { CustomerController } from "./customer.controller";
import { CustomerService } from "./customer.service";
import { Customer } from "./entities/customer.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Customer])],
    controllers: [CustomerController],
    providers: [CustomerService]
})
export class CustomerModule {}