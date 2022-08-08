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
exports.CtPhieudat = void 0;
const ct_phieutra_entity_1 = require("../../ct_phieutra/entities/ct_phieutra.entity");
const phieudat_entity_1 = require("../../phieudat/entities/phieudat.entity");
const wineline_entity_1 = require("../../wineline/entities/wineline.entity");
const typeorm_1 = require("typeorm");
let CtPhieudat = class CtPhieudat {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'int', primary: true }),
    __metadata("design:type", Number)
], CtPhieudat.prototype, "IDCTPD", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char' }),
    __metadata("design:type", String)
], CtPhieudat.prototype, "MAPD", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => phieudat_entity_1.Phieudat, phieudat => phieudat.ct_phieudats),
    (0, typeorm_1.JoinColumn)({ name: 'MAPD' }),
    __metadata("design:type", phieudat_entity_1.Phieudat)
], CtPhieudat.prototype, "phieudat", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char' }),
    __metadata("design:type", String)
], CtPhieudat.prototype, "MADONG", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => wineline_entity_1.Wineline, wineline => wineline.ct_phieudats),
    (0, typeorm_1.JoinColumn)({ name: 'MADONG' }),
    __metadata("design:type", wineline_entity_1.Wineline)
], CtPhieudat.prototype, "wineline", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], CtPhieudat.prototype, "SOLUONG", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], CtPhieudat.prototype, "GIA", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ct_phieutra_entity_1.CtPhieutra, ct_phieudat => ct_phieudat.ct_phieudat),
    __metadata("design:type", Array)
], CtPhieudat.prototype, "ct_phieutras", void 0);
CtPhieudat = __decorate([
    (0, typeorm_1.Entity)('ct_phieudat')
], CtPhieudat);
exports.CtPhieudat = CtPhieudat;
//# sourceMappingURL=ct_phieudat.entity.js.map