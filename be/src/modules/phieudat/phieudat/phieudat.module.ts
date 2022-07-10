import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phieudat } from '../entities/phieudat.entity';
import { PhieudatController } from './phieudat.controller';
import { PhieudatService } from './phieudat.service';

@Module({
  imports: [TypeOrmModule.forFeature([Phieudat])],
  providers: [PhieudatService],
  controllers: [PhieudatController]
})
export class PhieudatModule {}
