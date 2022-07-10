import { Injectable } from '@nestjs/common';
import { CreateCtPromotionDto } from './dto/create-ct_promotion.dto';
import { UpdateCtPromotionDto } from './dto/update-ct_promotion.dto';

@Injectable()
export class CtPromotionService {
  create(createCtPromotionDto: CreateCtPromotionDto) {
    return 'This action adds a new ctPromotion';
  }

  findAll() {
    return `This action returns all ctPromotion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ctPromotion`;
  }

  update(id: number, updateCtPromotionDto: UpdateCtPromotionDto) {
    return `This action updates a #${id} ctPromotion`;
  }

  remove(id: number) {
    return `This action removes a #${id} ctPromotion`;
  }
}
