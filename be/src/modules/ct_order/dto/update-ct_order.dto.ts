import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { CreateCtOrderDto } from './create-ct_order.dto';

export class UpdateCtOrderDto  {
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    SOLUONG!: number

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    GIA!: number
}
