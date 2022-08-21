import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsDate, IsNotEmpty, IsString } from "class-validator";
import { CtOrder } from "src/modules/ct_order/entities/ct_order.entity";

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

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({ type: [CtOrder] })
    @Type(() => CtOrder)
    CTODS!: CtOrder[]
}
