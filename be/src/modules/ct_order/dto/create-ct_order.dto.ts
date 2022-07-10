import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCtOrderDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    MADONG!: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    MADDH!: string

    @ApiProperty()
    @IsNumber()
    SOLUONG!: number

    @ApiProperty()
    @IsNumber()
    GIA!: number
}
