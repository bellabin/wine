import { CreateProviderDto } from '../dto/create-provider.dto';
import { UpdateProviderDto } from '../dto/update-provider.dto';
import { ProviderService } from './provider.service';
export declare class ProviderController {
    private providerService;
    constructor(providerService: ProviderService);
    findAll(): Promise<import("../entities/provider.entity").Provider[]>;
    findById(id: string): Promise<import("../entities/provider.entity").Provider>;
    create(payload: CreateProviderDto): Promise<import("../entities/provider.entity").Provider>;
    update(id: string, body: UpdateProviderDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("../entities/provider.entity").Provider>;
}
