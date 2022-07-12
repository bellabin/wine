import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCtPromotionDto } from './dto/create-ct_promotion.dto';
import { UpdateCtPromotionDto } from './dto/update-ct_promotion.dto';
import { CtPromotion } from './entities/ct_promotion.entity';

@Injectable()
export class CtPromotionService {
  @InjectRepository(CtPromotion) private ctpromoRepo: Repository<CtPromotion>
  async create(payload: CreateCtPromotionDto) {
    const ct_promotion = this.ctpromoRepo.create(payload)

    await this.ctpromoRepo.save(ct_promotion)

    return ct_promotion
  }

  findAll() {
    return this.ctpromoRepo.find()
  }

  findOne(MAKM: string, MADONG: string) {
    return this.ctpromoRepo.createQueryBuilder('ct_promotion')
    .innerJoinAndSelect('ct_promotion.promotion', 'khuyenmai')
    .innerJoinAndSelect('ct_promotion.wineline','dongruou')
    .where('ct_promotion.MAKM = :MAKM', {MAKM})
    .andWhere('ct_promotion.MADONG = :MADONG', {MADONG})
    .getOne()
  }

  async update(MAKM: string, MADONG: string, body: UpdateCtPromotionDto) {
    const ct_promotion = await this.findOne(MAKM, MADONG)

    if(!ct_promotion) throw new NotFoundException('not found')

    return this.ctpromoRepo
    .createQueryBuilder()
    .update(CtPromotion) //Entity Cung cap
    .set({PHANTRAMGIAM: body.PHANTRAMGIAM})
    .where('MAKM = :MAKM', { MAKM })
    .andWhere('MADONG = :MADONG', { MADONG })
    .execute()
  }

  async remove(MAKM: string, MADONG: string) {
    const ct_promotion = await this.findOne(MAKM, MADONG)

    return this.ctpromoRepo.remove(ct_promotion) 
  }
}
