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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const role_entity_1 = require("./entities/role.entity");
let RoleService = class RoleService {
    async create(payload) {
        const role = this.roleRepo.create(payload);
        await this.roleRepo.save(role);
        return role;
    }
    findAll() {
        return this.roleRepo.find();
    }
    findOne(MANQ) {
        return this.roleRepo
            .createQueryBuilder('role')
            .where('role.MANQ = :MANQ', { MANQ })
            .getOne();
    }
    async update(MANQ, body) {
        const role = await this.findOne(MANQ);
        if (!role)
            throw new common_1.NotFoundException('role not found');
        return this.roleRepo.update(MANQ, body);
    }
    async remove(MANQ) {
        const role = await this.findOne(MANQ);
        if (!role)
            throw new common_1.NotFoundException('role not found');
        return this.roleRepo.remove(role);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(role_entity_1.Role),
    __metadata("design:type", typeorm_2.Repository)
], RoleService.prototype, "roleRepo", void 0);
RoleService = __decorate([
    (0, common_1.Injectable)()
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map