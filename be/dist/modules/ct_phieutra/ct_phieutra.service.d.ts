import { CreateCtPhieutraDto } from './dto/create-ct_phieutra.dto';
import { UpdateCtPhieutraDto } from './dto/update-ct_phieutra.dto';
export declare class CtPhieutraService {
    create(createCtPhieutraDto: CreateCtPhieutraDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCtPhieutraDto: UpdateCtPhieutraDto): string;
    remove(id: number): string;
}
