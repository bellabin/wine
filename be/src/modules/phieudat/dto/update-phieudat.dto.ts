import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsArray, IsDate, IsNotEmpty, IsString } from "class-validator";
import { DEFAULT_MAKH, DEFAULT_MANV, TRANG_THAI_PHIEU_DAT } from "src/constants/constant";
import { CtPhieudat } from "src/modules/ct_phieudat/entities/ct_phieudat.entity";

import { CreatePhieudatDto } from "./create-phieudat.dto";

export class UpdatePhieudatDto {
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

    @ApiProperty({ default: 'Chưa duyệt' })
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

    
} 
