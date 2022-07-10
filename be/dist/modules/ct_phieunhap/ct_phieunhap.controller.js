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
exports.CtPhieunhapController = void 0;
const common_1 = require("@nestjs/common");
const ct_phieunhap_service_1 = require("./ct_phieunhap.service");
const create_ct_phieunhap_dto_1 = require("./dto/create-ct_phieunhap.dto");
const update_ct_phieunhap_dto_1 = require("./dto/update-ct_phieunhap.dto");
let CtPhieunhapController = class CtPhieunhapController {
    constructor(ctPhieunhapService) {
        this.ctPhieunhapService = ctPhieunhapService;
    }
    create(createCtPhieunhapDto) {
        return this.ctPhieunhapService.create(createCtPhieunhapDto);
    }
    findAll() {
        return this.ctPhieunhapService.findAll();
    }
    findOne(id) {
        return this.ctPhieunhapService.findOne(+id);
    }
    update(id, updateCtPhieunhapDto) {
        return this.ctPhieunhapService.update(+id, updateCtPhieunhapDto);
    }
    remove(id) {
        return this.ctPhieunhapService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ct_phieunhap_dto_1.CreateCtPhieunhapDto]),
    __metadata("design:returntype", void 0)
], CtPhieunhapController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CtPhieunhapController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CtPhieunhapController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ct_phieunhap_dto_1.UpdateCtPhieunhapDto]),
    __metadata("design:returntype", void 0)
], CtPhieunhapController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CtPhieunhapController.prototype, "remove", null);
CtPhieunhapController = __decorate([
    (0, common_1.Controller)('ct-phieunhap'),
    __metadata("design:paramtypes", [ct_phieunhap_service_1.CtPhieunhapService])
], CtPhieunhapController);
exports.CtPhieunhapController = CtPhieunhapController;
//# sourceMappingURL=ct_phieunhap.controller.js.map