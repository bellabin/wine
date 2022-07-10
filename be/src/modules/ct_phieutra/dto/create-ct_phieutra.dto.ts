import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCtPhieutraDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    MAPT!: string

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    IDCTPD!: number

    @ApiProperty()
    @IsNumber()
    SOLUONG!: number
}
