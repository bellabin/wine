import { CreateCtPromotionDto } from './dto/create-ct_promotion.dto';
import { UpdateCtPromotionDto } from './dto/update-ct_promotion.dto';
export declare class CtPromotionService {
    create(createCtPromotionDto: CreateCtPromotionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCtPromotionDto: UpdateCtPromotionDto): string;
    remove(id: number): string;
}
