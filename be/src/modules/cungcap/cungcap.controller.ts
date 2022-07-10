import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cungcapService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCungcapDto: UpdateCungcapDto) {
    return this.cungcapService.update(+id, updateCungcapDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cungcapService.remove(+id);
  }
}
