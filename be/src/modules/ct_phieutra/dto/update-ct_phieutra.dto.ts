import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { CreateCtPhieutraDto } from './create-ct_phieutra.dto';

export class UpdateCtPhieutraDto {
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    SOLUONG!: number
}
