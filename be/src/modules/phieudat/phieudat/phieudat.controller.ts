import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreatePhieudatDto } from '../dto/create-phieudat.dto';
import { UpdatePhieudatDto } from '../dto/update-phieudat.dto';
import { PhieudatService } from './phieudat.service';
import { v4 as uuidv4 } from 'uuid';
import { CtPhieudat } from 'src/modules/ct_phieudat/entities/ct_phieudat.entity';
import { GetTotalDto } from '../dto/get-total.dto';

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

    @Get('/state/:state')
    findByState(@Param('state') state: string) {
        return this.phieudatService.findByState(state)
    }

    @Post() //create new pd
    create(@Body() payload: CreatePhieudatDto) {
        const MAPD = uuidv4().slice(0, 19)
        payload.MAPD = MAPD
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

    @Post('total')
		getTotal(@Body() getTotalDto: GetTotalDto) {
			return this.phieudatService.getTotal(getTotalDto)
		}
}
