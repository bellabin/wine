import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTrademarksDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    MATH!: string

    @ApiProperty()
    @IsString()
    TENTH!: string
    
    // @ApiProperty()
    // @IsString()
    // HINHANH!: string
}
