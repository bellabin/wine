import { CreatePhieutraDto } from '../dto/create-phieutra.dto';
import { UpdatePhieutraDto } from '../dto/update-phieutra.dto';
import { PhieutraService } from './phieutra.service';
export declare class PhieutraController {
    private phieutraService;
    constructor(phieutraService: PhieutraService);
    findAll(): Promise<import("../entities/phieutra.entity").Phieutra[]>;
    findById(id: string): Promise<import("../entities/phieutra.entity").Phieutra>;
    create(payload: CreatePhieutraDto): Promise<import("../entities/phieutra.entity").Phieutra>;
    update(id: string, body: UpdatePhieutraDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("../entities/phieutra.entity").Phieutra>;
}
