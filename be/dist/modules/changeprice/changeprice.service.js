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
exports.ChangepriceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const changeprice_entity_1 = require("./entities/changeprice.entity");
let ChangepriceService = class ChangepriceService {
    async create(payload) {
        const changeprice = this.changepriceRepo.create(payload);
        await this.changepriceRepo.save(changeprice);
        return changeprice;
    }
    findAll() {
        return this.changepriceRepo.find();
    }
    findOne(MADONG, NGAYTHAYDOI, MANV) {
        return this.changepriceRepo.createQueryBuilder('changeprice')
            .innerJoinAndSelect('changeprice.wineline', 'dongruou')
            .innerJoinAndSelect('changeprice.staff', 'nhanvien')
            .where('changeprice.MADONG = :MADONG', { MADONG })
            .andWhere('ct_phieudat.NGAYTHAYDOI = :NGAYTHAYDOI', { NGAYTHAYDOI })
            .andWhere('ct_phieudat.MANV = :MANV', { MANV })
            .getOne();
    }
    async update(MADONG, NGAYTHAYDOI, MANV, body) {
        const changeprice = await this.findOne(MADONG, NGAYTHAYDOI, MANV);
        if (!changeprice)
            throw new common_1.NotFoundException('not found');
        return this.changepriceRepo
            .createQueryBuilder()
            .update(changeprice_entity_1.Changeprice)
            .set({ BIENDONGGIA: body.BIENDONGGIA })
            .where('MADONG = :MADONG', { MADONG })
            .andWhere('NGAYTHAYDOI = :NGAYTHAYDOI', { NGAYTHAYDOI })
            .andWhere('MANV = :MANV', { MANV })
            .execute();
    }
    async remove(MADONG, NGAYTHAYDOI, MANV) {
        const changeprice = await this.findOne(MADONG, NGAYTHAYDOI, MANV);
        return this.changepriceRepo.remove(changeprice);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(changeprice_entity_1.Changeprice),
    __metadata("design:type", typeorm_2.Repository)
], ChangepriceService.prototype, "changepriceRepo", void 0);
ChangepriceService = __decorate([
    (0, common_1.Injectable)()
], ChangepriceService);
exports.ChangepriceService = ChangepriceService;
//# sourceMappingURL=changeprice.service.js.map