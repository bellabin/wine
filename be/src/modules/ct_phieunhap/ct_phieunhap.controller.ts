import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CtPhieunhapService } from './ct_phieunhap.service';
import { CreateCtPhieunhapDto } from './dto/create-ct_phieunhap.dto';
import { UpdateCtPhieunhapDto } from './dto/update-ct_phieunhap.dto';

@Controller('ct-phieunhap')
export class CtPhieunhapController {
  constructor(private readonly ctPhieunhapService: CtPhieunhapService) {}

  @Post()
  create(@Body() createCtPhieunhapDto: CreateCtPhieunhapDto) {
    return this.ctPhieunhapService.create(createCtPhieunhapDto);
  }

  @Get()
  findAll() {
    return this.ctPhieunhapService.findAll();
  }

  @Get('one')
  findOne(@Query('MAPN') MAPN: string, @Query('MADONG') MADONG: string) {
    return this.ctPhieunhapService.findOne(MAPN, MADONG);
  }

  @Patch('')
  update(@Query('MAPN') MAPN: string, @Query('MADONG') MADONG: string, @Body() updateCtPhieunhapDto: UpdateCtPhieunhapDto) {
    return this.ctPhieunhapService.update(MAPN, MADONG, updateCtPhieunhapDto);
  }

  @Delete('')
  remove(@Query('MAPN') MAPN: string, @Query('MADONG') MADONG: string) {
    return this.ctPhieunhapService.remove(MAPN, MADONG);
  }
}
