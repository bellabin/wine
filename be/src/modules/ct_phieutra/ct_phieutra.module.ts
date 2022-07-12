import { Module } from '@nestjs/common';
import { CtPhieutraService } from './ct_phieutra.service';
import { CtPhieutraController } from './ct_phieutra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phieudat } from '../phieudat/entities/phieudat.entity';
import { Phieutra } from '../phieutra/entities/phieutra.entity';
import { CtPhieutra } from './entities/ct_phieutra.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CtPhieutra])],
  controllers: [CtPhieutraController],
  providers: [CtPhieutraService]
})
export class CtPhieutraModule {}
