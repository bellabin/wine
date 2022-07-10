import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChangepriceService } from './changeprice.service';
import { CreateChangepriceDto } from './dto/create-changeprice.dto';
import { UpdateChangepriceDto } from './dto/update-changeprice.dto';

@Controller('changeprice')
export class ChangepriceController {
  constructor(private readonly changepriceService: ChangepriceService) {}

  @Post()
  create(@Body() createChangepriceDto: CreateChangepriceDto) {
    return this.changepriceService.create(createChangepriceDto);
  }

  @Get()
  findAll() {
    return this.changepriceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.changepriceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChangepriceDto: UpdateChangepriceDto) {
    return this.changepriceService.update(+id, updateChangepriceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.changepriceService.remove(+id);
  }
}
