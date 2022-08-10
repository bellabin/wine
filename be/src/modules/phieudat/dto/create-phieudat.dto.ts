import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDate, IsNotEmpty, IsString } from "class-validator";
import { DEFAULT_MAKH, DEFAULT_MANV, TRANG_THAI_PHIEU_DAT } from "src/constants/constant";
import { CtPhieudat } from "src/modules/ct_phieudat/entities/ct_phieudat.entity";
import { Type } from 'class-transformer'

export class CreatePhieudatDto {
    MAPD!: string

    @ApiProperty({ default: new Date() })
    @IsDate()
    NGAYDAT!: Date

    @ApiProperty()
    @IsString()
    HONN!: string

    @ApiProperty()
    @IsString()
    TENNN!: string

    @ApiProperty()
    @IsString()
    DIACHINN!: string

    @ApiProperty()
    @IsString()
    SDTNN!: string

    @ApiProperty()
    @IsString()
    GHICHU!: string

    @ApiProperty({ default: TRANG_THAI_PHIEU_DAT.CHUA_DUYET })
    @IsString()
    TRANGTHAI!: string

    @ApiProperty({ default: DEFAULT_MANV })
    @IsString()
    MANVD!: string

    @ApiProperty()
    @IsString()
    MANVGH?: string

    @ApiProperty({ default: DEFAULT_MAKH })
    @IsString()
    MAKH!: string

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({ type: [CtPhieudat] })
    @Type(() => CtPhieudat)
    CTPDS!: CtPhieudat[]
}
