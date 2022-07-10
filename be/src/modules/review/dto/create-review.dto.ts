import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateReviewDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    MADANHGIA!: number

    @ApiProperty()
    @IsString()
    NOIDUNG!: string

    @ApiProperty()
    @IsString()
    TEN!: string

    @ApiProperty()
    @IsString()
    EMAIL!: string

    @ApiProperty()
    @IsDate()
    DATE!: Date

    @ApiProperty()
    @IsString()
    MADONG!: string
}
