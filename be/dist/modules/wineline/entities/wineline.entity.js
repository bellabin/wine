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
exports.Wineline = void 0;
const changeprice_entity_1 = require("../../changeprice/entities/changeprice.entity");
const ct_order_entity_1 = require("../../ct_order/entities/ct_order.entity");
const ct_phieudat_entity_1 = require("../../ct_phieudat/entities/ct_phieudat.entity");
const ct_phieunhap_entity_1 = require("../../ct_phieunhap/entities/ct_phieunhap.entity");
const ct_promotion_entity_1 = require("../../ct_promotion/entities/ct_promotion.entity");
const cungcap_entity_1 = require("../../cungcap/entities/cungcap.entity");
const review_entity_1 = require("../../review/entities/review.entity");
const trademarks_entity_1 = require("../../trademarks/entities/trademarks.entity");
const winetype_entity_1 = require("../../winetypes/entities/winetype.entity");
const typeorm_1 = require("typeorm");
let Wineline = class Wineline {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'char', primary: true }),
    __metadata("design:type", String)
], Wineline.prototype, "MADONG", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Wineline.prototype, "TENDONG", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Wineline.prototype, "TRANGTHAI", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Wineline.prototype, "HINHANH", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Wineline.prototype, "MOTA", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Wineline.prototype, "CHITIET", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Wineline.prototype, "SOLUONGTON", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => winetype_entity_1.Winetype, winetype => winetype.winelines),
    (0, typeorm_1.JoinColumn)({ name: 'MALOAI' }),
    __metadata("design:type", winetype_entity_1.Winetype)
], Wineline.prototype, "winetype", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char' }),
    __metadata("design:type", String)
], Wineline.prototype, "MATH", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => trademarks_entity_1.Trademarks, trademark => trademark.winelines),
    (0, typeorm_1.JoinColumn)({ name: 'MATH' }),
    __metadata("design:type", trademarks_entity_1.Trademarks)
], Wineline.prototype, "trademark", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char' }),
    __metadata("design:type", String)
], Wineline.prototype, "MANCC", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ct_phieudat_entity_1.CtPhieudat, ct_phieudat => ct_phieudat.wineline),
    __metadata("design:type", Array)
], Wineline.prototype, "ct_phieudats", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ct_phieunhap_entity_1.CtPhieunhap, ct_phieunhap => ct_phieunhap.wineline),
    __metadata("design:type", Array)
], Wineline.prototype, "ct_phieunhaps", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => changeprice_entity_1.Changeprice, changeprice => changeprice.wineline),
    __metadata("design:type", Array)
], Wineline.prototype, "changeprices", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cungcap_entity_1.Cungcap, (cungcap) => cungcap.wineline),
    __metadata("design:type", Array)
], Wineline.prototype, "cungcaps", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ct_promotion_entity_1.CtPromotion, (ct_khuyenmai) => ct_khuyenmai.wineline),
    __metadata("design:type", Array)
], Wineline.prototype, "ct_khuyenmais", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ct_order_entity_1.CtOrder, (ct_dondathang) => ct_dondathang.wineline),
    __metadata("design:type", Array)
], Wineline.prototype, "ct_orders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => review_entity_1.Review, (review) => review.wineline),
    __metadata("design:type", Array)
], Wineline.prototype, "reviews", void 0);
Wineline = __decorate([
    (0, typeorm_1.Entity)('dongruou')
], Wineline);
exports.Wineline = Wineline;
//# sourceMappingURL=wineline.entity.js.map