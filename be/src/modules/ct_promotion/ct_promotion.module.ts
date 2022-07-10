import { Module } from '@nestjs/common';
import { CtPromotionService } from './ct_promotion.service';
import { CtPromotionController } from './ct_promotion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CtPromotion } from './entities/ct_promotion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CtPromotion])],
  controllers: [CtPromotionController],
  providers: [CtPromotionService]
})
export class CtPromotionModule {}
