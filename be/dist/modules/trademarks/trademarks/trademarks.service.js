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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrademarksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const trademarks_entity_1 = require("../entities/trademarks.entity");
let TrademarksService = class TrademarksService {
    constructor(trademarkRepo) {
        this.trademarkRepo = trademarkRepo;
    }
    findAll() {
        return this.trademarkRepo.find();
    }
    findById(MATH) {
        return this.trademarkRepo
            .createQueryBuilder('trademarks')
            .where('trademarks.MATH = :MATH', { MATH })
            .getOne();
    }
    async create(payload) {
        const trademark = this.trademarkRepo.create(payload);
        await this.trademarkRepo.save(trademark);
        return trademark;
    }
    async update(MATH, body) {
        const trademark = await this.findById(MATH);
        if (!trademark)
            throw new common_1.NotFoundException('Trademark is not exist');
        return this.trademarkRepo.update(MATH, body);
    }
    async delete(MATH) {
        const trademark = await this.findById(MATH);
        if (!trademark)
            throw new common_1.NotFoundException('Trademark is not exist');
        return this.trademarkRepo.remove(trademark);
    }
};
TrademarksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(trademarks_entity_1.Trademarks)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TrademarksService);
exports.TrademarksService = TrademarksService;
//# sourceMappingURL=trademarks.service.js.map