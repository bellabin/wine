import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePhieudatDto } from '../dto/create-phieudat.dto';
import { UpdatePhieudatDto } from '../dto/update-phieudat.dto';
import { PhieudatService } from './phieudat.service';

@Controller('phieudat')
export class PhieudatController {
    constructor(
        private phieudatService: PhieudatService //import PD service
    ) {}

    @Get() //get list pd
    findAll() {
        return this.phieudatService.findAll()
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.phieudatService.findById(id)
    }

    @Post() //create new pd
    create(@Body() payload: CreatePhieudatDto) {
        return this.phieudatService.create(payload)
    }

    @Put(':id') //update pd
    update(@Param('id') id: string, @Body() body: UpdatePhieudatDto) {
        return this.phieudatService.update(id, body)
    }

    @Delete(':id') //remove pd
    delete(@Param('id') id: string) {
        return this.phieudatService.delete(id)
    }
}
