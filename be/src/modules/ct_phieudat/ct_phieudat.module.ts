import { Module } from '@nestjs/common';
import { CtPhieudatService } from './ct_phieudat.service';
import { CtPhieudatController } from './ct_phieudat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CtPhieudat } from './entities/ct_phieudat.entity';
import { WinelineService } from '../wineline/wineline.service';
import { WinelineModule } from '../wineline/wineline.module';

@Module({
  imports: [TypeOrmModule.forFeature([CtPhieudat]),
WinelineModule],
  controllers: [CtPhieudatController],
  providers: [CtPhieudatService],
  exports: [CtPhieudatService],
})
export class CtPhieudatModule {}
