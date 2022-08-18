import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CtPhieudatService } from './ct_phieudat.service';
import { CreateCtPhieudatDto } from './dto/create-ct_phieudat.dto';
import { UpdateCtPhieudatDto } from './dto/update-ct_phieudat.dto';

@Controller('ct-phieudat')
export class CtPhieudatController {
  constructor(private readonly ctPhieudatService: CtPhieudatService) {}

  @Post()
  create(@Body() createCtPhieudatDto: CreateCtPhieudatDto) {
    return this.ctPhieudatService.create(createCtPhieudatDto);
  }

  @Get()
  findAll() {
    return this.ctPhieudatService.findAll();
  }

  @Get('one')
  findOne(@Query('IDCTPD') IDCTPD: number,@Query('MAPD') MAPD: string,@Query('MADONG') MADONG: string) {
    return this.ctPhieudatService.findOne(IDCTPD, MAPD, MADONG);
  }

  @Patch('')
  update(@Query('IDCTPD') IDCTPD: number,@Query('MAPD') MAPD: string,@Query('MADONG') MADONG: string, @Body() updateCtPhieudatDto: UpdateCtPhieudatDto) {
    return this.ctPhieudatService.update(IDCTPD, MAPD, MADONG, updateCtPhieudatDto);
  }

  @Delete('')
  remove(@Query('IDCTPD') IDCTPD: number,@Query('MAPD') MAPD: string,@Query('MADONG') MADONG: string) {
    return this.ctPhieudatService.remove(IDCTPD, MAPD, MADONG);
  }

  @Get('/:from,:to')
  getRevProduct(@Param('from') from: string, @Param('to')to: string){
    return this.ctPhieudatService.getRevenueProduct(from,to)
  }

  @Get('total/:from,:to')
  getTotalRev(@Param('from') from: string, @Param('to')to: string){
    return this.ctPhieudatService.getTotalRev(from,to)
  }

  @Get('total/Income/:from,:to')
  getTotalIncomeFromTo(@Param('from') from: string, @Param('to')to: string){
    return this.ctPhieudatService.getTotalIncomeFromTo(from,to)
  }
}
