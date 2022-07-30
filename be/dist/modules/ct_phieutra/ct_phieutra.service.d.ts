import { CreateCtPhieutraDto } from './dto/create-ct_phieutra.dto';
import { UpdateCtPhieutraDto } from './dto/update-ct_phieutra.dto';
import { CtPhieutra } from './entities/ct_phieutra.entity';
export declare class CtPhieutraService {
    private ctphieutraRepo;
    create(payload: CreateCtPhieutraDto): Promise<CtPhieutra>;
    findAll(): Promise<CtPhieutra[]>;
    findOne(MAPT: string, IDCTPD: number): Promise<CtPhieutra>;
    update(MAPT: string, IDCTPD: number, body: UpdateCtPhieutraDto): Promise<import("typeorm").UpdateResult>;
    remove(MAPT: string, IDCTPD: number): Promise<CtPhieutra>;
}
