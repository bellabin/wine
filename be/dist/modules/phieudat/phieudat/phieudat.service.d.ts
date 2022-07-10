import { Repository } from 'typeorm';
import { CreatePhieudatDto } from '../dto/create-phieudat.dto';
import { UpdatePhieudatDto } from '../dto/update-phieudat.dto';
import { Phieudat } from '../entities/phieudat.entity';
export declare class PhieudatService {
    private phieudatRepo;
    constructor(phieudatRepo: Repository<Phieudat>);
    findAll(): Promise<Phieudat[]>;
    findById(MAPD: string): Promise<Phieudat>;
    create(payload: CreatePhieudatDto): Promise<Phieudat>;
    update(MAPD: string, body: UpdatePhieudatDto): Promise<import("typeorm").UpdateResult>;
    delete(MAPD: string): Promise<Phieudat>;
}
