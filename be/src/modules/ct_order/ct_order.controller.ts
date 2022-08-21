import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CtOrderService } from './ct_order.service';
import { CreateCtOrderDto } from './dto/create-ct_order.dto';
import { UpdateCtOrderDto } from './dto/update-ct_order.dto';

@Controller('ct-order')
export class CtOrderController {
  constructor(private readonly ctOrderService: CtOrderService) {}

  @Post()
  create(@Body() createCtOrderDto: CreateCtOrderDto) {
    return this.ctOrderService.create(createCtOrderDto);
  }

  @Get()
  findAll() {
    return this.ctOrderService.findAll();
  }

  @Get('one')
  findOne(@Query('MADONG') MADONG: string, @Query('MADDH') MADDH: string) {
    return this.ctOrderService.findOne(MADONG, MADDH);
  }

  @Get('/findbyMADDH/:id')
  findByMADDH(@Param('id') id: string){
    return this,this.ctOrderService.findByMADDH(id)
  }

  @Patch('')
  update(@Query('MADONG') MADONG: string, @Query('MADDH') MADDH: string, @Body() updateCtOrderDto: UpdateCtOrderDto) {
    return this.ctOrderService.update(MADONG, MADDH, updateCtOrderDto);
  }

  @Delete('')
  remove(@Query('MADONG') MADONG: string, @Query('MADDH') MADDH: string) {
    return this.ctOrderService.remove(MADONG, MADDH);
  }
}
