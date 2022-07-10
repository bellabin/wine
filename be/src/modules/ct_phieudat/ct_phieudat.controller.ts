import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ctPhieudatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCtPhieudatDto: UpdateCtPhieudatDto) {
    return this.ctPhieudatService.update(+id, updateCtPhieudatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ctPhieudatService.remove(+id);
  }
}
