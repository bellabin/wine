import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { Promotion } from './entities/promotion.entity';

@Injectable()
export class PromotionService {
  @InjectRepository(Promotion) private promotionRepo: Repository<Promotion>



  async create(payload: CreatePromotionDto) {

    // console.log(payload)
    const lastPromo = await this.promotionRepo
            .createQueryBuilder('promotion')
            .orderBy('promotion.MAKM', "DESC")
            .limit(1)
            .getOne();
        const lastId = Number(lastPromo.MAKM) + 1;
        payload.MAKM = lastId.toLocaleString('en-US', {
            minimumIntegerDigits: 3,
            useGrouping: false
        });


    const promotion = this.promotionRepo.create(payload)

    await this.promotionRepo.save(promotion)

    return promotion
  }

  findAll() {
    return this.promotionRepo.find({
      relations: ['staff', 'ct_khuyenmais', 'ct_khuyenmais.wineline'],
    })
  }

  findOne(MAKM: string) {
    return this.promotionRepo.findOne({
      where: { MAKM: MAKM  },
      relations: ['staff', 'ct_khuyenmais'],
    })
  }

  async update(MAKM: string, body: UpdatePromotionDto) {
    const promotion = await this.findOne(MAKM)

    if(!promotion) throw new NotFoundException('promotion not found')

    return this.promotionRepo.update(MAKM, body) 
  }

  async remove(MAKM: string) {
    const promotion = await this.findOne(MAKM)

    if(!promotion) throw new NotFoundException('promotion not found')

    return this.promotionRepo.remove(promotion) 
  }
}
