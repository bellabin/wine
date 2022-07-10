import { Repository } from 'typeorm';
import { CreatePhieutraDto } from '../dto/create-phieutra.dto';
import { UpdatePhieutraDto } from '../dto/update-phieutra.dto';
import { Phieutra } from '../entities/phieutra.entity';
export declare class PhieutraService {
    private phieutraRepo;
    constructor(phieutraRepo: Repository<Phieutra>);
    findAll(): Promise<Phieutra[]>;
    findById(MAPT: string): Promise<Phieutra>;
    create(payload: CreatePhieutraDto): Promise<Phieutra>;
    update(MAPT: string, body: UpdatePhieutraDto): Promise<import("typeorm").UpdateResult>;
    delete(MAPT: string): Promise<Phieutra>;
}
