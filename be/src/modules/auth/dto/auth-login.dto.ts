import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class AuthLoginDto {
  @IsString()
  @ApiProperty()
  USERNAME!: string

  @IsString()
  @ApiProperty()
  PASSWORD!: string
}