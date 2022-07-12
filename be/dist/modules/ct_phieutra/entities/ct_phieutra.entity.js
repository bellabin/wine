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
exports.CtPhieutra = void 0;
const phieutra_entity_1 = require("../../phieutra/entities/phieutra.entity");
const typeorm_1 = require("typeorm");
let CtPhieutra = class CtPhieutra {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'char', primary: true }),
    __metadata("design:type", String)
], CtPhieutra.prototype, "MAPT", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => phieutra_entity_1.Phieutra, phieutra => phieutra.MAPT),
    (0, typeorm_1.JoinColumn)({ name: 'MAPT' }),
    __metadata("design:type", phieutra_entity_1.Phieutra)
], CtPhieutra.prototype, "phieutra", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', primary: true }),
    __metadata("design:type", Number)
], CtPhieutra.prototype, "IDCTPD", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], CtPhieutra.prototype, "SOLUONG", void 0);
CtPhieutra = __decorate([
    (0, typeorm_1.Entity)('ct_phieutra')
], CtPhieutra);
exports.CtPhieutra = CtPhieutra;
//# sourceMappingURL=ct_phieutra.entity.js.map