"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CtPromotionService = void 0;
const common_1 = require("@nestjs/common");
let CtPromotionService = class CtPromotionService {
    create(createCtPromotionDto) {
        return 'This action adds a new ctPromotion';
    }
    findAll() {
        return `This action returns all ctPromotion`;
    }
    findOne(id) {
        return `This action returns a #${id} ctPromotion`;
    }
    update(id, updateCtPromotionDto) {
        return `This action updates a #${id} ctPromotion`;
    }
    remove(id) {
        return `This action removes a #${id} ctPromotion`;
    }
};
CtPromotionService = __decorate([
    (0, common_1.Injectable)()
], CtPromotionService);
exports.CtPromotionService = CtPromotionService;
//# sourceMappingURL=ct_promotion.service.js.map