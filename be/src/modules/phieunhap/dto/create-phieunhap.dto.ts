import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreatePhieunhapDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    MAPN!: string

    @ApiProperty()
    @IsDate()
    NGAYLAP!: Date

    @ApiProperty()
    @IsString()
    MANV!: string

    @ApiProperty()
    @IsString()
    MADDH!: string

}
