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
exports.CtOrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ct_order_entity_1 = require("./entities/ct_order.entity");
let CtOrderService = class CtOrderService {
    async create(payload) {
        const ct_order = this.ctorderRepo.create(payload);
        await this.ctorderRepo.save(ct_order);
        return ct_order;
    }
    findAll() {
        return this.ctorderRepo.find({
            relations: ['wineline', 'order'],
        });
    }
    findOne(MADONG, MADDH) {
        return this.ctorderRepo.findOne({
            where: { MADONG: MADONG, MADDH: MADDH },
            relations: ['wineline', 'order'],
        });
    }
    async update(MADONG, MADDH, body) {
        const ct_order = await this.findOne(MADONG, MADDH);
        if (!ct_order)
            throw new common_1.NotFoundException('not found');
        return this.ctorderRepo
            .createQueryBuilder()
            .update(ct_order_entity_1.CtOrder)
            .set({ SOLUONG: body.SOLUONG, GIA: body.GIA })
            .where('MADONG = :MADONG', { MADONG })
            .andWhere('MADDH = :MADDH', { MADDH })
            .execute();
    }
    async remove(MADONG, MADDH) {
        const ct_order = await this.findOne(MADONG, MADDH);
        return this.ctorderRepo.remove(ct_order);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(ct_order_entity_1.CtOrder),
    __metadata("design:type", typeorm_2.Repository)
], CtOrderService.prototype, "ctorderRepo", void 0);
CtOrderService = __decorate([
    (0, common_1.Injectable)()
], CtOrderService);
exports.CtOrderService = CtOrderService;
//# sourceMappingURL=ct_order.service.js.map