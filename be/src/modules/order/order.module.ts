import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { CtOrderModule } from '../ct_order/ct_order.module';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), 
  CtOrderModule],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
