import { CreateWinetypeDto } from '../dto/create-winetype.dto';
import { UpdateWinetypeDto } from '../dto/update-winetype.dto';
import { WinetypeService } from './winetype.service';
export declare class WinetypeController {
    private winetypeService;
    constructor(winetypeService: WinetypeService);
    findAll(): Promise<import("../entities/winetype.entity").Winetype[]>;
    findById(id: string): Promise<import("../entities/winetype.entity").Winetype>;
    create(payload: CreateWinetypeDto): Promise<import("../entities/winetype.entity").Winetype>;
    update(id: string, body: UpdateWinetypeDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("../entities/winetype.entity").Winetype>;
}
