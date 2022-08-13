import { Injectable } from "@nestjs/common";
import { forwardRef, Inject } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CustomerService } from "../customers/customer.service";
import { StaffService } from "../staffs/staff.service";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @Inject(forwardRef(() => StaffService)) private readonly staffService: StaffService,
    @Inject(forwardRef(() => CustomerService)) private customerService: CustomerService,
  ) {}

  async validateStaff(username: string, pass: string): Promise<any> {
    const staff = await this.staffService.findByUsername(username);
    if (staff && staff.PASSWORD === pass) {
      const { PASSWORD, ...result } = staff;
      return result;
    }
    return null;
  }

  // async validateCustomer(username: string, pass: string): Promise<any> {
  //   const user = await this.customerService.findByUsername(username);
  //   if (user && user.PASSWORD === pass) {
  //     const { PASSWORD, ...result } = user;
  //     return result;
  //   }
  //   return null;
  // }



  // async loginCustomer(user: any) {
  //   const payload = { username: user.USERNAME, sub: user.MAKH };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }

  async loginStaff(user: any) {
    const payload = { username: user.USERNAME, sub: user.MANV };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
