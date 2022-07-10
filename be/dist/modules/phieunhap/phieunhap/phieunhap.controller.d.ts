import { CreatePhieunhapDto } from '../dto/create-phieunhap.dto';
import { UpdatePhieunhapDto } from '../dto/update-phieunhap.dto';
import { PhieunhapService } from './phieunhap.service';
export declare class PhieunhapController {
    private pnService;
    constructor(pnService: PhieunhapService);
    findAll(): Promise<import("../entities/phieunhap.entity").Phieunhap[]>;
    findById(id: string): Promise<import("../entities/phieunhap.entity").Phieunhap>;
    create(payload: CreatePhieunhapDto): Promise<import("../entities/phieunhap.entity").Phieunhap>;
    update(id: string, body: UpdatePhieunhapDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("../entities/phieunhap.entity").Phieunhap>;
}
