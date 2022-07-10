import { CtPromotionService } from './ct_promotion.service';
import { CreateCtPromotionDto } from './dto/create-ct_promotion.dto';
import { UpdateCtPromotionDto } from './dto/update-ct_promotion.dto';
export declare class CtPromotionController {
    private readonly ctPromotionService;
    constructor(ctPromotionService: CtPromotionService);
    create(createCtPromotionDto: CreateCtPromotionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCtPromotionDto: UpdateCtPromotionDto): string;
    remove(id: string): string;
}
