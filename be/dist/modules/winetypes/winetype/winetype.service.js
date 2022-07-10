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
exports.WinetypeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const winetype_entity_1 = require("../entities/winetype.entity");
let WinetypeService = class WinetypeService {
    constructor(winetypeRepo) {
        this.winetypeRepo = winetypeRepo;
    }
    findAll() {
        return this.winetypeRepo.find();
    }
    findById(MALOAI) {
        return this.winetypeRepo
            .createQueryBuilder('winetypes')
            .where('winetypes.MALOAI = :MALOAI', { MALOAI })
            .getOne();
    }
    async create(payload) {
        const winetype = this.winetypeRepo.create(payload);
        await this.winetypeRepo.save(winetype);
        return winetype;
    }
    async update(MALOAI, body) {
        const winetype = await this.findById(MALOAI);
        if (!winetype)
            throw new common_1.NotFoundException('winetype is not exist');
        return this.winetypeRepo.update(MALOAI, body);
    }
    async delete(MALOAI) {
        const winetype = await this.findById(MALOAI);
        if (!winetype)
            throw new common_1.NotFoundException('winetype is not exist');
        return this.winetypeRepo.remove(winetype);
    }
};
WinetypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(winetype_entity_1.Winetype)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WinetypeService);
exports.WinetypeService = WinetypeService;
//# sourceMappingURL=winetype.service.js.map