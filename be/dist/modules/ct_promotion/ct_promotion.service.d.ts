import { CreateCtPromotionDto } from './dto/create-ct_promotion.dto';
import { UpdateCtPromotionDto } from './dto/update-ct_promotion.dto';
import { CtPromotion } from './entities/ct_promotion.entity';
export declare class CtPromotionService {
    private ctpromoRepo;
    create(payload: CreateCtPromotionDto): Promise<CtPromotion>;
    findAll(): Promise<CtPromotion[]>;
    findOne(MAKM: string, MADONG: string): Promise<CtPromotion>;
    update(MAKM: string, MADONG: string, body: UpdateCtPromotionDto): Promise<import("typeorm").UpdateResult>;
    remove(MAKM: string, MADONG: string): Promise<CtPromotion>;
}
