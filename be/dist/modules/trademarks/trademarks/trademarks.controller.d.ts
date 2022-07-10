import { CreateTrademarksDto } from '../dto/create-trademarks.dto';
import { UpdateTrademarksDto } from '../dto/update-trademarks.dto';
import { TrademarksService } from './trademarks.service';
export declare class TrademarksController {
    private trademarkService;
    constructor(trademarkService: TrademarksService);
    findAll(): Promise<import("../entities/trademarks.entity").Trademarks[]>;
    findById(id: string): Promise<import("../entities/trademarks.entity").Trademarks>;
    create(payload: CreateTrademarksDto): Promise<import("../entities/trademarks.entity").Trademarks>;
    update(id: string, body: UpdateTrademarksDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("../entities/trademarks.entity").Trademarks>;
}
