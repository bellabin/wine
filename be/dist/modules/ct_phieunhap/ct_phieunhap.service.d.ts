import { CreateCtPhieunhapDto } from './dto/create-ct_phieunhap.dto';
import { UpdateCtPhieunhapDto } from './dto/update-ct_phieunhap.dto';
import { CtPhieunhap } from './entities/ct_phieunhap.entity';
export declare class CtPhieunhapService {
    private ctphieunhapRepo;
    create(payload: CreateCtPhieunhapDto): Promise<CtPhieunhap>;
    findAll(): Promise<CtPhieunhap[]>;
    findOne(MAPN: string, MADONG: string): Promise<CtPhieunhap>;
    update(MAPN: string, MADONG: string, body: UpdateCtPhieunhapDto): Promise<import("typeorm").UpdateResult>;
    remove(MAPN: string, MADONG: string): Promise<CtPhieunhap>;
}
