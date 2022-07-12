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
exports.CtPhieutraController = void 0;
const common_1 = require("@nestjs/common");
const ct_phieutra_service_1 = require("./ct_phieutra.service");
const create_ct_phieutra_dto_1 = require("./dto/create-ct_phieutra.dto");
const update_ct_phieutra_dto_1 = require("./dto/update-ct_phieutra.dto");
let CtPhieutraController = class CtPhieutraController {
    constructor(ctPhieutraService) {
        this.ctPhieutraService = ctPhieutraService;
    }
    create(createCtPhieutraDto) {
        return this.ctPhieutraService.create(createCtPhieutraDto);
    }
    findAll() {
        return this.ctPhieutraService.findAll();
    }
    findOne(MAPT, IDCTPD) {
        return this.ctPhieutraService.findOne(MAPT, IDCTPD);
    }
    update(MAPT, IDCTPD, updateCtPhieutraDto) {
        return this.ctPhieutraService.update(MAPT, IDCTPD, updateCtPhieutraDto);
    }
    remove(MAPT, IDCTPD) {
        return this.ctPhieutraService.remove(MAPT, IDCTPD);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ct_phieutra_dto_1.CreateCtPhieutraDto]),
    __metadata("design:returntype", void 0)
], CtPhieutraController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CtPhieutraController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('one'),
    __param(0, (0, common_1.Query)('MAPT')),
    __param(1, (0, common_1.Query)('IDCTPD')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CtPhieutraController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(''),
    __param(0, (0, common_1.Query)('MAPT')),
    __param(1, (0, common_1.Query)('IDCTPD')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_ct_phieutra_dto_1.UpdateCtPhieutraDto]),
    __metadata("design:returntype", void 0)
], CtPhieutraController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(''),
    __param(0, (0, common_1.Query)('MAPT')),
    __param(1, (0, common_1.Query)('IDCTPD')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CtPhieutraController.prototype, "remove", null);
CtPhieutraController = __decorate([
    (0, common_1.Controller)('ct-phieutra'),
    __metadata("design:paramtypes", [ct_phieutra_service_1.CtPhieutraService])
], CtPhieutraController);
exports.CtPhieutraController = CtPhieutraController;
//# sourceMappingURL=ct_phieutra.controller.js.map