import { CtPhieutraService } from './ct_phieutra.service';
import { CreateCtPhieutraDto } from './dto/create-ct_phieutra.dto';
import { UpdateCtPhieutraDto } from './dto/update-ct_phieutra.dto';
export declare class CtPhieutraController {
    private readonly ctPhieutraService;
    constructor(ctPhieutraService: CtPhieutraService);
    create(createCtPhieutraDto: CreateCtPhieutraDto): Promise<import("./entities/ct_phieutra.entity").CtPhieutra>;
    findAll(): Promise<import("./entities/ct_phieutra.entity").CtPhieutra[]>;
    findOne(MAPT: string, IDCTPD: string): Promise<import("./entities/ct_phieutra.entity").CtPhieutra>;
    update(MAPT: string, IDCTPD: string, updateCtPhieutraDto: UpdateCtPhieutraDto): Promise<import("typeorm").UpdateResult>;
    remove(MAPT: string, IDCTPD: string): Promise<import("./entities/ct_phieutra.entity").CtPhieutra>;
}
