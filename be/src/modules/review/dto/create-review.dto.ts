import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateReviewDto {
    @ApiProperty()
    @IsString()
    MAKH!: string

    @ApiProperty()
    @IsString()
    MADONG!: string

    @ApiProperty()
    @IsDate()
    NGAYDANHGIA!: Date

    @ApiProperty()
    @IsString()
    NOIDUNG!: string

    @ApiProperty()
    @IsNumber()
    RATING!: number

    
}
