import { ApiProduces, ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreatePromotionDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    MAKM!: string

    @ApiProperty()
    @IsString()
    TENKM!: string

    @ApiProperty()
    @IsDate()
    NGAYBATDAU!: Date

    @ApiProperty()
    @IsDate()
    NGAYKETTHUC!: Date

    @ApiProperty()
    @IsString()
    LIDO!: string

    @ApiProperty()
    @IsDate()
    MANV!: string


}
