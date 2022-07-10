import { PartialType } from '@nestjs/mapped-types';
import { CreateCtPromotionDto } from './create-ct_promotion.dto';

export class UpdateCtPromotionDto extends PartialType(CreateCtPromotionDto) {}
