import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProviderDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    MANCC!: string

    @ApiProperty()
    @IsString()
    TENNCC!: string

    @ApiProperty()
    @IsString()
    DIACHI!: string

    @ApiProperty()
    @IsString()
    EMAIL!: string

    @ApiProperty()
    @IsString()
    SDT!: string
}
