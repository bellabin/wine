import { CreateCungcapDto } from './dto/create-cungcap.dto';
import { UpdateCungcapDto } from './dto/update-cungcap.dto';
export declare class CungcapService {
    create(createCungcapDto: CreateCungcapDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCungcapDto: UpdateCungcapDto): string;
    remove(id: number): string;
}
