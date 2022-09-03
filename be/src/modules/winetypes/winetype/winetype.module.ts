import { Module } from '@nestjs/common';
import { WinetypeService } from './winetype.service';
import { WinetypeController } from './winetype.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Winetype } from '../entities/winetype.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Winetype])],
  exports:[WinetypeService],
  providers: [WinetypeService],
  controllers: [WinetypeController]
})
export class WinetypeModule {}
