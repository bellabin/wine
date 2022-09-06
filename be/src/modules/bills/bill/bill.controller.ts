import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateBillDto } from '../dto/create-bill.dto';
import { UpdateBillDto } from '../dto/update-bill.dto';
import { BillService } from './bill.service';
import { v4 as uuidv4 } from 'uuid'


@Controller('bill')
export class BillController {
    constructor(
        private billService: BillService //import bill service
    ) {}

    @Get() 
    findAll() {
        return this.billService.findAll()
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.billService.findById(id)
    }

    @Get('/phieudat/:MAPD')
    findByMAPD(@Param('MAPD') MAPD: string){
        console.log(MAPD)
        return this.billService.findByMAPD(MAPD)
    }

    @Post() //create new bill
    create(@Body() payload: CreateBillDto) {
        const MAHD = uuidv4().slice(0, 19)
        payload.MAHD = MAHD
        console.log(payload)
        return this.billService.create(payload)
    }

    @Put(':id') //update bill
    update(@Param('id') id: string, @Body() body: UpdateBillDto) {
        return this.billService.update(id, body)
    }

    @Delete(':id') //remove bill
    delete(@Param('id') id: string) {
        return this.billService.delete(id)
    }
}
