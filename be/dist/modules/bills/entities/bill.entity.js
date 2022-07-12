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
exports.Bill = void 0;
const phieudat_entity_1 = require("../../phieudat/entities/phieudat.entity");
const phieutra_entity_1 = require("../../phieutra/entities/phieutra.entity");
const staff_entity_1 = require("../../staffs/entities/staff.entity");
const typeorm_1 = require("typeorm");
let Bill = class Bill {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'char', primary: true }),
    __metadata("design:type", String)
], Bill.prototype, "MAHD", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Bill.prototype, "NGAY", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], Bill.prototype, "THANHTIEN", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Bill.prototype, "MASOTHUE", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char' }),
    __metadata("design:type", String)
], Bill.prototype, "MANV", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => staff_entity_1.Staff, staff => staff.bills),
    (0, typeorm_1.JoinColumn)({ name: 'MANV' }),
    __metadata("design:type", staff_entity_1.Staff)
], Bill.prototype, "staff", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => phieudat_entity_1.Phieudat),
    (0, typeorm_1.JoinColumn)({ name: 'MAPD' }),
    __metadata("design:type", phieudat_entity_1.Phieudat)
], Bill.prototype, "phieudat", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => phieutra_entity_1.Phieutra, phieutra => phieutra.bill),
    __metadata("design:type", Array)
], Bill.prototype, "phieutras", void 0);
Bill = __decorate([
    (0, typeorm_1.Entity)('hoadon')
], Bill);
exports.Bill = Bill;
//# sourceMappingURL=bill.entity.js.map