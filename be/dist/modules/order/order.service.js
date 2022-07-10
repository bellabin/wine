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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("./entities/order.entity");
let OrderService = class OrderService {
    async create(payload) {
        const order = this.ordRepo.create(payload);
        await this.ordRepo.save(order);
        return order;
    }
    findAll() {
        return this.ordRepo.find();
    }
    findOne(MADDH) {
        return this.ordRepo
            .createQueryBuilder('order')
            .where('order.MADDH = :MADDH', { MADDH })
            .getOne();
    }
    async update(MADDH, body) {
        const order = await this.findOne(MADDH);
        if (!order)
            throw new common_1.NotFoundException('order not found');
        return this.ordRepo.update(MADDH, body);
    }
    async remove(MADDH) {
        const order = await this.findOne(MADDH);
        if (!order)
            throw new common_1.NotFoundException('order not found');
        return this.ordRepo.remove(order);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(order_entity_1.Order),
    __metadata("design:type", typeorm_2.Repository)
], OrderService.prototype, "ordRepo", void 0);
OrderService = __decorate([
    (0, common_1.Injectable)()
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map