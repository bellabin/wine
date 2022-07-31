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
exports.Review = void 0;
const customer_entity_1 = require("../../customers/entities/customer.entity");
const wineline_entity_1 = require("../../wineline/entities/wineline.entity");
const typeorm_1 = require("typeorm");
let Review = class Review {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'int', primary: true }),
    __metadata("design:type", String)
], Review.prototype, "MAKH", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, customer => customer.reviews),
    (0, typeorm_1.JoinColumn)({ name: 'MAKH' }),
    __metadata("design:type", customer_entity_1.Customer)
], Review.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Review.prototype, "NOIDUNG", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Review.prototype, "RATING", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', primary: true }),
    __metadata("design:type", Date)
], Review.prototype, "NGAYDANHGIA", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', primary: true }),
    __metadata("design:type", String)
], Review.prototype, "MADONG", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => wineline_entity_1.Wineline, wineline => wineline.reviews),
    (0, typeorm_1.JoinColumn)({ name: 'MADONG' }),
    __metadata("design:type", wineline_entity_1.Wineline)
], Review.prototype, "wineline", void 0);
Review = __decorate([
    (0, typeorm_1.Entity)('danhgia')
], Review);
exports.Review = Review;
//# sourceMappingURL=review.entity.js.map