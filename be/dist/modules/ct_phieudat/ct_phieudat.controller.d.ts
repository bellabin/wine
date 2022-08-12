import { CtPhieudatService } from './ct_phieudat.service';
import { CreateCtPhieudatDto } from './dto/create-ct_phieudat.dto';
import { UpdateCtPhieudatDto } from './dto/update-ct_phieudat.dto';
export declare class CtPhieudatController {
    private readonly ctPhieudatService;
    constructor(ctPhieudatService: CtPhieudatService);
    create(createCtPhieudatDto: CreateCtPhieudatDto): Promise<import("./entities/ct_phieudat.entity").CtPhieudat>;
    findAll(): Promise<import("./entities/ct_phieudat.entity").CtPhieudat[]>;
    findOne(IDCTPD: number, MAPD: string, MADONG: string): Promise<import("./entities/ct_phieudat.entity").CtPhieudat>;
    update(IDCTPD: number, MAPD: string, MADONG: string, updateCtPhieudatDto: UpdateCtPhieudatDto): Promise<import("typeorm").UpdateResult>;
    remove(IDCTPD: number, MAPD: string, MADONG: string): Promise<import("./entities/ct_phieudat.entity").CtPhieudat>;
    getRevProduct(from: string, to: string): Promise<any>;
}
