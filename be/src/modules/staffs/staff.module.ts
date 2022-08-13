import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { Staff } from './entities/staff.entity';
import { StaffController } from './staff.controller';
import { StaffService } from './staff.service';
import { forwardRef } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Staff]),
  forwardRef(() => AuthModule)], //import entity
  controllers: [StaffController], //import controller
  providers: [StaffService], //import service
  exports:[StaffService]
})
export class StaffModule {}
