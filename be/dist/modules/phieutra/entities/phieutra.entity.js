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
exports.Phieutra = void 0;
const typeorm_1 = require("typeorm");
let Phieutra = class Phieutra {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'char', primary: true }),
    __metadata("design:type", String)
], Phieutra.prototype, "MAPT", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Phieutra.prototype, "NGAYTRA", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char' }),
    __metadata("design:type", String)
], Phieutra.prototype, "MAHD", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char' }),
    __metadata("design:type", String)
], Phieutra.prototype, "MANV", void 0);
Phieutra = __decorate([
    (0, typeorm_1.Entity)('phieutra')
], Phieutra);
exports.Phieutra = Phieutra;
//# sourceMappingURL=phieutra.entity.js.map