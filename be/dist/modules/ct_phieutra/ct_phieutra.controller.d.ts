import { CtPhieutraService } from './ct_phieutra.service';
import { CreateCtPhieutraDto } from './dto/create-ct_phieutra.dto';
import { UpdateCtPhieutraDto } from './dto/update-ct_phieutra.dto';
export declare class CtPhieutraController {
    private readonly ctPhieutraService;
    constructor(ctPhieutraService: CtPhieutraService);
    create(createCtPhieutraDto: CreateCtPhieutraDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCtPhieutraDto: UpdateCtPhieutraDto): string;
    remove(id: string): string;
}
