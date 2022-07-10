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
exports.PhieunhapService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const phieunhap_entity_1 = require("../entities/phieunhap.entity");
let PhieunhapService = class PhieunhapService {
    constructor(phieunhapRepo) {
        this.phieunhapRepo = phieunhapRepo;
    }
    findAll() {
        return this.phieunhapRepo.find();
    }
    findById(MAPN) {
        return this.phieunhapRepo
            .createQueryBuilder('phieunhap')
            .where('phieunhap.MAPN = :MAPN', { MAPN })
            .getOne();
    }
    async create(payload) {
        const phieunhap = this.phieunhapRepo.create(payload);
        await this.phieunhapRepo.save(phieunhap);
        return phieunhap;
    }
    async update(MAPN, body) {
        const phieunhap = await this.findById(MAPN);
        if (!phieunhap)
            throw new common_1.NotFoundException('phieunhap is not exist');
        return this.phieunhapRepo.update(MAPN, body);
    }
    async delete(MAPN) {
        const phieunhap = await this.findById(MAPN);
        if (!phieunhap)
            throw new common_1.NotFoundException('phieunhap is not exist');
        return this.phieunhapRepo.remove(phieunhap);
    }
};
PhieunhapService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(phieunhap_entity_1.Phieunhap)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PhieunhapService);
exports.PhieunhapService = PhieunhapService;
//# sourceMappingURL=phieunhap.service.js.map