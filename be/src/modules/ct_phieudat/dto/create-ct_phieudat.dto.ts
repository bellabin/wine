import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCtPhieudatDto {
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

    
}
