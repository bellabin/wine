import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phieunhap } from '../entities/phieunhap.entity';
import { PhieunhapController } from './phieunhap.controller';
import { PhieunhapService } from './phieunhap.service';

@Module({
    imports: [TypeOrmModule.forFeature([Phieunhap])], //import entity
    controllers: [PhieunhapController], //import controller
    providers: [PhieunhapService] //import service
})
export class PhieunhapModule {}
