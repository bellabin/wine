import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
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

  @Get('one')
  findOne(@Query('MAKM') MAKM: string, @Query('MADONG') MADONG: string) {
    return this.ctPromotionService.findOne(MAKM, MADONG);
  }

  @Patch('')
  update(@Query('MAKM') MAKM: string, @Query('MADONG') MADONG: string, @Body() updateCtPromotionDto: UpdateCtPromotionDto) {
    return this.ctPromotionService.update(MAKM, MADONG, updateCtPromotionDto);
  }

  @Delete('')
  remove(@Query('MAKM') MAKM: string, @Query('MADONG') MADONG: string) {
    console.log('called delete ctpromo', MAKM, MADONG)
    return this.ctPromotionService.remove(MAKM,MADONG);
  }
}
