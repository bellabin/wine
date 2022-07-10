import { Repository } from 'typeorm';
import { CreateTrademarksDto } from '../dto/create-trademarks.dto';
import { UpdateTrademarksDto } from '../dto/update-trademarks.dto';
import { Trademarks } from '../entities/trademarks.entity';
export declare class TrademarksService {
    private trademarkRepo;
    constructor(trademarkRepo: Repository<Trademarks>);
    findAll(): Promise<Trademarks[]>;
    findById(MATH: string): Promise<Trademarks>;
    create(payload: CreateTrademarksDto): Promise<Trademarks>;
    update(MATH: string, body: UpdateTrademarksDto): Promise<import("typeorm").UpdateResult>;
    delete(MATH: string): Promise<Trademarks>;
}
