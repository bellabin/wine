import { CreateCtPhieudatDto } from './dto/create-ct_phieudat.dto';
import { UpdateCtPhieudatDto } from './dto/update-ct_phieudat.dto';
import { CtPhieudat } from './entities/ct_phieudat.entity';
export declare class CtPhieudatService {
    private ctphieudatRepo;
    create(payload: CreateCtPhieudatDto): Promise<CtPhieudat>;
    findAll(): Promise<CtPhieudat[]>;
    findOne(IDCTPD: number, MAPD: string, MADONG: string): Promise<CtPhieudat>;
    update(IDCTPD: number, MAPD: string, MADONG: string, body: UpdateCtPhieudatDto): Promise<import("typeorm").UpdateResult>;
    remove(IDCTPD: number, MAPD: string, MADONG: string): Promise<CtPhieudat>;
}
