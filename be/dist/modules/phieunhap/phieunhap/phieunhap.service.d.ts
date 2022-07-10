import { Repository } from 'typeorm';
import { CreatePhieunhapDto } from '../dto/create-phieunhap.dto';
import { UpdatePhieunhapDto } from '../dto/update-phieunhap.dto';
import { Phieunhap } from '../entities/phieunhap.entity';
export declare class PhieunhapService {
    private phieunhapRepo;
    constructor(phieunhapRepo: Repository<Phieunhap>);
    findAll(): Promise<Phieunhap[]>;
    findById(MAPN: string): Promise<Phieunhap>;
    create(payload: CreatePhieunhapDto): Promise<Phieunhap>;
    update(MAPN: string, body: UpdatePhieunhapDto): Promise<import("typeorm").UpdateResult>;
    delete(MAPN: string): Promise<Phieunhap>;
}
