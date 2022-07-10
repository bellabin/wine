import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePhieutraDto } from '../dto/create-phieutra.dto';
import { UpdatePhieutraDto } from '../dto/update-phieutra.dto';
import { PhieutraService } from './phieutra.service';

@Controller('phieutra')
export class PhieutraController {
    constructor(
        private phieutraService: PhieutraService //import pt service
    ) {}

    @Get() //get list phieutra
    findAll() {
        return this.phieutraService.findAll()
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.phieutraService.findById(id)
    }

    @Post() //create new phieutra
    create(@Body() payload: CreatePhieutraDto) {
        return this.phieutraService.create(payload)
    }

    @Put(':id') //update Phieutra
    update(@Param('id') id: string, @Body() body: UpdatePhieutraDto) {
        return this.phieutraService.update(id, body)
    }

    @Delete(':id') //remove phieutra
    delete(@Param('id') id: string) {
        return this.phieutraService.delete(id)
    }
}
