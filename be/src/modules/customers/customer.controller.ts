import { Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { LoginCustomerDto } from "./dto/login-customer";
import { AuthGuard } from '@nestjs/passport';
import { Roles } from "src/decorators/role.decorator";


@Controller('customers')
export class CustomerController {
    constructor(
        private customerService: CustomerService,

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

    @Put('/detail/:id')
    updateCustomerDetail(@Param('id') id: string ,@Body() body:UpdateCustomerDto){
        return this.customerService.updateCustomerDetail(id,body)
    }

    @Put('/pass/detail/pleaseeeeeee/:MAKH')
    updateCustomerPassword(@Param('MAKH') MAKH: string ,@Body() body:UpdateCustomerDto){
        return this.customerService.updateCustomerPass(MAKH,body)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.customerService.delete(id)
    }
}