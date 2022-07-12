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
exports.Order = void 0;
const ct_order_entity_1 = require("../../ct_order/entities/ct_order.entity");
const provider_entity_1 = require("../../provider/entities/provider.entity");
const staff_entity_1 = require("../../staffs/entities/staff.entity");
const typeorm_1 = require("typeorm");
let Order = class Order {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'char', primary: true }),
    __metadata("design:type", String)
], Order.prototype, "MADDH", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Order.prototype, "NGAYDAT", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char' }),
    __metadata("design:type", String)
], Order.prototype, "MANV", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => staff_entity_1.Staff, staff => staff.orders),
    (0, typeorm_1.JoinColumn)({ name: 'MANV' }),
    __metadata("design:type", staff_entity_1.Staff)
], Order.prototype, "staff", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char' }),
    __metadata("design:type", String)
], Order.prototype, "MANCC", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => provider_entity_1.Provider, provider => provider.orders),
    (0, typeorm_1.JoinColumn)({ name: 'MANCC' }),
    __metadata("design:type", provider_entity_1.Provider)
], Order.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ct_order_entity_1.CtOrder, (ct_dondathang) => ct_dondathang.order),
    __metadata("design:type", Array)
], Order.prototype, "ct_orders", void 0);
Order = __decorate([
    (0, typeorm_1.Entity)('dondathang')
], Order);
exports.Order = Order;
//# sourceMappingURL=order.entity.js.map