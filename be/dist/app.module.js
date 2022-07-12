"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const staff_module_1 = require("./modules/staffs/staff.module");
const customer_module_1 = require("./modules/customers/customer.module");
const wineline_module_1 = require("./modules/wineline/wineline.module");
const provider_module_1 = require("./modules/provider/provider/provider.module");
const trademarks_module_1 = require("./modules/trademarks/trademarks/trademarks.module");
const winetype_module_1 = require("./modules/winetypes/winetype/winetype.module");
const phieudat_module_1 = require("./modules/phieudat/phieudat/phieudat.module");
const bill_module_1 = require("./modules/bills/bill/bill.module");
const review_module_1 = require("./modules/review/review/review.module");
const phieunhap_module_1 = require("./modules/phieunhap/phieunhap/phieunhap.module");
const phieutra_module_1 = require("./modules/phieutra/phieutra/phieutra.module");
const role_module_1 = require("./modules/role/role.module");
const order_module_1 = require("./modules/order/order.module");
const promotion_module_1 = require("./modules/promotion/promotion.module");
const cungcap_module_1 = require("./modules/cungcap/cungcap.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'billybua7',
                database: 'banruou',
                entities: ["dist/**/*.entity.js"],
            }),
            staff_module_1.StaffModule,
            customer_module_1.CustomerModule,
            wineline_module_1.WinelineModule,
            provider_module_1.ProviderModule,
            trademarks_module_1.TrademarksModule,
            winetype_module_1.WinetypeModule,
            phieudat_module_1.PhieudatModule,
            bill_module_1.BillModule,
            review_module_1.ReviewModule,
            phieunhap_module_1.PhieunhapModule,
            phieutra_module_1.PhieutraModule,
            role_module_1.RoleModule,
            order_module_1.OrderModule,
            promotion_module_1.PromotionModule,
            cungcap_module_1.CungcapModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map