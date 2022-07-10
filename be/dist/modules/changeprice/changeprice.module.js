"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangepriceModule = void 0;
const common_1 = require("@nestjs/common");
const changeprice_service_1 = require("./changeprice.service");
const changeprice_controller_1 = require("./changeprice.controller");
const typeorm_1 = require("@nestjs/typeorm");
const changeprice_entity_1 = require("./entities/changeprice.entity");
let ChangepriceModule = class ChangepriceModule {
};
ChangepriceModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([changeprice_entity_1.Changeprice])],
        controllers: [changeprice_controller_1.ChangepriceController],
        providers: [changeprice_service_1.ChangepriceService]
    })
], ChangepriceModule);
exports.ChangepriceModule = ChangepriceModule;
//# sourceMappingURL=changeprice.module.js.map