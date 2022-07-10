import { Module } from '@nestjs/common';
import { TrademarksService } from './trademarks.service';
import { TrademarksController } from './trademarks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trademarks } from '../entities/trademarks.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Trademarks])],
  providers: [TrademarksService],
  controllers: [TrademarksController]
})
export class TrademarksModule {}
