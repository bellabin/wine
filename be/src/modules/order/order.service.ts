import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CtOrderService } from '../ct_order/ct_order.service';
import { CreateCtOrderDto } from '../ct_order/dto/create-ct_order.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private ordRepo: Repository<Order>,
    private ctOrderService: CtOrderService,
  ){
    
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

  // async create(payload: CreateOrderDto) {
  //   const order = this.ordRepo.create(payload)

  //   await this.ordRepo.save(order)

  //   return order
  // }

  async create(payload: CreateOrderDto) {
		//func handle create new pd
		const order = this.ordRepo.create(payload) //create nhung chua duoc save

		await this.ordRepo.save(order) //khi save thi data moi duoc luu vao db

		const { CTODS } = payload

		const promises = []

		for (const ct_order of CTODS) {
			const createCtOrderDto: CreateCtOrderDto = {
				MADDH: payload.MADDH,
				MADONG: ct_order.MADONG,
				SOLUONG: ct_order.SOLUONG,
				GIA: ct_order.GIA,
			}

			promises.push(this.ctOrderService.create(createCtOrderDto))
		}

		const cTODs = await Promise.all(promises)

		order.ct_orders = cTODs

		return order
	}
}
