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
exports.BillService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bill_entity_1 = require("../entities/bill.entity");
let BillService = class BillService {
    constructor(billRepo) {
        this.billRepo = billRepo;
    }
    findAll() {
        return this.billRepo.find();
    }
    findById(MAHD) {
        return this.billRepo
            .createQueryBuilder('bills')
            .where('bills.MAHD = :MAHD', { MAHD })
            .getOne();
    }
    async create(payload) {
        const bill = this.billRepo.create(payload);
        await this.billRepo.save(bill);
        return bill;
    }
    async update(MAHD, body) {
        const bill = await this.findById(MAHD);
        if (!bill)
            throw new common_1.NotFoundException('bill is not exist');
        return this.billRepo.update(MAHD, body);
    }
    async delete(MAHD) {
        const bill = await this.findById(MAHD);
        if (!bill)
            throw new common_1.NotFoundException('bill is not exist');
        return this.billRepo.remove(bill);
    }
};
BillService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bill_entity_1.Bill)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BillService);
exports.BillService = BillService;
//# sourceMappingURL=bill.service.js.map