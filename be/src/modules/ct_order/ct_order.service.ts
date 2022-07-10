import { Injectable } from '@nestjs/common';
import { CreateCtOrderDto } from './dto/create-ct_order.dto';
import { UpdateCtOrderDto } from './dto/update-ct_order.dto';

@Injectable()
export class CtOrderService {
  create(createCtOrderDto: CreateCtOrderDto) {
    return 'This action adds a new ctOrder';
  }

  findAll() {
    return `This action returns all ctOrder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ctOrder`;
  }

  update(id: number, updateCtOrderDto: UpdateCtOrderDto) {
    return `This action updates a #${id} ctOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} ctOrder`;
  }
}
