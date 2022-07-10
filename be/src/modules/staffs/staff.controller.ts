import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { StaffService } from './staff.service';

@Controller('staffs')
export class StaffController {
    constructor(
        private staffService: StaffService //import staff service
    ) {}

    @Get() //get list staffs
    findAll() {
        return this.staffService.findAll()
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.staffService.findById(id)
    }

    @Post() //create new staff
    create(@Body() payload: CreateStaffDto) {
        return this.staffService.create(payload)
    }

    @Put(':id') //update staff
    update(@Param('id') id: string, @Body() body: UpdateStaffDto) {
        return this.staffService.update(id, body)
    }

    @Delete(':id') //remove staff
    delete(@Param('id') id: string) {
        return this.staffService.delete(id)
    }
}
