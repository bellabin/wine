import { CtPhieudatService } from './ct_phieudat.service';
import { CreateCtPhieudatDto } from './dto/create-ct_phieudat.dto';
import { UpdateCtPhieudatDto } from './dto/update-ct_phieudat.dto';
export declare class CtPhieudatController {
    private readonly ctPhieudatService;
    constructor(ctPhieudatService: CtPhieudatService);
    create(createCtPhieudatDto: CreateCtPhieudatDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCtPhieudatDto: UpdateCtPhieudatDto): string;
    remove(id: string): string;
}
