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
exports.Changeprice = void 0;
const typeorm_1 = require("typeorm");
let Changeprice = class Changeprice {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'char', primary: true }),
    __metadata("design:type", String)
], Changeprice.prototype, "MADONG", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', primary: true }),
    __metadata("design:type", Date)
], Changeprice.prototype, "NGAYTHAYDOI", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', primary: true }),
    __metadata("design:type", String)
], Changeprice.prototype, "MANV", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], Changeprice.prototype, "BIENDONGGIA", void 0);
Changeprice = __decorate([
    (0, typeorm_1.Entity)('thaydoigia')
], Changeprice);
exports.Changeprice = Changeprice;
//# sourceMappingURL=changeprice.entity.js.map