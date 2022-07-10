import { Repository } from 'typeorm';
import { CreateWinelineDto } from './dto/create-wineline.dto';
import { UpdateWinelineDto } from './dto/update-wineline.dto';
import { Wineline } from './entities/wineline.entity';
export declare class WinelineService {
    private winelineRepo;
    constructor(winelineRepo: Repository<Wineline>);
    findAll(): Promise<Wineline[]>;
    findById(MADONG: string): Promise<Wineline>;
    create(payload: CreateWinelineDto): Promise<Wineline>;
    update(MADONG: string, body: UpdateWinelineDto): Promise<import("typeorm").UpdateResult>;
    delete(MADONG: string): Promise<Wineline>;
}
