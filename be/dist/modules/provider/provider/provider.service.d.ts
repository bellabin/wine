import { Repository } from 'typeorm';
import { CreateProviderDto } from '../dto/create-provider.dto';
import { UpdateProviderDto } from '../dto/update-provider.dto';
import { Provider } from '../entities/provider.entity';
export declare class ProviderService {
    private providerRepo;
    constructor(providerRepo: Repository<Provider>);
    findAll(): Promise<Provider[]>;
    findById(MANCC: string): Promise<Provider>;
    create(payload: CreateProviderDto): Promise<Provider>;
    update(MANCC: string, body: UpdateProviderDto): Promise<import("typeorm").UpdateResult>;
    delete(MANCC: string): Promise<Provider>;
}
