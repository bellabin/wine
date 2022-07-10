import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ctOrderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCtOrderDto: UpdateCtOrderDto) {
    return this.ctOrderService.update(+id, updateCtOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ctOrderService.remove(+id);
  }
}
