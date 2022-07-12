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
exports.CtPhieunhapService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ct_phieunhap_entity_1 = require("./entities/ct_phieunhap.entity");
let CtPhieunhapService = class CtPhieunhapService {
    async create(payload) {
        const ct_phieunhap = this.ctphieunhapRepo.create(payload);
        await this.ctphieunhapRepo.save(ct_phieunhap);
        return ct_phieunhap;
    }
    findAll() {
        return this.ctphieunhapRepo.find();
    }
    findOne(MAPN, MADONG) {
        return this.ctphieunhapRepo.createQueryBuilder('ct_phieunhap')
            .innerJoinAndSelect('ct_phieunhap.phieunhap', 'phieunhap')
            .innerJoinAndSelect('ct_phieunhap.wineline', 'dongruou')
            .where('ct_phieunhap.MAPN = :MAPN', { MAPN })
            .andWhere('ct_phieunhap.MADONG = :MADONG', { MADONG })
            .getOne();
    }
    async update(MAPN, MADONG, body) {
        const ct_phieunhap = await this.findOne(MAPN, MADONG);
        if (!ct_phieunhap)
            throw new common_1.NotFoundException('not found');
        return this.ctphieunhapRepo
            .createQueryBuilder()
            .update(ct_phieunhap_entity_1.CtPhieunhap)
            .set({ SOLUONG: body.SOLUONG, GIA: body.GIA })
            .where('MAPN = :MAPN', { MAPN })
            .andWhere('MADONG = :MADONG', { MADONG })
            .execute();
    }
    async remove(MAPN, MADONG) {
        const ct_phieunhap = await this.findOne(MAPN, MADONG);
        return this.ctphieunhapRepo.remove(ct_phieunhap);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(ct_phieunhap_entity_1.CtPhieunhap),
    __metadata("design:type", typeorm_2.Repository)
], CtPhieunhapService.prototype, "ctphieunhapRepo", void 0);
CtPhieunhapService = __decorate([
    (0, common_1.Injectable)()
], CtPhieunhapService);
exports.CtPhieunhapService = CtPhieunhapService;
//# sourceMappingURL=ct_phieunhap.service.js.map