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
exports.CtPhieutraService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ct_phieutra_entity_1 = require("./entities/ct_phieutra.entity");
let CtPhieutraService = class CtPhieutraService {
    async create(payload) {
        const ct_phieutra = this.ctphieutraRepo.create(payload);
        await this.ctphieutraRepo.save(ct_phieutra);
        return ct_phieutra;
    }
    findAll() {
        return this.ctphieutraRepo.find();
    }
    findOne(MAPT, IDCTPD) {
        return this.ctphieutraRepo.createQueryBuilder('ct_phieutra')
            .innerJoinAndSelect('ct_phieutra.phieutra', 'phieutra')
            .where('ct_phieutra.MAPT = :MAPT', { MAPT })
            .andWhere('ct_phieutra.IDCTPD = :IDCTPD', { IDCTPD })
            .getOne();
    }
    async update(MAPT, IDCTPD, body) {
        const ct_phieutra = await this.findOne(MAPT, IDCTPD);
        if (!ct_phieutra)
            throw new common_1.NotFoundException('not found');
        return this.ctphieutraRepo
            .createQueryBuilder()
            .update(ct_phieutra_entity_1.CtPhieutra)
            .set({ SOLUONG: body.SOLUONG })
            .where('MAPT = :MAPT', { MAPT })
            .andWhere('IDCTPD = :IDCTPD', { IDCTPD })
            .execute();
    }
    async remove(MAPT, IDCTPD) {
        const ct_phieutra = await this.findOne(MAPT, IDCTPD);
        return this.ctphieutraRepo.remove(ct_phieutra);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(ct_phieutra_entity_1.CtPhieutra),
    __metadata("design:type", typeorm_2.Repository)
], CtPhieutraService.prototype, "ctphieutraRepo", void 0);
CtPhieutraService = __decorate([
    (0, common_1.Injectable)()
], CtPhieutraService);
exports.CtPhieutraService = CtPhieutraService;
//# sourceMappingURL=ct_phieutra.service.js.map