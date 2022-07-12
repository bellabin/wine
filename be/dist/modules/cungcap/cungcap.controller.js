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
exports.CungcapController = void 0;
const common_1 = require("@nestjs/common");
const cungcap_service_1 = require("./cungcap.service");
const create_cungcap_dto_1 = require("./dto/create-cungcap.dto");
const update_cungcap_dto_1 = require("./dto/update-cungcap.dto");
let CungcapController = class CungcapController {
    constructor(cungcapService) {
        this.cungcapService = cungcapService;
    }
    create(createCungcapDto) {
        return this.cungcapService.create(createCungcapDto);
    }
    findAll() {
        return this.cungcapService.findAll();
    }
    findOne(MANCC, MADONG) {
        return this.cungcapService.findOne(MANCC, MADONG);
    }
    update(MANCC, MADONG, updateCungcapDto) {
        return this.cungcapService.update(MANCC, MADONG, updateCungcapDto);
    }
    remove(id) {
        return this.cungcapService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cungcap_dto_1.CreateCungcapDto]),
    __metadata("design:returntype", void 0)
], CungcapController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CungcapController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('one'),
    __param(0, (0, common_1.Query)('MANCC')),
    __param(1, (0, common_1.Query)('MADONG')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CungcapController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(''),
    __param(0, (0, common_1.Query)('MANCC')),
    __param(1, (0, common_1.Query)('MADONG')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_cungcap_dto_1.UpdateCungcapDto]),
    __metadata("design:returntype", void 0)
], CungcapController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CungcapController.prototype, "remove", null);
CungcapController = __decorate([
    (0, common_1.Controller)('cungcap'),
    __metadata("design:paramtypes", [cungcap_service_1.CungcapService])
], CungcapController);
exports.CungcapController = CungcapController;
//# sourceMappingURL=cungcap.controller.js.map