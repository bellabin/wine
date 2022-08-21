import { Module } from '@nestjs/common';
import { CtOrderService } from './ct_order.service';
import { CtOrderController } from './ct_order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CtOrder } from './entities/ct_order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CtOrder])],
  controllers: [CtOrderController],
  providers: [CtOrderService],
  exports: [CtOrderService],
  
})
export class CtOrderModule {}
