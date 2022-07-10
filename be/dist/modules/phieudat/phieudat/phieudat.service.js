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
exports.PhieudatService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const phieudat_entity_1 = require("../entities/phieudat.entity");
let PhieudatService = class PhieudatService {
    constructor(phieudatRepo) {
        this.phieudatRepo = phieudatRepo;
    }
    findAll() {
        return this.phieudatRepo.find();
    }
    findById(MAPD) {
        return this.phieudatRepo
            .createQueryBuilder('phieudat')
            .where('phieudat.MAPD = :MAPD', { MAPD })
            .getOne();
    }
    async create(payload) {
        const phieudat = this.phieudatRepo.create(payload);
        await this.phieudatRepo.save(phieudat);
        return phieudat;
    }
    async update(MAPD, body) {
        const phieudat = await this.findById(MAPD);
        if (!phieudat)
            throw new common_1.NotFoundException('PD is not exist');
        return this.phieudatRepo.update(MAPD, body);
    }
    async delete(MAPD) {
        const phieudat = await this.findById(MAPD);
        if (!phieudat)
            throw new common_1.NotFoundException('PD is not exist');
        return this.phieudatRepo.remove(phieudat);
    }
};
PhieudatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(phieudat_entity_1.Phieudat)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PhieudatService);
exports.PhieudatService = PhieudatService;
//# sourceMappingURL=phieudat.service.js.map