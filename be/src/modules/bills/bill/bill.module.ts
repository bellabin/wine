import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bill } from '../entities/bill.entity';
import { BillController } from './bill.controller';
import { BillService } from './bill.service';

@Module({
    imports: [TypeOrmModule.forFeature([Bill])], //import entity
    controllers: [BillController], //import controller
    providers: [BillService] //import serv
})
export class BillModule {}
