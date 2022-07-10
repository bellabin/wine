import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phieutra } from '../entities/phieutra.entity';
import { PhieutraController } from './phieutra.controller';
import { PhieutraService } from './phieutra.service';

@Module({
    imports: [TypeOrmModule.forFeature([Phieutra])], //import entity
    controllers: [PhieutraController], //import controller
     providers: [PhieutraService] //import service
})
export class PhieutraModule {}
