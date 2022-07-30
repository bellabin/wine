import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { brotliDecompress } from 'zlib';
import { CreateCtOrderDto } from './dto/create-ct_order.dto';
import { UpdateCtOrderDto } from './dto/update-ct_order.dto';
import { CtOrder } from './entities/ct_order.entity';

@Injectable()
export class CtOrderService {
  @InjectRepository(CtOrder) private ctorderRepo: Repository<CtOrder>
  async create(payload: CreateCtOrderDto) {
    const ct_order = this.ctorderRepo.create(payload) //create nhung chua duoc save

    await this.ctorderRepo.save(ct_order) //khi save thi data moi duoc luu vao db

    return ct_order
  }

  findAll() {
    return this.ctorderRepo.find({
      relations: ['wineline', 'order'],
    })
  }

  findOne(MADONG: string, MADDH: string) {
    return this.ctorderRepo.findOne({
      where: { MADONG: MADONG, MADDH: MADDH   },
      relations: ['wineline', 'order'],
    })
  }

  async update(MADONG: string, MADDH: string, body: UpdateCtOrderDto) {
    const ct_order = await this.findOne(MADONG, MADDH)

    if(!ct_order) throw new NotFoundException('not found')

    return this.ctorderRepo
    .createQueryBuilder()
    .update(CtOrder) //Entity Cung cap
    .set({SOLUONG: body.SOLUONG, GIA: body.GIA})
    .where('MADONG = :MADONG', { MADONG })
    .andWhere('MADDH = :MADDH', { MADDH })
    .execute() 
  }

  async remove(MADONG: string, MADDH: string) {
    const ct_order = await this.findOne(MADONG, MADDH)

    return this.ctorderRepo.remove(ct_order)
  }
}
