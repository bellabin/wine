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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CtPromotionController = void 0;
const common_1 = require("@nestjs/common");
const ct_promotion_service_1 = require("./ct_promotion.service");
const create_ct_promotion_dto_1 = require("./dto/create-ct_promotion.dto");
const update_ct_promotion_dto_1 = require("./dto/update-ct_promotion.dto");
let CtPromotionController = class CtPromotionController {
    constructor(ctPromotionService) {
        this.ctPromotionService = ctPromotionService;
    }
    create(createCtPromotionDto) {
        return this.ctPromotionService.create(createCtPromotionDto);
    }
    findAll() {
        return this.ctPromotionService.findAll();
    }
    findOne(MAKM, MADONG) {
        return this.ctPromotionService.findOne(MAKM, MADONG);
    }
    update(MAKM, MADONG, updateCtPromotionDto) {
        return this.ctPromotionService.update(MAKM, MADONG, updateCtPromotionDto);
    }
    remove(MAKM, MADONG) {
        return this.ctPromotionService.remove(MAKM, MADONG);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ct_promotion_dto_1.CreateCtPromotionDto]),
    __metadata("design:returntype", void 0)
], CtPromotionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CtPromotionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('one'),
    __param(0, (0, common_1.Query)('MAKM')),
    __param(1, (0, common_1.Query)('MADONG')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CtPromotionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(''),
    __param(0, (0, common_1.Query)('MAKM')),
    __param(1, (0, common_1.Query)('MADONG')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_ct_promotion_dto_1.UpdateCtPromotionDto]),
    __metadata("design:returntype", void 0)
], CtPromotionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(''),
    __param(0, (0, common_1.Query)('MAKM')),
    __param(1, (0, common_1.Query)('MADONG')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CtPromotionController.prototype, "remove", null);
CtPromotionController = __decorate([
    (0, common_1.Controller)('ct-promotion'),
    __metadata("design:paramtypes", [ct_promotion_service_1.CtPromotionService])
], CtPromotionController);
exports.CtPromotionController = CtPromotionController;
//# sourceMappingURL=ct_promotion.controller.js.map