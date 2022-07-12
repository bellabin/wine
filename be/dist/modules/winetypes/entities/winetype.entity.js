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
exports.Winetype = void 0;
const wineline_entity_1 = require("../../wineline/entities/wineline.entity");
const typeorm_1 = require("typeorm");
let Winetype = class Winetype {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'char', primary: true }),
    __metadata("design:type", String)
], Winetype.prototype, "MALOAI", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => wineline_entity_1.Wineline, (wineline) => wineline.winetype),
    __metadata("design:type", Array)
], Winetype.prototype, "winelines", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Winetype.prototype, "TENLOAI", void 0);
Winetype = __decorate([
    (0, typeorm_1.Entity)('loairuou')
], Winetype);
exports.Winetype = Winetype;
//# sourceMappingURL=winetype.entity.js.map