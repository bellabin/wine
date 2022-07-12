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
exports.Phieunhap = void 0;
const ct_phieunhap_entity_1 = require("../../ct_phieunhap/entities/ct_phieunhap.entity");
const order_entity_1 = require("../../order/entities/order.entity");
const staff_entity_1 = require("../../staffs/entities/staff.entity");
const typeorm_1 = require("typeorm");
let Phieunhap = class Phieunhap {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'char', primary: true }),
    __metadata("design:type", String)
], Phieunhap.prototype, "MAPN", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Phieunhap.prototype, "NGAYLAP", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => staff_entity_1.Staff, staff => staff.MANV),
    (0, typeorm_1.JoinColumn)({ name: 'MANV' }),
    __metadata("design:type", staff_entity_1.Staff)
], Phieunhap.prototype, "staff", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => order_entity_1.Order),
    (0, typeorm_1.JoinColumn)({ name: 'MADDH' }),
    __metadata("design:type", order_entity_1.Order)
], Phieunhap.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ct_phieunhap_entity_1.CtPhieunhap, ct_phieunhap => ct_phieunhap.phieunhap),
    __metadata("design:type", Array)
], Phieunhap.prototype, "ct_phieunhaps", void 0);
Phieunhap = __decorate([
    (0, typeorm_1.Entity)('phieunhap')
], Phieunhap);
exports.Phieunhap = Phieunhap;
//# sourceMappingURL=phieunhap.entity.js.map