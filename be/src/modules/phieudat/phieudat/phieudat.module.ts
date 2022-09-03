import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CtPhieudatModule } from 'src/modules/ct_phieudat/ct_phieudat.module';
import { StaffModule } from 'src/modules/staffs/staff.module';
import { WinelineModule } from 'src/modules/wineline/wineline.module';
import { Phieudat } from '../entities/phieudat.entity';
import { PhieudatController } from './phieudat.controller';
import { PhieudatService } from './phieudat.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Phieudat]),
    CtPhieudatModule, StaffModule, WinelineModule
  ],
  exports:[PhieudatService],
  providers: [PhieudatService],
  controllers: [PhieudatController]
})
export class PhieudatModule {}
