"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhieudatModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const phieudat_entity_1 = require("../entities/phieudat.entity");
const phieudat_controller_1 = require("./phieudat.controller");
const phieudat_service_1 = require("./phieudat.service");
let PhieudatModule = class PhieudatModule {
};
PhieudatModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([phieudat_entity_1.Phieudat])],
        providers: [phieudat_service_1.PhieudatService],
        controllers: [phieudat_controller_1.PhieudatController]
    })
], PhieudatModule);
exports.PhieudatModule = PhieudatModule;
//# sourceMappingURL=phieudat.module.js.map