import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { CreateChangepriceDto } from './create-changeprice.dto';

export class UpdateChangepriceDto  {
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    GIA!: number
}
