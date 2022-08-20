import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Request, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { StaffService } from './staff.service';
import { AuthGuard } from '@nestjs/passport';
import { LoginStaffDto } from './dto/login-staff.dto';
import { NotFoundError } from 'rxjs';
import { Role } from '../role/entities/role.entity';
import { Roles } from 'src/decorators/role.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('staffs')
export class StaffController {
    constructor(
        private staffService: StaffService, //import staff service
    ) {}

    @Get() //get list staffs
    @ApiBearerAuth()
    findAll() {
        //console.log('sdad')
        return this.staffService.findAll()
    }

    @Get('/nvgh')
    GetNVGH(){
        return this.staffService.getNVGH()
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.staffService.findById(id)
    }

    
//    @Post('login')
//    async login(@Body() payload: LoginStaffDto){
//         console.log('day la ben BE', payload);
//         const staff = await this.staffService.findByUsername(payload.USERNAME)

//         if(!staff) throw new NotFoundException()

//         var CryptoJS = require("crypto-js/SHA256");
//         const pass = CryptoJS(payload.PASSWORD);
//         console.log('day la password ma hoa: ', pass.toString());
//         if(pass.toString() != staff.PASSWORD) throw new HttpException ('invalid credential', HttpStatus.UNAUTHORIZED)

//         return staff

//    }


    @Post('login')
    @UseGuards(AuthGuard('local'))
    async login(@Body() payload: LoginStaffDto){
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
