import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { hashSync } from "bcrypt";
import { Repository } from "typeorm";
import { StaffService } from "../staffs/staff.service";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { Customer } from "./entities/customer.entity";

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer) private customerRepo: Repository<Customer>,
    private staffService: StaffService
  ) {}

  findAll() {
    return this.customerRepo.find({
      relations: ["role", "phieudats"],
    });
  }

  findById(MAKH: string) {
    return this.customerRepo.findOne({
      where: { MAKH: MAKH },
      relations: ["role", "phieudats"],
    });
  }

  findByUsername(USERNAME: string) {
    return this.customerRepo
      .createQueryBuilder("customers")
      .where("customers.USERNAME = :USERNAME", { USERNAME })
      .getOne();
  }

  async create(payload: CreateCustomerDto) {
    try {
      const { USERNAME, PASSWORD } = payload;

      const staff = await this.staffService.findByUsername(USERNAME);

      if (staff) throw new ConflictException("Username is existing");

      const hashedPassword = hashSync(PASSWORD, 10);
      payload.PASSWORD = hashedPassword;

			const lastCus = await this.customerRepo
				.createQueryBuilder('customers')
				.orderBy('customers.MAKH', "DESC")
				.limit(1)
				.getOne();
			const lastId = Number(lastCus.MAKH) + 1;
			payload.MAKH = lastId.toLocaleString('en-US', {
				minimumIntegerDigits: 3,
				useGrouping: false
			});

      const customer = this.customerRepo.create(payload);

      await this.customerRepo.save(customer);

      return customer;
    } catch (error) {
			console.error(error);
      throw new ConflictException(error.response);
    }
  }

  async update(MAKH: string, body: UpdateCustomerDto) {
    const customer = await this.findById(MAKH);

    if (!customer) throw new NotFoundException("Cus is not exist");

    return this.customerRepo.update(MAKH, body);
  }

  async delete(MAKH: string) {
    const customer = await this.findById(MAKH);

    if (!customer) throw new NotFoundException("Customer is not exist");

    return this.customerRepo.remove(customer);
  }

  async updateCustomerDetail(id: string ,payload: UpdateCustomerDto){
    const { PASSWORD } = payload;
    
    let { HO } = payload;
    
      let arr = HO.split(" ")
      let i, kq='',temp
      for(i=0;i<arr.length;i++){
        temp = arr[i].trim()
        if(temp != ''){
            kq += temp + ' '
        }
      }
      kq.trim()

    return this.customerRepo.createQueryBuilder('customer')
		.update(Customer)
		.set({
			// MAKH: payload.MAKH,
      HO: kq.trim(),
      TEN: payload.TEN,
      GIOITINH: payload.GIOITINH,
      NGAYSINH: payload.NGAYSINH,
      DIACHI: payload.DIACHI,
      SDT: payload.SDT,
      EMAIL: payload.EMAIL,
      // PASSWORD: payload.PASSWORD,
		})
		.where("MAKH = :MAKH",{MAKH:id})
		.execute()
  }

  async updateCustomerPass(id: string ,payload: UpdateCustomerDto){
    const { PASSWORD } = payload;
    // console.log('pass day',payload.PASSWORD)

    
    const hashedPassword = hashSync(PASSWORD, 10);
    payload.PASSWORD = hashedPassword;


    return this.customerRepo.createQueryBuilder('customer')
    .update(Customer)
    .set({
      PASSWORD: payload.PASSWORD,
    })
    .where("MAKH = :MAKH",{MAKH:id})
    .execute()
  }

}


