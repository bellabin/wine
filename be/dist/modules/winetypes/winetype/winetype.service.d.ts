import { Repository } from 'typeorm';
import { CreateWinetypeDto } from '../dto/create-winetype.dto';
import { UpdateWinetypeDto } from '../dto/update-winetype.dto';
import { Winetype } from '../entities/winetype.entity';
export declare class WinetypeService {
    private winetypeRepo;
    constructor(winetypeRepo: Repository<Winetype>);
    findAll(): Promise<Winetype[]>;
    findById(MALOAI: string): Promise<Winetype>;
    create(payload: CreateWinetypeDto): Promise<Winetype>;
    update(MALOAI: string, body: UpdateWinetypeDto): Promise<import("typeorm").UpdateResult>;
    delete(MALOAI: string): Promise<Winetype>;
}
