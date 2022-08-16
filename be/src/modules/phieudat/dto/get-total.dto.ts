import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";

class GetTotal {
	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	MADONG!: string

	@IsNumber()
	@IsNotEmpty()
	@ApiProperty()
	SOLUONG!: number
}

export class GetTotalDto {
	@IsArray()
	@IsNotEmpty()
	@ApiProperty({ type: [GetTotal] })
	totals: GetTotal[]
}
