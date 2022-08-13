import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StaffService } from "../staffs/staff.service";
import { CustomerController } from "./customer.controller";
import { CustomerService } from "./customer.service";
import { Customer } from "./entities/customer.entity";
import { forwardRef } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';


@Module({
    imports: [TypeOrmModule.forFeature([Customer]),
    forwardRef(() => AuthModule)],
    controllers: [CustomerController],
    providers: [CustomerService],
    exports:[CustomerService]
})
export class CustomerModule {}