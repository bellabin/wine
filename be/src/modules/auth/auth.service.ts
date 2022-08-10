import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { StaffService } from "../staffs/staff.service";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private staffService: StaffService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const staff = await this.staffService.findByUsername(username);
    if (staff && staff.PASSWORD === pass) {
      const { PASSWORD, ...result } = staff;

      return result;
    }
    return null;
  }

  async loginCustomer(user: any) {
    const payload = { username: user.USERNAME, sub: user.MAKH };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async loginStaff(user: any) {
    const payload = { username: user.USERNAME, sub: user.MANV };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
