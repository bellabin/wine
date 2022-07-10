import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProviderDto } from '../dto/create-provider.dto';
import { UpdateProviderDto } from '../dto/update-provider.dto';
import { ProviderService } from './provider.service';

@Controller('provider')
export class ProviderController {
    constructor(
        private providerService: ProviderService
    ) {}

    @Get() //get list provider
    findAll() {
        return this.providerService.findAll()
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.providerService.findById(id)
    }

    @Post() //create new provider
    create(@Body() payload: CreateProviderDto) {
        return this.providerService.create(payload)
    }

    @Put(':id') //update provider
    update(@Param('id') id: string, @Body() body: UpdateProviderDto) {
        return this.providerService.update(id, body)
    }

    @Delete(':id') //remove provider
    delete(@Param('id') id: string) {
        return this.providerService.delete(id)
    }
}
