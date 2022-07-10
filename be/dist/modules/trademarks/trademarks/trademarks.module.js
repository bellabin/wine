"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrademarksModule = void 0;
const common_1 = require("@nestjs/common");
const trademarks_service_1 = require("./trademarks.service");
const trademarks_controller_1 = require("./trademarks.controller");
const typeorm_1 = require("@nestjs/typeorm");
const trademarks_entity_1 = require("../entities/trademarks.entity");
let TrademarksModule = class TrademarksModule {
};
TrademarksModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([trademarks_entity_1.Trademarks])],
        providers: [trademarks_service_1.TrademarksService],
        controllers: [trademarks_controller_1.TrademarksController]
    })
], TrademarksModule);
exports.TrademarksModule = TrademarksModule;
//# sourceMappingURL=trademarks.module.js.map