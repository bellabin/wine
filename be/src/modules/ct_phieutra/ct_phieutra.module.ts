import { Module } from '@nestjs/common';
import { CtPhieutraService } from './ct_phieutra.service';
import { CtPhieutraController } from './ct_phieutra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phieudat } from '../phieudat/entities/phieudat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Phieudat])],
  controllers: [CtPhieutraController],
  providers: [CtPhieutraService]
})
export class CtPhieutraModule {}
