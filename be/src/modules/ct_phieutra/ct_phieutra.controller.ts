import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CtPhieutraService } from './ct_phieutra.service';
import { CreateCtPhieutraDto } from './dto/create-ct_phieutra.dto';
import { UpdateCtPhieutraDto } from './dto/update-ct_phieutra.dto';

@Controller('ct-phieutra')
export class CtPhieutraController {
  constructor(private readonly ctPhieutraService: CtPhieutraService) {}

  @Post()
  create(@Body() createCtPhieutraDto: CreateCtPhieutraDto) {
    return this.ctPhieutraService.create(createCtPhieutraDto);
  }

  @Get()
  findAll() {
    return this.ctPhieutraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ctPhieutraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCtPhieutraDto: UpdateCtPhieutraDto) {
    return this.ctPhieutraService.update(+id, updateCtPhieutraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ctPhieutraService.remove(+id);
  }
}
