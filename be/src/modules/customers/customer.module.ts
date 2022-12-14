import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StaffModule } from "../staffs/staff.module";
import { CustomerController } from "./customer.controller";
import { CustomerService } from "./customer.service";
import { Customer } from "./entities/customer.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Customer]), StaffModule],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
