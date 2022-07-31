import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateChangepriceDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    MADONG!: string

    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    NGAYTHAYDOI!: Date

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    MANV!: string

    @ApiProperty()
    @IsNumber()
    GIA!: number
}
