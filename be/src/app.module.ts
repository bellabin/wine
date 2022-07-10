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
    BillModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
