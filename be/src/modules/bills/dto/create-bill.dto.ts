import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateBillDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    MAHD!: string

    @ApiProperty()
    @IsDate()
    NGAY!: string

    @ApiProperty()
    @IsString()
    THANHTIEN!: number

    @ApiProperty()
    @IsString()
    MASOTHUE!: string

    @ApiProperty()
    @IsString()
    MANV!: string

    @ApiProperty()
    @IsString()
    MAPD: string
}
