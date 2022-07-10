import { Module } from '@nestjs/common';
import { CtPhieudatService } from './ct_phieudat.service';
import { CtPhieudatController } from './ct_phieudat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CtPhieudat } from './entities/ct_phieudat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CtPhieudat])],
  controllers: [CtPhieudatController],
  providers: [CtPhieudatService]
})
export class CtPhieudatModule {}
