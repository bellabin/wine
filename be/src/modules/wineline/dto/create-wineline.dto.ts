import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateWinelineDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    MADONG!: string

    @ApiProperty()
    @IsString()
    TENDONG!: string

    @ApiProperty()
    @IsNumber()
    GIA!: number

    @ApiProperty()
    @IsString()
    TRANGTHAI!: string

    @ApiProperty()
    @IsString()
    HINHANH!: string

    @ApiProperty()
    @IsString()
    MOTA!: string

    @ApiProperty()
    @IsString()
    CHITIET!: string

    @ApiProperty()
    @IsNumber()
    SOLUONGTON!: number

    @ApiProperty()
    @IsString()
    MALOAI!: string

    @ApiProperty()
    @IsString()
    MATH!: string

    @ApiProperty()
    @IsString()
    MANCC!: string
}