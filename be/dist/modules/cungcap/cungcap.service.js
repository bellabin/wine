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
exports.CungcapService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const promise_1 = require("mysql2/promise");
const typeorm_2 = require("typeorm");
const cungcap_entity_1 = require("./entities/cungcap.entity");
let CungcapService = class CungcapService {
    async create(payload) {
        const { MANCC, MADONG, GIA } = payload;
        const query = `INSERT INTO CUNGCAP VALUES(${MANCC}, ${MADONG}, ${GIA})`;
        const connection = (0, promise_1.createPool)({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'billybua7',
            database: 'banruou',
        });
        return connection.query(query);
    }
    findAll() {
        return this.cungcapRepo.find();
    }
    findOne(MANCC, MADONG) {
        return this.cungcapRepo.createQueryBuilder('cungcap')
            .leftJoinAndSelect('cungcap.MANCC', 'provider')
            .leftJoinAndSelect('cungcap.MADONG', 'wineline')
            .where('cungcap.MANCC = :MANCC', { MANCC })
            .andWhere('cungcap.MADONG = :MADONG', { MADONG })
            .getOne();
    }
    async update(MANCC, MADONG, body) {
        const cungcap = await this.findOne(MANCC, MADONG);
        if (!cungcap)
            throw new common_1.NotFoundException('not found');
        return this.cungcapRepo.createQueryBuilder().update(cungcap_entity_1.Cungcap).set({ GIA: body.GIA })
            .where('cungcap.MANCC = :MANCC', { MANCC })
            .andWhere('cungcap.MADONG = :MADONG', { MADONG })
            .execute();
    }
    remove(id) {
        return `This action removes a #${id} cungcap`;
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(cungcap_entity_1.Cungcap),
    __metadata("design:type", typeorm_2.Repository)
], CungcapService.prototype, "cungcapRepo", void 0);
CungcapService = __decorate([
    (0, common_1.Injectable)()
], CungcapService);
exports.CungcapService = CungcapService;
//# sourceMappingURL=cungcap.service.js.map