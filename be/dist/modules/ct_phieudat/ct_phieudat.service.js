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
exports.CtPhieudatService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ct_phieudat_entity_1 = require("./entities/ct_phieudat.entity");
let CtPhieudatService = class CtPhieudatService {
    async create(payload) {
        const ct_phieudat = this.ctphieudatRepo.create(payload);
        await this.ctphieudatRepo.save(ct_phieudat);
        return ct_phieudat;
    }
    findAll() {
        return this.ctphieudatRepo.find({
            relations: ['phieudat', 'wineline', 'ct_phieutras'],
        });
    }
    findOne(IDCTPD, MAPD, MADONG) {
        return this.ctphieudatRepo.findOne({
            where: { MADONG: MADONG, IDCTPD: IDCTPD, MAPD: MAPD },
            relations: ['phieudat', 'wineline', 'ct_phieutras'],
        });
    }
    async update(IDCTPD, MAPD, MADONG, body) {
        const ct_phieudat = await this.findOne(IDCTPD, MAPD, MADONG);
        if (!ct_phieudat)
            throw new common_1.NotFoundException('not found');
        return this.ctphieudatRepo
            .createQueryBuilder()
            .update(ct_phieudat_entity_1.CtPhieudat)
            .set({ SOLUONG: body.SOLUONG, GIA: body.GIA })
            .where('IDCTPD = :IDCTPD', { IDCTPD })
            .andWhere('MAPD = :MAPD', { MAPD })
            .andWhere('MADONG = :MADONG', { MADONG })
            .execute();
    }
    async remove(IDCTPD, MAPD, MADONG) {
        const ct_phieudat = await this.findOne(IDCTPD, MAPD, MADONG);
        return this.ctphieudatRepo.remove(ct_phieudat);
    }
    async getRevenueProduct(from, to) {
        return this.ctphieudatRepo.query(`
    SELECT sum(cp.SOLUONG) as so_luong_ban, cp.MADONG ,  d.TENDONG , d.HINHANH 
    FROM ct_phieudat cp
    INNER JOIN (
      SELECT * 
      FROM phieudat
      WHERE NGAYDAT >= '${from}' AND NGAYDAT <= '${to}'
    ) p ON cp.MAPD = p.MAPD
    INNER JOIN dongruou d on cp.MADONG = d.MADONG 
    GROUP BY cp.MADONG
    ORDER BY so_luong_ban DESC  
    `);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(ct_phieudat_entity_1.CtPhieudat),
    __metadata("design:type", typeorm_2.Repository)
], CtPhieudatService.prototype, "ctphieudatRepo", void 0);
CtPhieudatService = __decorate([
    (0, common_1.Injectable)()
], CtPhieudatService);
exports.CtPhieudatService = CtPhieudatService;
//# sourceMappingURL=ct_phieudat.service.js.map