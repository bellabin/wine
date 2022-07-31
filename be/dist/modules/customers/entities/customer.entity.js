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
exports.Customer = void 0;
const phieudat_entity_1 = require("../../phieudat/entities/phieudat.entity");
const review_entity_1 = require("../../review/entities/review.entity");
const role_entity_1 = require("../../role/entities/role.entity");
const typeorm_1 = require("typeorm");
let Customer = class Customer {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'char', primary: true }),
    __metadata("design:type", String)
], Customer.prototype, "MAKH", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Customer.prototype, "HO", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Customer.prototype, "TEN", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Customer.prototype, "GIOITINH", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Customer.prototype, "NGAYSINH", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Customer.prototype, "DIACHI", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Customer.prototype, "SDT", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Customer.prototype, "EMAIL", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Customer.prototype, "USERNAME", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Customer.prototype, "PASSWORD", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char' }),
    __metadata("design:type", String)
], Customer.prototype, "MANQ", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, role => role.customers),
    (0, typeorm_1.JoinColumn)({ name: 'MANQ' }),
    __metadata("design:type", role_entity_1.Role)
], Customer.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => phieudat_entity_1.Phieudat, (phieudat) => phieudat.customer),
    __metadata("design:type", Array)
], Customer.prototype, "phieudats", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => review_entity_1.Review, (review) => review.customer),
    __metadata("design:type", Array)
], Customer.prototype, "reviews", void 0);
Customer = __decorate([
    (0, typeorm_1.Entity)('khachhang')
], Customer);
exports.Customer = Customer;
//# sourceMappingURL=customer.entity.js.map