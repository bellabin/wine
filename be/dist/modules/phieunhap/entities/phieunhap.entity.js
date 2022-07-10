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
exports.Phieunhap = void 0;
const typeorm_1 = require("typeorm");
let Phieunhap = class Phieunhap {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'char', primary: true }),
    __metadata("design:type", String)
], Phieunhap.prototype, "MAPN", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Phieunhap.prototype, "NGAYLAP", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char' }),
    __metadata("design:type", String)
], Phieunhap.prototype, "MANV", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char' }),
    __metadata("design:type", String)
], Phieunhap.prototype, "MADDH", void 0);
Phieunhap = __decorate([
    (0, typeorm_1.Entity)('phieunhap')
], Phieunhap);
exports.Phieunhap = Phieunhap;
//# sourceMappingURL=phieunhap.entity.js.map