import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateCtPhieudatDto } from './create-ct_phieudat.dto';

export class UpdateCtPhieudatDto {
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    SOLUONG!: number

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    GIA!: number

    @ApiProperty()
    @IsString()
    @IsOptional()
    TRANGTHAI!: string

    @ApiProperty()
    @IsString()
    @IsOptional()
    MANVDH!: string

    @ApiProperty()
    @IsString()
    @IsOptional()
    MANVGH!: string
}
