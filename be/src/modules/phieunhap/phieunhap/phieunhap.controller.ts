import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePhieunhapDto } from '../dto/create-phieunhap.dto';
import { UpdatePhieunhapDto } from '../dto/update-phieunhap.dto';
import { PhieunhapService } from './phieunhap.service';

@Controller('phieunhap')
export class PhieunhapController {
    constructor(
        private pnService: PhieunhapService //import pn service
    ) {}

    @Get() //get list pn
    findAll() {
        return this.pnService.findAll()
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.pnService.findById(id)
    }

    @Post() //create new pn
    create(@Body() payload: CreatePhieunhapDto) {
        return this.pnService.create(payload)
    }

    @Put(':id') //update pn
    update(@Param('id') id: string, @Body() body: UpdatePhieunhapDto) {
        return this.pnService.update(id, body)
    }

    @Delete(':id') //remove pn
    delete(@Param('id') id: string) {
        return this.pnService.delete(id)
    }
}
