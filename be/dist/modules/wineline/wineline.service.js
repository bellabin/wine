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
exports.WinelineService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const wineline_entity_1 = require("./entities/wineline.entity");
let WinelineService = class WinelineService {
    constructor(winelineRepo) {
        this.winelineRepo = winelineRepo;
    }
    findAll() {
        return this.winelineRepo.find();
    }
    findById(MADONG) {
        return this.winelineRepo
            .createQueryBuilder('wineline')
            .where('wineline.MADONG = :MADONG', { MADONG })
            .getOne();
    }
    async create(payload) {
        const wineline = this.winelineRepo.create(payload);
        await this.winelineRepo.save(wineline);
        return wineline;
    }
    async update(MADONG, body) {
        const wineline = await this.findById(MADONG);
        if (!wineline)
            throw new common_1.NotFoundException('Wineline is not exist');
        return this.winelineRepo.update(MADONG, body);
    }
    async delete(MADONG) {
        const wineline = await this.findById(MADONG);
        if (!wineline)
            throw new common_1.NotFoundException('Wineline is not exist');
        return this.winelineRepo.remove(wineline);
    }
};
WinelineService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wineline_entity_1.Wineline)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WinelineService);
exports.WinelineService = WinelineService;
//# sourceMappingURL=wineline.service.js.map