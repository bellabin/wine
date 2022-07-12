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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CtOrder = void 0;
const order_entity_1 = require("../../order/entities/order.entity");
const wineline_entity_1 = require("../../wineline/entities/wineline.entity");
const typeorm_1 = require("typeorm");
let CtOrder = class CtOrder {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'char', primary: true }),
    __metadata("design:type", String)
], CtOrder.prototype, "MADONG", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => wineline_entity_1.Wineline, wineline => wineline.ct_orders),
    (0, typeorm_1.JoinColumn)({ name: 'MADONG' }),
    __metadata("design:type", wineline_entity_1.Wineline)
], CtOrder.prototype, "wineline", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', primary: true }),
    __metadata("design:type", String)
], CtOrder.prototype, "MADDH", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_entity_1.Order, order => order.ct_orders),
    (0, typeorm_1.JoinColumn)({ name: 'MADDH' }),
    __metadata("design:type", order_entity_1.Order)
], CtOrder.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], CtOrder.prototype, "SOLUONG", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], CtOrder.prototype, "GIA", void 0);
CtOrder = __decorate([
    (0, typeorm_1.Entity)('ct_dondathang')
], CtOrder);
exports.CtOrder = CtOrder;
//# sourceMappingURL=ct_order.entity.js.map