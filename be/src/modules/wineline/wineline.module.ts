import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChangepriceModule } from '../changeprice/changeprice.module';
import { WinetypeModule } from '../winetypes/winetype/winetype.module';
import { Wineline } from './entities/wineline.entity';
import { WinelineController } from './wineline.controller';
import { WinelineService } from './wineline.service';

@Module({
  imports: [TypeOrmModule.forFeature([Wineline]),
WinetypeModule,
ChangepriceModule], //import entity
  controllers: [WinelineController], //import controller
  providers: [WinelineService], //import service
  exports:[WinelineService]
})
export class WinelineModule {}
