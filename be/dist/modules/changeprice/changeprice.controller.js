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
exports.ChangepriceController = void 0;
const common_1 = require("@nestjs/common");
const changeprice_service_1 = require("./changeprice.service");
const create_changeprice_dto_1 = require("./dto/create-changeprice.dto");
const update_changeprice_dto_1 = require("./dto/update-changeprice.dto");
let ChangepriceController = class ChangepriceController {
    constructor(changepriceService) {
        this.changepriceService = changepriceService;
    }
    create(createChangepriceDto) {
        return this.changepriceService.create(createChangepriceDto);
    }
    findAll() {
        return this.changepriceService.findAll();
    }
    findOne(MADONG, NGAYTHAYDOI, MANV) {
        return this.changepriceService.findOne(MADONG, NGAYTHAYDOI, MANV);
    }
    update(MADONG, NGAYTHAYDOI, MANV, updateChangepriceDto) {
        return this.changepriceService.update(MADONG, NGAYTHAYDOI, MANV, updateChangepriceDto);
    }
    remove(MADONG, NGAYTHAYDOI, MANV) {
        return this.changepriceService.remove(MADONG, NGAYTHAYDOI, MANV);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_changeprice_dto_1.CreateChangepriceDto]),
    __metadata("design:returntype", void 0)
], ChangepriceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChangepriceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('one'),
    __param(0, (0, common_1.Query)('MADONG')),
    __param(1, (0, common_1.Query)('NGAYTHAYDOI')),
    __param(2, (0, common_1.Query)('MANV')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Date, String]),
    __metadata("design:returntype", void 0)
], ChangepriceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(''),
    __param(0, (0, common_1.Query)('MADONG')),
    __param(1, (0, common_1.Query)('NGAYTHAYDOI')),
    __param(2, (0, common_1.Query)('MANV')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Date, String, update_changeprice_dto_1.UpdateChangepriceDto]),
    __metadata("design:returntype", void 0)
], ChangepriceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(''),
    __param(0, (0, common_1.Query)('MADONG')),
    __param(1, (0, common_1.Query)('NGAYTHAYDOI')),
    __param(2, (0, common_1.Query)('MANV')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Date, String]),
    __metadata("design:returntype", void 0)
], ChangepriceController.prototype, "remove", null);
ChangepriceController = __decorate([
    (0, common_1.Controller)('changeprice'),
    __metadata("design:paramtypes", [changeprice_service_1.ChangepriceService])
], ChangepriceController);
exports.ChangepriceController = ChangepriceController;
//# sourceMappingURL=changeprice.controller.js.map