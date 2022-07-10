"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CtPromotionModule = void 0;
const common_1 = require("@nestjs/common");
const ct_promotion_service_1 = require("./ct_promotion.service");
const ct_promotion_controller_1 = require("./ct_promotion.controller");
const typeorm_1 = require("@nestjs/typeorm");
const ct_promotion_entity_1 = require("./entities/ct_promotion.entity");
let CtPromotionModule = class CtPromotionModule {
};
CtPromotionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ct_promotion_entity_1.CtPromotion])],
        controllers: [ct_promotion_controller_1.CtPromotionController],
        providers: [ct_promotion_service_1.CtPromotionService]
    })
], CtPromotionModule);
exports.CtPromotionModule = CtPromotionModule;
//# sourceMappingURL=ct_promotion.module.js.map