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
    PromotionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
