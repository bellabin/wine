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
exports.CtPhieudatController = void 0;
const common_1 = require("@nestjs/common");
const ct_phieudat_service_1 = require("./ct_phieudat.service");
const create_ct_phieudat_dto_1 = require("./dto/create-ct_phieudat.dto");
const update_ct_phieudat_dto_1 = require("./dto/update-ct_phieudat.dto");
let CtPhieudatController = class CtPhieudatController {
    constructor(ctPhieudatService) {
        this.ctPhieudatService = ctPhieudatService;
    }
    create(createCtPhieudatDto) {
        return this.ctPhieudatService.create(createCtPhieudatDto);
    }
    findAll() {
        return this.ctPhieudatService.findAll();
    }
    findOne(IDCTPD, MAPD, MADONG) {
        return this.ctPhieudatService.findOne(IDCTPD, MAPD, MADONG);
    }
    update(IDCTPD, MAPD, MADONG, updateCtPhieudatDto) {
        return this.ctPhieudatService.update(IDCTPD, MAPD, MADONG, updateCtPhieudatDto);
    }
    remove(IDCTPD, MAPD, MADONG) {
        return this.ctPhieudatService.remove(IDCTPD, MAPD, MADONG);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ct_phieudat_dto_1.CreateCtPhieudatDto]),
    __metadata("design:returntype", void 0)
], CtPhieudatController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CtPhieudatController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('one'),
    __param(0, (0, common_1.Query)('IDCTPD')),
    __param(1, (0, common_1.Query)('MAPD')),
    __param(2, (0, common_1.Query)('MADONG')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", void 0)
], CtPhieudatController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(''),
    __param(0, (0, common_1.Query)('IDCTPD')),
    __param(1, (0, common_1.Query)('MAPD')),
    __param(2, (0, common_1.Query)('MADONG')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, update_ct_phieudat_dto_1.UpdateCtPhieudatDto]),
    __metadata("design:returntype", void 0)
], CtPhieudatController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(''),
    __param(0, (0, common_1.Query)('IDCTPD')),
    __param(1, (0, common_1.Query)('MAPD')),
    __param(2, (0, common_1.Query)('MADONG')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", void 0)
], CtPhieudatController.prototype, "remove", null);
CtPhieudatController = __decorate([
    (0, common_1.Controller)('ct-phieudat'),
    __metadata("design:paramtypes", [ct_phieudat_service_1.CtPhieudatService])
], CtPhieudatController);
exports.CtPhieudatController = CtPhieudatController;
//# sourceMappingURL=ct_phieudat.controller.js.map