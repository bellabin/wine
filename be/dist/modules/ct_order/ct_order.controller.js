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
exports.CtOrderController = void 0;
const common_1 = require("@nestjs/common");
const ct_order_service_1 = require("./ct_order.service");
const create_ct_order_dto_1 = require("./dto/create-ct_order.dto");
const update_ct_order_dto_1 = require("./dto/update-ct_order.dto");
let CtOrderController = class CtOrderController {
    constructor(ctOrderService) {
        this.ctOrderService = ctOrderService;
    }
    create(createCtOrderDto) {
        return this.ctOrderService.create(createCtOrderDto);
    }
    findAll() {
        return this.ctOrderService.findAll();
    }
    findOne(MADONG, MADDH) {
        return this.ctOrderService.findOne(MADONG, MADDH);
    }
    update(MADONG, MADDH, updateCtOrderDto) {
        return this.ctOrderService.update(MADONG, MADDH, updateCtOrderDto);
    }
    remove(MADONG, MADDH) {
        return this.ctOrderService.remove(MADONG, MADDH);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ct_order_dto_1.CreateCtOrderDto]),
    __metadata("design:returntype", void 0)
], CtOrderController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CtOrderController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('one'),
    __param(0, (0, common_1.Query)('MADONG')),
    __param(1, (0, common_1.Query)('MADDH')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CtOrderController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(''),
    __param(0, (0, common_1.Query)('MADONG')),
    __param(1, (0, common_1.Query)('MADDH')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_ct_order_dto_1.UpdateCtOrderDto]),
    __metadata("design:returntype", void 0)
], CtOrderController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(''),
    __param(0, (0, common_1.Query)('MADONG')),
    __param(1, (0, common_1.Query)('MADDH')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CtOrderController.prototype, "remove", null);
CtOrderController = __decorate([
    (0, common_1.Controller)('ct-order'),
    __metadata("design:paramtypes", [ct_order_service_1.CtOrderService])
], CtOrderController);
exports.CtOrderController = CtOrderController;
//# sourceMappingURL=ct_order.controller.js.map