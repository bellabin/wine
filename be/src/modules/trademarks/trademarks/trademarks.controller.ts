import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTrademarksDto } from '../dto/create-trademarks.dto';
import { UpdateTrademarksDto } from '../dto/update-trademarks.dto';
import { TrademarksService } from './trademarks.service';

@Controller('trademarks')
export class TrademarksController {
    constructor(
        private trademarkService: TrademarksService //import trademark service
    ) {}

    @Get() //get list trademarks
    findAll() {
        return this.trademarkService.findAll()
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.trademarkService.findById(id)
    }

    @Post() //create new trademark
    create(@Body() payload: CreateTrademarksDto) {
        return this.trademarkService.create(payload)
    }

    @Put(':id') //update trademark
    update(@Param('id') id: string, @Body() body: UpdateTrademarksDto) {
        return this.trademarkService.update(id, body)
    }

    @Delete(':id') //remove trademark
    delete(@Param('id') id: string) {
        return this.trademarkService.delete(id)
    }
}
