import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { CreateWinelineDto } from "./dto/create-wineline.dto"
import { UpdateWinelineDto } from "./dto/update-wineline.dto"
import { WinelineService } from "./wineline.service"

@Controller('winelines')
export class WinelineController {
    constructor(
        private winelineService: WinelineService //import staff service
    ) {}

    @Get() //get list winelines
    findAll() {
        return this.winelineService.findAll()
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.winelineService.findById(id)
    }

    @Post() //create new winelines
    create(@Body() payload: CreateWinelineDto) {
        return this.winelineService.create(payload)
    }

    @Put(':id') //update 
    update(@Param('id') id: string, @Body() body: UpdateWinelineDto) {
        return this.winelineService.update(id, body)
    }

    @Delete(':id') //remove 
    delete(@Param('id') id: string) {
        return this.winelineService.delete(id)
    }
}