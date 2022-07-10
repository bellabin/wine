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
exports.StaffService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const staff_entity_1 = require("./entities/staff.entity");
let StaffService = class StaffService {
    constructor(staffRepo) {
        this.staffRepo = staffRepo;
    }
    findAll() {
        return this.staffRepo.find();
    }
    findById(MANV) {
        return this.staffRepo
            .createQueryBuilder('staffs')
            .where('staffs.MANV = :MANV', { MANV })
            .getOne();
    }
    async create(payload) {
        const staff = this.staffRepo.create(payload);
        await this.staffRepo.save(staff);
        return staff;
    }
    async update(MANV, body) {
        const staff = await this.findById(MANV);
        if (!staff)
            throw new common_1.NotFoundException('Staff is not exist');
        return this.staffRepo.update(MANV, body);
    }
    async delete(MANV) {
        const staff = await this.findById(MANV);
        if (!staff)
            throw new common_1.NotFoundException('Staff is not exist');
        return this.staffRepo.remove(staff);
    }
};
StaffService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(staff_entity_1.Staff)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StaffService);
exports.StaffService = StaffService;
//# sourceMappingURL=staff.service.js.map