import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class LoginCustomerDto{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    USERNAME: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    PASSWORD: string
}