import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreatePhieudatDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    MAPD!: string

    @ApiProperty()
    @IsDate()
    NGAYDAT!: Date

    @ApiProperty()
    @IsString()
    HONN!: string

    @ApiProperty()
    @IsString()
    TENNN!: string

    @ApiProperty()
    @IsString()
    DIACHINN!: string

    @ApiProperty()
    @IsString()
    SDTNN!: string

    @ApiProperty()
    @IsString()
    GHICHU!: string

    @ApiProperty()
    @IsString()
    TRANGTHAI!: string

    @ApiProperty()
    @IsString()
    MANVD!: string

    @ApiProperty()
    @IsString()
    MANVGH!: string

    @ApiProperty()
    @IsString()
    MAKH!: string


}
