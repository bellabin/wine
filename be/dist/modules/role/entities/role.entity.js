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
exports.Role = void 0;
const customer_entity_1 = require("../../customers/entities/customer.entity");
const staff_entity_1 = require("../../staffs/entities/staff.entity");
const typeorm_1 = require("typeorm");
let Role = class Role {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'char', primary: true }),
    __metadata("design:type", String)
], Role.prototype, "MANQ", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Role.prototype, "TENNQ", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => staff_entity_1.Staff, staff => staff.role),
    __metadata("design:type", Array)
], Role.prototype, "staffs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => customer_entity_1.Customer, customer => customer.role),
    __metadata("design:type", Array)
], Role.prototype, "customers", void 0);
Role = __decorate([
    (0, typeorm_1.Entity)('nhomquyen')
], Role);
exports.Role = Role;
//# sourceMappingURL=role.entity.js.map