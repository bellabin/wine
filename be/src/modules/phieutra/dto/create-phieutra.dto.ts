import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreatePhieutraDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    MAPT!: string

    @ApiProperty()
    @IsDate()
    NGAYTRA!: Date

    @ApiProperty()
    @IsString()
    MAHD!: string

    @ApiProperty()
    @IsString()
    MANV!: string
}
