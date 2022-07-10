"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinelineModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const wineline_entity_1 = require("./entities/wineline.entity");
const wineline_controller_1 = require("./wineline.controller");
const wineline_service_1 = require("./wineline.service");
let WinelineModule = class WinelineModule {
};
WinelineModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([wineline_entity_1.Wineline])],
        controllers: [wineline_controller_1.WinelineController],
        providers: [wineline_service_1.WinelineService]
    })
], WinelineModule);
exports.WinelineModule = WinelineModule;
//# sourceMappingURL=wineline.module.js.map