import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CtPhieudatModule } from 'src/modules/ct_phieudat/ct_phieudat.module';
import { StaffModule } from 'src/modules/staffs/staff.module';
import { Phieudat } from '../entities/phieudat.entity';
import { PhieudatController } from './phieudat.controller';
import { PhieudatService } from './phieudat.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Phieudat]),
    CtPhieudatModule, StaffModule
  ],
  providers: [PhieudatService],
  controllers: [PhieudatController]
})
export class PhieudatModule {}
