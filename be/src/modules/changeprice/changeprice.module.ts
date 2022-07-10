import { Module } from '@nestjs/common';
import { ChangepriceService } from './changeprice.service';
import { ChangepriceController } from './changeprice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Changeprice } from './entities/changeprice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Changeprice])],
  controllers: [ChangepriceController],
  providers: [ChangepriceService]
})
export class ChangepriceModule {}
