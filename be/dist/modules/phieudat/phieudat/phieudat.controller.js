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
exports.PhieudatController = void 0;
const common_1 = require("@nestjs/common");
const create_phieudat_dto_1 = require("../dto/create-phieudat.dto");
const update_phieudat_dto_1 = require("../dto/update-phieudat.dto");
const phieudat_service_1 = require("./phieudat.service");
let PhieudatController = class PhieudatController {
    constructor(phieudatService) {
        this.phieudatService = phieudatService;
    }
    findAll() {
        return this.phieudatService.findAll();
    }
    findById(id) {
        return this.phieudatService.findById(id);
    }
    create(payload) {
        return this.phieudatService.create(payload);
    }
    update(id, body) {
        return this.phieudatService.update(id, body);
    }
    delete(id) {
        return this.phieudatService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PhieudatController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PhieudatController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_phieudat_dto_1.CreatePhieudatDto]),
    __metadata("design:returntype", void 0)
], PhieudatController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_phieudat_dto_1.UpdatePhieudatDto]),
    __metadata("design:returntype", void 0)
], PhieudatController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PhieudatController.prototype, "delete", null);
PhieudatController = __decorate([
    (0, common_1.Controller)('phieudat'),
    __metadata("design:paramtypes", [phieudat_service_1.PhieudatService])
], PhieudatController);
exports.PhieudatController = PhieudatController;
//# sourceMappingURL=phieudat.controller.js.map