import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { CreateWinelineDto } from "./dto/create-wineline.dto"
import { UpdateWinelineDto } from "./dto/update-wineline.dto"
import { WinelineService } from "./wineline.service"

@Controller('winelines')
@ApiTags('Wine Lines')
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

    @Get('/product/hot')
    getHotProducts() {
        return this.winelineService.getHotProducts()
    }

    @Get('/product/:MALOAI')
    getProductsOnType(@Param('MALOAI') MALOAI: string) {
        return this.winelineService.getProductsByType(MALOAI)
    }

    @Get('product/name/:name')
    getProductByName(@Param('name') name: string){
        //console.log(name);
        return this.winelineService.findProductByName(name)
    }

    @Get('product/promo/top')
    getTopPromoProduct(){
        return this.winelineService.getTopPromoProduct()
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
