"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhieunhapModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const phieunhap_entity_1 = require("../entities/phieunhap.entity");
const phieunhap_controller_1 = require("./phieunhap.controller");
const phieunhap_service_1 = require("./phieunhap.service");
let PhieunhapModule = class PhieunhapModule {
};
PhieunhapModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([phieunhap_entity_1.Phieunhap])],
        controllers: [phieunhap_controller_1.PhieunhapController],
        providers: [phieunhap_service_1.PhieunhapService]
    })
], PhieunhapModule);
exports.PhieunhapModule = PhieunhapModule;
//# sourceMappingURL=phieunhap.module.js.map