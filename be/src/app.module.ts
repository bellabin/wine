import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffModule } from './modules/staffs/staff.module';
import { CustomerModule } from './modules/customers/customer.module';
import { WinelineModule } from './modules/wineline/wineline.module';
import { ProviderModule } from './modules/provider/provider/provider.module';
import { TrademarksModule } from './modules/trademarks/trademarks/trademarks.module';
import { WinetypeModule } from './modules/winetypes/winetype/winetype.module';
import { PhieudatModule } from './modules/phieudat/phieudat/phieudat.module';
import { BillModule } from './modules/bills/bill/bill.module';
import { ReviewModule } from './modules/review/review/review.module';
import { PhieunhapModule } from './modules/phieunhap/phieunhap/phieunhap.module';
import { PhieutraModule } from './modules/phieutra/phieutra/phieutra.module';
import { RoleModule } from './modules/role/role.module';
import { OrderModule } from './modules/order/order.module';
import { PromotionModule } from './modules/promotion/promotion.module';
import { CungcapModule } from './modules/cungcap/cungcap.module';
import { CtPhieudatModule } from './modules/ct_phieudat/ct_phieudat.module';
import { CtPhieunhapModule } from './modules/ct_phieunhap/ct_phieunhap.module';
import { CtPhieutraModule } from './modules/ct_phieutra/ct_phieutra.module';
import { ChangepriceModule } from './modules/changeprice/changeprice.module';
import { CtPromotion } from './modules/ct_promotion/entities/ct_promotion.entity';
import { CtOrder } from './modules/ct_order/entities/ct_order.entity';
import { CtOrderModule } from './modules/ct_order/ct_order.module';
import { CtPromotionModule } from './modules/ct_promotion/ct_promotion.module';
// import { UsersModule } from './users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './modules/auth/guards/roles.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'billybua7',
      database: 'banruou',
      entities: ["dist/**/*.entity.js"],
    }),
    StaffModule, //import staff module to app module
    CustomerModule,
    WinelineModule,
    ProviderModule,
    TrademarksModule,
    WinetypeModule,
    PhieudatModule,
    BillModule,
    ReviewModule,
    PhieunhapModule,
    PhieutraModule,
    RoleModule,
    OrderModule,
    PromotionModule,
    CungcapModule,
    CtPhieudatModule,
    CtPhieunhapModule,
    CtPhieutraModule,
    ChangepriceModule,
    CtPromotionModule,
    CtOrderModule,
    AuthModule,
    // UsersModule

  ],
  controllers: [AppController],
  providers: [AppService,
    {
			provide: APP_GUARD,
			useClass: RolesGuard,
		},
  ],
})
export class AppModule {}
