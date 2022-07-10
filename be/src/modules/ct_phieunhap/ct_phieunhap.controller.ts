import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ctPhieunhapService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCtPhieunhapDto: UpdateCtPhieunhapDto) {
    return this.ctPhieunhapService.update(+id, updateCtPhieunhapDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ctPhieunhapService.remove(+id);
  }
}
