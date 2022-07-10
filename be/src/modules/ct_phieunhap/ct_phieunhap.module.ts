import { Module } from '@nestjs/common';
import { CtPhieunhapService } from './ct_phieunhap.service';
import { CtPhieunhapController } from './ct_phieunhap.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CtPhieunhap } from './entities/ct_phieunhap.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CtPhieunhap])],
  controllers: [CtPhieunhapController],
  providers: [CtPhieunhapService]
})
export class CtPhieunhapModule {}
