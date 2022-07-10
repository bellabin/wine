"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CungcapModule = void 0;
const common_1 = require("@nestjs/common");
const cungcap_service_1 = require("./cungcap.service");
const cungcap_controller_1 = require("./cungcap.controller");
const typeorm_1 = require("@nestjs/typeorm");
const cungcap_entity_1 = require("./entities/cungcap.entity");
let CungcapModule = class CungcapModule {
};
CungcapModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cungcap_entity_1.Cungcap])],
        controllers: [cungcap_controller_1.CungcapController],
        providers: [cungcap_service_1.CungcapService]
    })
], CungcapModule);
exports.CungcapModule = CungcapModule;
//# sourceMappingURL=cungcap.module.js.map