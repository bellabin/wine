import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";

@Controller('customers')
export class CustomerController {
    constructor(
        private customerService: CustomerService
    ) {}

    @Get()
    findAll() {
        return this.customerService.findAll()
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.customerService.findById(id)
    }

    @Post()
    create (@Body() payload: CreateCustomerDto) {
        return this.customerService.create(payload)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body:UpdateCustomerDto) {
        return this.customerService.update(id, body)
    }

    @Delete(':id')
    delete (@Param ('id') id: string ) {
        return this.customerService.delete(id)
    }
}