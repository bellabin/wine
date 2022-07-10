import { CreateCtPhieudatDto } from './dto/create-ct_phieudat.dto';
import { UpdateCtPhieudatDto } from './dto/update-ct_phieudat.dto';
export declare class CtPhieudatService {
    create(createCtPhieudatDto: CreateCtPhieudatDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCtPhieudatDto: UpdateCtPhieudatDto): string;
    remove(id: number): string;
}
