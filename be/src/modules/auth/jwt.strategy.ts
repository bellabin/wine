import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { jwtConstants } from 'src/constants/constant';
import { StaffService } from '../staffs/staff.service';
import { CustomerService } from '../customers/customer.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private staffService: StaffService,
    private customerService: CustomerService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    const { userId } = payload

    if (!userId) throw new ForbiddenException()

    const staffLogin = this.staffService.findById(userId)
    const customerLogin = this.customerService.findByUsername(userId)

    const promises = []
    promises.push(staffLogin)
    promises.push(customerLogin)

    const [ staff, customer ] = await Promise.all(promises)

    if (!staff && !customer) throw new ForbiddenException()

    const { role } = payload
    const username = staff.USERNAME || customer.USERNAME
      
    return { userId, role, username };
  }
}