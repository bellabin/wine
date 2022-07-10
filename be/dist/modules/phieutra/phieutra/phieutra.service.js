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
exports.PhieutraService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const phieutra_entity_1 = require("../entities/phieutra.entity");
let PhieutraService = class PhieutraService {
    constructor(phieutraRepo) {
        this.phieutraRepo = phieutraRepo;
    }
    findAll() {
        return this.phieutraRepo.find();
    }
    findById(MAPT) {
        return this.phieutraRepo
            .createQueryBuilder('phieutra')
            .where('phieutra.MAPT = :MAPT', { MAPT })
            .getOne();
    }
    async create(payload) {
        const phieutra = this.phieutraRepo.create(payload);
        await this.phieutraRepo.save(phieutra);
        return phieutra;
    }
    async update(MAPT, body) {
        const phieutra = await this.findById(MAPT);
        if (!phieutra)
            throw new common_1.NotFoundException('phieutra is not exist');
        return this.phieutraRepo.update(MAPT, body);
    }
    async delete(MAPT) {
        const phieutra = await this.findById(MAPT);
        if (!phieutra)
            throw new common_1.NotFoundException('phieutra is not exist');
        return this.phieutraRepo.remove(phieutra);
    }
};
PhieutraService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(phieutra_entity_1.Phieutra)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PhieutraService);
exports.PhieutraService = PhieutraService;
//# sourceMappingURL=phieutra.service.js.map