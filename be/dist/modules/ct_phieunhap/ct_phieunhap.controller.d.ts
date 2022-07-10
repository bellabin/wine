import { CtPhieunhapService } from './ct_phieunhap.service';
import { CreateCtPhieunhapDto } from './dto/create-ct_phieunhap.dto';
import { UpdateCtPhieunhapDto } from './dto/update-ct_phieunhap.dto';
export declare class CtPhieunhapController {
    private readonly ctPhieunhapService;
    constructor(ctPhieunhapService: CtPhieunhapService);
    create(createCtPhieunhapDto: CreateCtPhieunhapDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCtPhieunhapDto: UpdateCtPhieunhapDto): string;
    remove(id: string): string;
}
