import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class LoginStaffDto{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    USERNAME: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    PASSWORD: string
}