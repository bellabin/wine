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
exports.WinelineController = void 0;
const common_1 = require("@nestjs/common");
const create_wineline_dto_1 = require("./dto/create-wineline.dto");
const update_wineline_dto_1 = require("./dto/update-wineline.dto");
const wineline_service_1 = require("./wineline.service");
let WinelineController = class WinelineController {
    constructor(winelineService) {
        this.winelineService = winelineService;
    }
    findAll() {
        return this.winelineService.findAll();
    }
    findById(id) {
        return this.winelineService.findById(id);
    }
    create(payload) {
        return this.winelineService.create(payload);
    }
    update(id, body) {
        return this.winelineService.update(id, body);
    }
    delete(id) {
        return this.winelineService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WinelineController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WinelineController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_wineline_dto_1.CreateWinelineDto]),
    __metadata("design:returntype", void 0)
], WinelineController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_wineline_dto_1.UpdateWinelineDto]),
    __metadata("design:returntype", void 0)
], WinelineController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WinelineController.prototype, "delete", null);
WinelineController = __decorate([
    (0, common_1.Controller)('winelines'),
    __metadata("design:paramtypes", [wineline_service_1.WinelineService])
], WinelineController);
exports.WinelineController = WinelineController;
//# sourceMappingURL=wineline.controller.js.map