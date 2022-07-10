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
exports.PhieunhapController = void 0;
const common_1 = require("@nestjs/common");
const create_phieunhap_dto_1 = require("../dto/create-phieunhap.dto");
const update_phieunhap_dto_1 = require("../dto/update-phieunhap.dto");
const phieunhap_service_1 = require("./phieunhap.service");
let PhieunhapController = class PhieunhapController {
    constructor(pnService) {
        this.pnService = pnService;
    }
    findAll() {
        return this.pnService.findAll();
    }
    findById(id) {
        return this.pnService.findById(id);
    }
    create(payload) {
        return this.pnService.create(payload);
    }
    update(id, body) {
        return this.pnService.update(id, body);
    }
    delete(id) {
        return this.pnService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PhieunhapController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PhieunhapController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_phieunhap_dto_1.CreatePhieunhapDto]),
    __metadata("design:returntype", void 0)
], PhieunhapController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_phieunhap_dto_1.UpdatePhieunhapDto]),
    __metadata("design:returntype", void 0)
], PhieunhapController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PhieunhapController.prototype, "delete", null);
PhieunhapController = __decorate([
    (0, common_1.Controller)('phieunhap'),
    __metadata("design:paramtypes", [phieunhap_service_1.PhieunhapService])
], PhieunhapController);
exports.PhieunhapController = PhieunhapController;
//# sourceMappingURL=phieunhap.controller.js.map