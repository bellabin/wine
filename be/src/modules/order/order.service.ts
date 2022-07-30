import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  @InjectRepository(Order) private ordRepo: Repository<Order>
  async create(payload: CreateOrderDto) {
    const order = this.ordRepo.create(payload)

    await this.ordRepo.save(order)

    return order
  }

  findAll() {
    return this.ordRepo.find({
      relations: ['staff', 'provider','ct_orders'],
    })
  }

  findOne(MADDH: string) {
    return this.ordRepo.findOne({
      where: { MADDH: MADDH  },
      relations: ['staff', 'provider','ct_orders'],
    })
  }

  async update(MADDH: string, body: UpdateOrderDto) {
    const order = await this.findOne(MADDH)

    if(!order) throw new NotFoundException('order not found')

    return this.ordRepo.update(MADDH, body) 
  }

  async remove(MADDH: string) {
    const order = await this.findOne(MADDH)

    if(!order) throw new NotFoundException('order not found')

    return this.ordRepo.remove(order) 
  }
}
