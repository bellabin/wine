import { CreateCungcapDto } from './dto/create-cungcap.dto';
import { UpdateCungcapDto } from './dto/update-cungcap.dto';
import { Cungcap } from './entities/cungcap.entity';
export declare class CungcapService {
    private cungcapRepo;
    create(payload: CreateCungcapDto): Promise<Cungcap>;
    findAll(): Promise<Cungcap[]>;
    findOne(MANCC: string, MADONG: string): Promise<Cungcap>;
    update(MANCC: string, MADONG: string, body: UpdateCungcapDto): Promise<import("typeorm").UpdateResult>;
    remove(MANCC: string, MADONG: string): Promise<Cungcap>;
}
