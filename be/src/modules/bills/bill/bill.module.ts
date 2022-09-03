import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhieudatModule } from 'src/modules/phieudat/phieudat/phieudat.module';
import { StaffModule } from 'src/modules/staffs/staff.module';
import { Bill } from '../entities/bill.entity';
import { BillController } from './bill.controller';
import { BillService } from './bill.service';

@Module({
    imports: [TypeOrmModule.forFeature([Bill]),
PhieudatModule,StaffModule], //import entity
    controllers: [BillController], //import controller
    providers: [BillService] //import serv
})
export class BillModule {}
