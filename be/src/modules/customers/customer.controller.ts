import { Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { LoginCustomerDto } from "./dto/login-customer";
import { AuthService } from "../auth/auth.service";
import { AuthGuard } from '@nestjs/passport';


@Controller('customers')
export class CustomerController {
    constructor(
        private customerService: CustomerService,
        private authService: AuthService

    ) { }

    @Get()
    findAll() {
        return this.customerService.findAll()
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.customerService.findById(id)
    }


    // @Post('login')
    // async login(@Body() payload: LoginCustomerDto) {
    //     console.log('day la ben BE', payload);
    //     const customer = await this.customerService.findByUsername(payload.USERNAME)

    //     if (!customer) throw new NotFoundException()

    //     if (payload.PASSWORD != customer.PASSWORD) throw new HttpException('invalid credential', HttpStatus.UNAUTHORIZED)

    //     return customer

    // }

    // @UseGuards(AuthGuard('local'))
    // @Post('login')
    // async login(@Body() payload: LoginCustomerDto){
    //     console.log('BE',payload)
    //     return this.authService.loginCustomer(payload)
    // }

    @Post()
    create(@Body() payload: CreateCustomerDto) {
        return this.customerService.create(payload)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: UpdateCustomerDto) {
        return this.customerService.update(id, body)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.customerService.delete(id)
    }
}