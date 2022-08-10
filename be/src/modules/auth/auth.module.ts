import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { StaffModule } from '../staffs/staff.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { CustomerModule } from '../customers/customer.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/constants/constant';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '2592000s' },
    }),
    StaffModule, 
    PassportModule, 
    CustomerModule
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
