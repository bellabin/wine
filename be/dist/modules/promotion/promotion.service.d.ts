import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { Promotion } from './entities/promotion.entity';
export declare class PromotionService {
    private promotionRepo;
    create(payload: CreatePromotionDto): Promise<Promotion>;
    findAll(): Promise<Promotion[]>;
    findOne(MAKM: string): Promise<Promotion>;
    update(MAKM: string, body: UpdatePromotionDto): Promise<import("typeorm").UpdateResult>;
    remove(MAKM: string): Promise<Promotion>;
}
