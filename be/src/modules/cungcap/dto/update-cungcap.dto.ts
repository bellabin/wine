import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateCungcapDto } from './create-cungcap.dto';

export class UpdateCungcapDto {


    @ApiProperty()
    @IsNumber()
    @IsOptional()
    GIA!: number
}
