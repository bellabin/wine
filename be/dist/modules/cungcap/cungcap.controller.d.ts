import { CungcapService } from './cungcap.service';
import { CreateCungcapDto } from './dto/create-cungcap.dto';
import { UpdateCungcapDto } from './dto/update-cungcap.dto';
export declare class CungcapController {
    private readonly cungcapService;
    constructor(cungcapService: CungcapService);
    create(createCungcapDto: CreateCungcapDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCungcapDto: UpdateCungcapDto): string;
    remove(id: string): string;
}
