import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateStaffDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    MANV!: string

    @ApiProperty()
    @IsString()
    //@IsNotEmpty()
    HO!: string

    @ApiProperty()
    @IsString()
    //@IsNotEmpty()
    TEN!: string

    @ApiProperty()
    @IsString()
    //@IsNotEmpty()
    GIOITINH!: string

    @ApiProperty()
    @IsDateString()
    //@IsNotEmpty()
    NGAYSINH!: Date

    @ApiProperty()
    @IsString()
    //@IsNotEmpty()
    DIACHI!: string

    @ApiProperty()
    @IsString()
    //@IsNotEmpty()
    SDT!: string

    @ApiProperty()
    @IsString()
    //@IsNotEmpty()
    EMAIL!: string

    @ApiProperty()
    @IsString()
    //@IsNotEmpty()
    USERNAME!: string

    @ApiProperty()
    @IsString()
    //@IsNotEmpty()
    PASSWORD!: string

    @ApiProperty()
    @IsString()
    //@IsNotEmpty()
    MANQ!: string
}