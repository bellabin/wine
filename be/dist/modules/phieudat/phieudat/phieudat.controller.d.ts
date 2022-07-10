import { CreatePhieudatDto } from '../dto/create-phieudat.dto';
import { UpdatePhieudatDto } from '../dto/update-phieudat.dto';
import { PhieudatService } from './phieudat.service';
export declare class PhieudatController {
    private phieudatService;
    constructor(phieudatService: PhieudatService);
    findAll(): Promise<import("../entities/phieudat.entity").Phieudat[]>;
    findById(id: string): Promise<import("../entities/phieudat.entity").Phieudat>;
    create(payload: CreatePhieudatDto): Promise<import("../entities/phieudat.entity").Phieudat>;
    update(id: string, body: UpdatePhieudatDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("../entities/phieudat.entity").Phieudat>;
}
