"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhieutraModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const phieutra_entity_1 = require("../entities/phieutra.entity");
const phieutra_controller_1 = require("./phieutra.controller");
const phieutra_service_1 = require("./phieutra.service");
let PhieutraModule = class PhieutraModule {
};
PhieutraModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([phieutra_entity_1.Phieutra])],
        controllers: [phieutra_controller_1.PhieutraController],
        providers: [phieutra_service_1.PhieutraService]
    })
], PhieutraModule);
exports.PhieutraModule = PhieutraModule;
//# sourceMappingURL=phieutra.module.js.map