import { ApiProduces, ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateWinetypeDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    MALOAI!: string

    @ApiProperty()
    @IsString()
    TENLOAI!: string
}
