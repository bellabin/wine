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
exports.Cungcap = void 0;
const provider_entity_1 = require("../../provider/entities/provider.entity");
const wineline_entity_1 = require("../../wineline/entities/wineline.entity");
const typeorm_1 = require("typeorm");
let Cungcap = class Cungcap {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'char', primary: true }),
    __metadata("design:type", String)
], Cungcap.prototype, "MANCC", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => provider_entity_1.Provider, provider => provider.cungcaps),
    (0, typeorm_1.JoinColumn)({ name: 'MANCC' }),
    __metadata("design:type", provider_entity_1.Provider)
], Cungcap.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', primary: true }),
    __metadata("design:type", String)
], Cungcap.prototype, "MADONG", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => wineline_entity_1.Wineline, wineline => wineline.cungcaps),
    (0, typeorm_1.JoinColumn)({ name: 'MADONG' }),
    __metadata("design:type", wineline_entity_1.Wineline)
], Cungcap.prototype, "wineline", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], Cungcap.prototype, "GIA", void 0);
Cungcap = __decorate([
    (0, typeorm_1.Entity)('cungcap'),
    (0, typeorm_1.Unique)(['MADONG'])
], Cungcap);
exports.Cungcap = Cungcap;
//# sourceMappingURL=cungcap.entity.js.map