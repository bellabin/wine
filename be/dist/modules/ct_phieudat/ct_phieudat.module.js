"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CtPhieudatModule = void 0;
const common_1 = require("@nestjs/common");
const ct_phieudat_service_1 = require("./ct_phieudat.service");
const ct_phieudat_controller_1 = require("./ct_phieudat.controller");
const typeorm_1 = require("@nestjs/typeorm");
const ct_phieudat_entity_1 = require("./entities/ct_phieudat.entity");
let CtPhieudatModule = class CtPhieudatModule {
};
CtPhieudatModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ct_phieudat_entity_1.CtPhieudat])],
        controllers: [ct_phieudat_controller_1.CtPhieudatController],
        providers: [ct_phieudat_service_1.CtPhieudatService]
    })
], CtPhieudatModule);
exports.CtPhieudatModule = CtPhieudatModule;
//# sourceMappingURL=ct_phieudat.module.js.map