import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { CreateCtPhieunhapDto } from './create-ct_phieunhap.dto';

export class UpdateCtPhieunhapDto {
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    SOLUONG!: number

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    GIA!: number
}
