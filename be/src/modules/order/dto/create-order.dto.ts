import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateOrderDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    MADDH!: string

    @ApiProperty()
    @IsDate()
    NGAYDAT!: Date

    @ApiProperty()
    @IsString()
    MANV!: string

    @ApiProperty()
    @IsString()
    MANCC!: string
}
