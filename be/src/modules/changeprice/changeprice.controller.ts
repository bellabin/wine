import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
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

  @Get('one')
  findOne(@Query('MADONG') MADONG: string, @Query('NGAYTHAYDOI') NGAYTHAYDOI: Date, @Query('MANV') MANV: string) {
    return this.changepriceService.findOne(MADONG, NGAYTHAYDOI, MANV);
  }

  @Patch('')
  update(@Query('MADONG') MADONG: string, @Query('NGAYTHAYDOI') NGAYTHAYDOI: Date, @Query('MANV') MANV: string, @Body() updateChangepriceDto: UpdateChangepriceDto) {
    return this.changepriceService.update(MADONG, NGAYTHAYDOI, MANV, updateChangepriceDto);
  }

  @Delete('')
  remove(@Query('MADONG') MADONG: string, @Query('NGAYTHAYDOI') NGAYTHAYDOI: Date, @Query('MANV') MANV: string) {
    return this.changepriceService.remove(MADONG, NGAYTHAYDOI, MANV);
  }
}
