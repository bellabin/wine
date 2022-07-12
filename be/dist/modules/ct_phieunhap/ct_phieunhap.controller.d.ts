import { CtPhieunhapService } from './ct_phieunhap.service';
import { CreateCtPhieunhapDto } from './dto/create-ct_phieunhap.dto';
import { UpdateCtPhieunhapDto } from './dto/update-ct_phieunhap.dto';
export declare class CtPhieunhapController {
    private readonly ctPhieunhapService;
    constructor(ctPhieunhapService: CtPhieunhapService);
    create(createCtPhieunhapDto: CreateCtPhieunhapDto): Promise<import("./entities/ct_phieunhap.entity").CtPhieunhap>;
    findAll(): Promise<import("./entities/ct_phieunhap.entity").CtPhieunhap[]>;
    findOne(MAPN: string, MADONG: string): Promise<import("./entities/ct_phieunhap.entity").CtPhieunhap>;
    update(MAPN: string, MADONG: string, updateCtPhieunhapDto: UpdateCtPhieunhapDto): Promise<import("typeorm").UpdateResult>;
    remove(MAPN: string, MADONG: string): Promise<import("./entities/ct_phieunhap.entity").CtPhieunhap>;
}
