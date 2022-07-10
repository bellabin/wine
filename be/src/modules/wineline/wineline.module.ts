import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wineline } from './entities/wineline.entity';
import { WinelineController } from './wineline.controller';
import { WinelineService } from './wineline.service';

@Module({
  imports: [TypeOrmModule.forFeature([Wineline])], //import entity
  controllers: [WinelineController], //import controller
  providers: [WinelineService] //import service
})
export class WinelineModule {}
