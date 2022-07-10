import { CreateWinelineDto } from "./dto/create-wineline.dto";
import { UpdateWinelineDto } from "./dto/update-wineline.dto";
import { WinelineService } from "./wineline.service";
export declare class WinelineController {
    private winelineService;
    constructor(winelineService: WinelineService);
    findAll(): Promise<import("./entities/wineline.entity").Wineline[]>;
    findById(id: string): Promise<import("./entities/wineline.entity").Wineline>;
    create(payload: CreateWinelineDto): Promise<import("./entities/wineline.entity").Wineline>;
    update(id: string, body: UpdateWinelineDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("./entities/wineline.entity").Wineline>;
}
