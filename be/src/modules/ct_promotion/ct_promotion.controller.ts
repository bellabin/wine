import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CtPromotionService } from './ct_promotion.service';
import { CreateCtPromotionDto } from './dto/create-ct_promotion.dto';
import { UpdateCtPromotionDto } from './dto/update-ct_promotion.dto';

@Controller('ct-promotion')
export class CtPromotionController {
  constructor(private readonly ctPromotionService: CtPromotionService) {}

  @Post()
  create(@Body() createCtPromotionDto: CreateCtPromotionDto) {
    return this.ctPromotionService.create(createCtPromotionDto);
  }

  @Get()
  findAll() {
    return this.ctPromotionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ctPromotionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCtPromotionDto: UpdateCtPromotionDto) {
    return this.ctPromotionService.update(+id, updateCtPromotionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ctPromotionService.remove(+id);
  }
}
