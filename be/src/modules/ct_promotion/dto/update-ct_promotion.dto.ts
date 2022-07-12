import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { CreateCtPromotionDto } from './create-ct_promotion.dto';

export class UpdateCtPromotionDto {
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    PHANTRAMGIAM!: number
}
