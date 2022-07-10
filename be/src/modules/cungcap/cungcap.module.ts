import { Module } from '@nestjs/common';
import { CungcapService } from './cungcap.service';
import { CungcapController } from './cungcap.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cungcap } from './entities/cungcap.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cungcap])],
  controllers: [CungcapController],
  providers: [CungcapService]
})
export class CungcapModule {}
