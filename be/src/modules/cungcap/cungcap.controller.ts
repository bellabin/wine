import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CungcapService } from './cungcap.service';
import { CreateCungcapDto } from './dto/create-cungcap.dto';
import { UpdateCungcapDto } from './dto/update-cungcap.dto';

@Controller('cungcap')
export class CungcapController {
  constructor(private readonly cungcapService: CungcapService) {}

  @Post()
  create(@Body() createCungcapDto: CreateCungcapDto) {
    return this.cungcapService.create(createCungcapDto);
  }

  @Get()
  findAll() {
    return this.cungcapService.findAll();
  }

  @Get('one')
  findOne(@Query('MANCC') MANCC: string, @Query('MADONG') MADONG:string) {
    return this.cungcapService.findOne(MANCC, MADONG);
  }

  @Patch('')
  update(@Query('MANCC') MANCC: string, @Query('MADONG') MADONG:string, @Body() updateCungcapDto: UpdateCungcapDto) {
    return this.cungcapService.update(MANCC, MADONG, updateCungcapDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cungcapService.remove(+id);
  }
}
