import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCtPromotionDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    MAKM!: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    MADONG!: string

    @ApiProperty()
    @IsNumber()
    PHANTRAMGIAM!: number
}
