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
exports.WinetypeController = void 0;
const common_1 = require("@nestjs/common");
const create_winetype_dto_1 = require("../dto/create-winetype.dto");
const update_winetype_dto_1 = require("../dto/update-winetype.dto");
const winetype_service_1 = require("./winetype.service");
let WinetypeController = class WinetypeController {
    constructor(winetypeService) {
        this.winetypeService = winetypeService;
    }
    findAll() {
        return this.winetypeService.findAll();
    }
    findById(id) {
        return this.winetypeService.findById(id);
    }
    create(payload) {
        return this.winetypeService.create(payload);
    }
    update(id, body) {
        return this.winetypeService.update(id, body);
    }
    delete(id) {
        return this.winetypeService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WinetypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WinetypeController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_winetype_dto_1.CreateWinetypeDto]),
    __metadata("design:returntype", void 0)
], WinetypeController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_winetype_dto_1.UpdateWinetypeDto]),
    __metadata("design:returntype", void 0)
], WinetypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WinetypeController.prototype, "delete", null);
WinetypeController = __decorate([
    (0, common_1.Controller)('winetype'),
    __metadata("design:paramtypes", [winetype_service_1.WinetypeService])
], WinetypeController);
exports.WinetypeController = WinetypeController;
//# sourceMappingURL=winetype.controller.js.map