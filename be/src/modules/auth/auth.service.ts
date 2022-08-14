import { JwtService } from "@nestjs/jwt";
import { Injectable, NotFoundException } from "@nestjs/common";
import { AuthLoginDto } from "./dto/auth-login.dto";
import { StaffService } from "../staffs/staff.service";
import { CustomerService } from "../customers/customer.service";
import { compareSync, hashSync } from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private staffService: StaffService,
    private customerService: CustomerService
  ) {}

  

  async login(authLoginDto: AuthLoginDto) {
    const { USERNAME, PASSWORD } = authLoginDto;

    const staffLogin = this.staffService.findByUsername(USERNAME);
    const customerLogin = this.customerService.findByUsername(USERNAME);

    const promises = [];
    promises.push(staffLogin);
    promises.push(customerLogin);

    const [staff, customer] = await Promise.all(promises);
    

    

    if (!staff && !customer) throw new NotFoundException("User not found");

    

    if (!staff) {
      if (!compareSync(PASSWORD, customer.PASSWORD)) throw new NotFoundException("Login failed");
      const response = {
        accessToken: this.jwtService.sign({
          userId: customer.MAKH,
          role: customer ? "customer" : "staff",
        }),
        role: customer ? "customer" : "staff",
      };

      return response;
    } else {
      if (!compareSync(PASSWORD, staff.PASSWORD )) throw new NotFoundException("Login failed");
      const response = {
        accessToken: this.jwtService.sign({
          userId: staff.MANV,
          role: staff ? "staff" : "customer",
        }),
        role: staff ? "staff" : "customer",
      };

      return response;
    }
  }
}
