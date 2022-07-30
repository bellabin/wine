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
exports.CtPromotionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ct_promotion_entity_1 = require("./entities/ct_promotion.entity");
let CtPromotionService = class CtPromotionService {
    async create(payload) {
        const ct_promotion = this.ctpromoRepo.create(payload);
        await this.ctpromoRepo.save(ct_promotion);
        return ct_promotion;
    }
    findAll() {
        return this.ctpromoRepo.find({
            relations: ['promotion', 'wineline'],
        });
    }
    findOne(MAKM, MADONG) {
        return this.ctpromoRepo.findOne({
            where: { MADONG: MADONG, MAKM: MAKM },
            relations: ['promotion', 'wineline'],
        });
    }
    async update(MAKM, MADONG, body) {
        const ct_promotion = await this.findOne(MAKM, MADONG);
        if (!ct_promotion)
            throw new common_1.NotFoundException('not found');
        return this.ctpromoRepo
            .createQueryBuilder()
            .update(ct_promotion_entity_1.CtPromotion)
            .set({ PHANTRAMGIAM: body.PHANTRAMGIAM })
            .where('MAKM = :MAKM', { MAKM })
            .andWhere('MADONG = :MADONG', { MADONG })
            .execute();
    }
    async remove(MAKM, MADONG) {
        const ct_promotion = await this.findOne(MAKM, MADONG);
        return this.ctpromoRepo.remove(ct_promotion);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(ct_promotion_entity_1.CtPromotion),
    __metadata("design:type", typeorm_2.Repository)
], CtPromotionService.prototype, "ctpromoRepo", void 0);
CtPromotionService = __decorate([
    (0, common_1.Injectable)()
], CtPromotionService);
exports.CtPromotionService = CtPromotionService;
//# sourceMappingURL=ct_promotion.service.js.map