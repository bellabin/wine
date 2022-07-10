import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCtPhieudatDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    IDCTPD!: number

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    MAPD!: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    MADONG!: string

    @ApiProperty()
    @IsNumber()
    SOLUONG!: number

    @ApiProperty()
    @IsNumber()
    GIA!: number

    @ApiProperty()
    @IsString()
    TRANGTHAI!: string

    @ApiProperty()
    @IsString()
    MANVDH!: string

    @ApiProperty()
    @IsString()
    MANVGH!: string


}
