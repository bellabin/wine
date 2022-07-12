import { CungcapService } from './cungcap.service';
import { CreateCungcapDto } from './dto/create-cungcap.dto';
import { UpdateCungcapDto } from './dto/update-cungcap.dto';
export declare class CungcapController {
    private readonly cungcapService;
    constructor(cungcapService: CungcapService);
    create(createCungcapDto: CreateCungcapDto): Promise<import("./entities/cungcap.entity").Cungcap>;
    findAll(): Promise<import("./entities/cungcap.entity").Cungcap[]>;
    findOne(MANCC: string, MADONG: string): Promise<import("./entities/cungcap.entity").Cungcap>;
    update(MANCC: string, MADONG: string, updateCungcapDto: UpdateCungcapDto): Promise<import("typeorm").UpdateResult>;
    remove(MANCC: string, MADONG: string): Promise<import("./entities/cungcap.entity").Cungcap>;
}
