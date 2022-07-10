import { CreateCtPhieunhapDto } from './dto/create-ct_phieunhap.dto';
import { UpdateCtPhieunhapDto } from './dto/update-ct_phieunhap.dto';
export declare class CtPhieunhapService {
    create(createCtPhieunhapDto: CreateCtPhieunhapDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCtPhieunhapDto: UpdateCtPhieunhapDto): string;
    remove(id: number): string;
}
