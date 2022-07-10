import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateWinetypeDto } from '../dto/create-winetype.dto';
import { UpdateWinetypeDto } from '../dto/update-winetype.dto';
import { WinetypeService } from './winetype.service';

@Controller('winetype')
export class WinetypeController {
    constructor(
        private winetypeService: WinetypeService //import winetype service
    ) {}

    @Get() //get list winetype
    findAll() {
        return this.winetypeService.findAll()
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.winetypeService.findById(id)
    }

    @Post() //create new winetype
    create(@Body() payload: CreateWinetypeDto) {
        return this.winetypeService.create(payload)
    }

    @Put(':id') //update winetype
    update(@Param('id') id: string, @Body() body: UpdateWinetypeDto) {
        return this.winetypeService.update(id, body)
    }

    @Delete(':id') //remove winetype
    delete(@Param('id') id: string) {
        return this.winetypeService.delete(id)
    }
}
