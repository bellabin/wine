"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const promotion_entity_1 = require("./entities/promotion.entity");
let PromotionService = class PromotionService {
    async create(payload) {
        const promotion = this.promotionRepo.create(payload);
        await this.promotionRepo.save(promotion);
        return promotion;
    }
    findAll() {
        return this.promotionRepo.find();
    }
    findOne(MAKM) {
        return this.promotionRepo
            .createQueryBuilder('promotion')
            .where('promotion.MAKM = :MAKM', { MAKM })
            .getOne();
    }
    async update(MAKM, body) {
        const promotion = await this.findOne(MAKM);
        if (!promotion)
            throw new common_1.NotFoundException('promotion not found');
        return this.promotionRepo.update(MAKM, body);
    }
    async remove(MAKM) {
        const promotion = await this.findOne(MAKM);
        if (!promotion)
            throw new common_1.NotFoundException('promotion not found');
        return this.promotionRepo.remove(promotion);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(promotion_entity_1.Promotion),
    __metadata("design:type", typeorm_2.Repository)
], PromotionService.prototype, "promotionRepo", void 0);
PromotionService = __decorate([
    (0, common_1.Injectable)()
], PromotionService);
exports.PromotionService = PromotionService;
//# sourceMappingURL=promotion.service.js.map