import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCungcapDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    MANCC!: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    MADONG!: string

    @ApiProperty()
    @IsNumber()
    GIA!: number
}
