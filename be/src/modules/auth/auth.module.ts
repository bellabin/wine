import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { StaffModule } from '../staffs/staff.module';
import { CustomerModule } from '../customers/customer.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/constants/constant';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '2592000s' },
    }),
    StaffModule,
    CustomerModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
