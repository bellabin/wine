"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CtOrderModule = void 0;
const common_1 = require("@nestjs/common");
const ct_order_service_1 = require("./ct_order.service");
const ct_order_controller_1 = require("./ct_order.controller");
const typeorm_1 = require("@nestjs/typeorm");
const ct_order_entity_1 = require("./entities/ct_order.entity");
let CtOrderModule = class CtOrderModule {
};
CtOrderModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ct_order_entity_1.CtOrder])],
        controllers: [ct_order_controller_1.CtOrderController],
        providers: [ct_order_service_1.CtOrderService]
    })
], CtOrderModule);
exports.CtOrderModule = CtOrderModule;
//# sourceMappingURL=ct_order.module.js.map