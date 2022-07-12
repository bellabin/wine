import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
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

  @Get('one')
  findOne(@Query('MAPT') MAPT: string, @Query('IDCTPD') IDCTPD: string) {
    return this.ctPhieutraService.findOne(MAPT, IDCTPD);
  }

  @Patch('')
  update(@Query('MAPT') MAPT: string, @Query('IDCTPD') IDCTPD: string, @Body() updateCtPhieutraDto: UpdateCtPhieutraDto) {
    return this.ctPhieutraService.update(MAPT, IDCTPD, updateCtPhieutraDto);
  }

  @Delete('')
  remove(@Query('MAPT') MAPT: string, @Query('IDCTPD') IDCTPD: string) {
    return this.ctPhieutraService.remove(MAPT, IDCTPD);
  }
}
