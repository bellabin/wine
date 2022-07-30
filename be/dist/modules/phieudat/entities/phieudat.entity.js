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
exports.Phieudat = void 0;
const bill_entity_1 = require("../../bills/entities/bill.entity");
const ct_phieudat_entity_1 = require("../../ct_phieudat/entities/ct_phieudat.entity");
const customer_entity_1 = require("../../customers/entities/customer.entity");
const staff_entity_1 = require("../../staffs/entities/staff.entity");
const typeorm_1 = require("typeorm");
let Phieudat = class Phieudat {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'char', primary: true }),
    __metadata("design:type", String)
], Phieudat.prototype, "MAPD", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Phieudat.prototype, "NGAYDAT", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Phieudat.prototype, "HONN", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Phieudat.prototype, "TENNN", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Phieudat.prototype, "DIACHINN", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char' }),
    __metadata("design:type", String)
], Phieudat.prototype, "SDTNN", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Phieudat.prototype, "GHICHU", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Phieudat.prototype, "TRANGTHAI", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => staff_entity_1.Staff, (staff) => staff.MANV),
    (0, typeorm_1.JoinColumn)({ name: 'MANVD' }),
    __metadata("design:type", staff_entity_1.Staff)
], Phieudat.prototype, "staff", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char' }),
    __metadata("design:type", String)
], Phieudat.prototype, "MANVGH", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char' }),
    __metadata("design:type", String)
], Phieudat.prototype, "MAKH", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => customer_entity_1.Customer, (customer) => customer.phieudats),
    (0, typeorm_1.JoinColumn)({ name: 'MAKH' }),
    __metadata("design:type", customer_entity_1.Customer)
], Phieudat.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ct_phieudat_entity_1.CtPhieudat, ct_phieudat => ct_phieudat.phieudat),
    __metadata("design:type", Array)
], Phieudat.prototype, "ct_phieudats", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => bill_entity_1.Bill, (bill) => bill.phieudat),
    __metadata("design:type", bill_entity_1.Bill)
], Phieudat.prototype, "bill", void 0);
Phieudat = __decorate([
    (0, typeorm_1.Entity)('phieudat')
], Phieudat);
exports.Phieudat = Phieudat;
//# sourceMappingURL=phieudat.entity.js.map