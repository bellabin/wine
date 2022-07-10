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
exports.PhieutraController = void 0;
const common_1 = require("@nestjs/common");
const create_phieutra_dto_1 = require("../dto/create-phieutra.dto");
const update_phieutra_dto_1 = require("../dto/update-phieutra.dto");
const phieutra_service_1 = require("./phieutra.service");
let PhieutraController = class PhieutraController {
    constructor(phieutraService) {
        this.phieutraService = phieutraService;
    }
    findAll() {
        return this.phieutraService.findAll();
    }
    findById(id) {
        return this.phieutraService.findById(id);
    }
    create(payload) {
        return this.phieutraService.create(payload);
    }
    update(id, body) {
        return this.phieutraService.update(id, body);
    }
    delete(id) {
        return this.phieutraService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PhieutraController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PhieutraController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_phieutra_dto_1.CreatePhieutraDto]),
    __metadata("design:returntype", void 0)
], PhieutraController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_phieutra_dto_1.UpdatePhieutraDto]),
    __metadata("design:returntype", void 0)
], PhieutraController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PhieutraController.prototype, "delete", null);
PhieutraController = __decorate([
    (0, common_1.Controller)('phieutra'),
    __metadata("design:paramtypes", [phieutra_service_1.PhieutraService])
], PhieutraController);
exports.PhieutraController = PhieutraController;
//# sourceMappingURL=phieutra.controller.js.map