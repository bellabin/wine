import { CtPromotionService } from './ct_promotion.service';
import { CreateCtPromotionDto } from './dto/create-ct_promotion.dto';
import { UpdateCtPromotionDto } from './dto/update-ct_promotion.dto';
export declare class CtPromotionController {
    private readonly ctPromotionService;
    constructor(ctPromotionService: CtPromotionService);
    create(createCtPromotionDto: CreateCtPromotionDto): Promise<import("./entities/ct_promotion.entity").CtPromotion>;
    findAll(): Promise<import("./entities/ct_promotion.entity").CtPromotion[]>;
    findOne(MAKM: string, MADONG: string): Promise<import("./entities/ct_promotion.entity").CtPromotion>;
    update(MAKM: string, MADONG: string, updateCtPromotionDto: UpdateCtPromotionDto): Promise<import("typeorm").UpdateResult>;
    remove(MAKM: string, MADONG: string): Promise<import("./entities/ct_promotion.entity").CtPromotion>;
}
