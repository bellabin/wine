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
exports.Promotion = void 0;
const ct_promotion_entity_1 = require("../../ct_promotion/entities/ct_promotion.entity");
const staff_entity_1 = require("../../staffs/entities/staff.entity");
const typeorm_1 = require("typeorm");
let Promotion = class Promotion {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'char', primary: true }),
    __metadata("design:type", String)
], Promotion.prototype, "MAKM", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Promotion.prototype, "TENKM", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Promotion.prototype, "NGAYBATDAU", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Promotion.prototype, "NGAYKETTHUC", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Promotion.prototype, "LIDO", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char' }),
    __metadata("design:type", String)
], Promotion.prototype, "MANV", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => staff_entity_1.Staff, staff => staff.promotions),
    (0, typeorm_1.JoinColumn)({ name: 'MANV' }),
    __metadata("design:type", staff_entity_1.Staff)
], Promotion.prototype, "staff", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ct_promotion_entity_1.CtPromotion, (ct_khuyenmai) => ct_khuyenmai.promotion),
    __metadata("design:type", Array)
], Promotion.prototype, "ct_khuyenmais", void 0);
Promotion = __decorate([
    (0, typeorm_1.Entity)('khuyenmai')
], Promotion);
exports.Promotion = Promotion;
//# sourceMappingURL=promotion.entity.js.map