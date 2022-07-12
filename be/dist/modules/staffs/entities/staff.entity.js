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
exports.Staff = void 0;
const bill_entity_1 = require("../../bills/entities/bill.entity");
const changeprice_entity_1 = require("../../changeprice/entities/changeprice.entity");
const order_entity_1 = require("../../order/entities/order.entity");
const phieudat_entity_1 = require("../../phieudat/entities/phieudat.entity");
const phieunhap_entity_1 = require("../../phieunhap/entities/phieunhap.entity");
const phieutra_entity_1 = require("../../phieutra/entities/phieutra.entity");
const promotion_entity_1 = require("../../promotion/entities/promotion.entity");
const role_entity_1 = require("../../role/entities/role.entity");
const typeorm_1 = require("typeorm");
let Staff = class Staff {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'char', primary: true }),
    __metadata("design:type", String)
], Staff.prototype, "MANV", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Staff.prototype, "HO", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Staff.prototype, "TEN", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Staff.prototype, "GIOITINH", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Staff.prototype, "NGAYSINH", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Staff.prototype, "DIACHI", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Staff.prototype, "SDT", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Staff.prototype, "EMAIL", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Staff.prototype, "USERNAME", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Staff.prototype, "PASSWORD", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char' }),
    __metadata("design:type", String)
], Staff.prototype, "MANQ", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, role => role.staffs),
    (0, typeorm_1.JoinColumn)({ name: 'MANQ' }),
    __metadata("design:type", role_entity_1.Role)
], Staff.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => phieudat_entity_1.Phieudat, (phieudat) => phieudat.staff),
    __metadata("design:type", Array)
], Staff.prototype, "phieudats", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => phieunhap_entity_1.Phieunhap, (phieunhap) => phieunhap.staff),
    __metadata("design:type", Array)
], Staff.prototype, "phieunhaps", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => phieutra_entity_1.Phieutra, (phieutra) => phieutra.staff),
    __metadata("design:type", Array)
], Staff.prototype, "phieutras", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => changeprice_entity_1.Changeprice, (changeprice) => changeprice.staff),
    __metadata("design:type", Array)
], Staff.prototype, "changeprices", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => bill_entity_1.Bill, (bill) => bill.staff),
    __metadata("design:type", Array)
], Staff.prototype, "bills", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => promotion_entity_1.Promotion, (promotion) => promotion.staff),
    __metadata("design:type", Array)
], Staff.prototype, "promotions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (order) => order.staff),
    __metadata("design:type", Array)
], Staff.prototype, "orders", void 0);
Staff = __decorate([
    (0, typeorm_1.Entity)('nhanvien')
], Staff);
exports.Staff = Staff;
//# sourceMappingURL=staff.entity.js.map