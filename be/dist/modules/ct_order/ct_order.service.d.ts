import { CreateCtOrderDto } from './dto/create-ct_order.dto';
import { UpdateCtOrderDto } from './dto/update-ct_order.dto';
import { CtOrder } from './entities/ct_order.entity';
export declare class CtOrderService {
    private ctorderRepo;
    create(payload: CreateCtOrderDto): Promise<CtOrder>;
    findAll(): Promise<CtOrder[]>;
    findOne(MADONG: string, MADDH: string): Promise<CtOrder>;
    update(MADONG: string, MADDH: string, body: UpdateCtOrderDto): Promise<import("typeorm").UpdateResult>;
    remove(MADONG: string, MADDH: string): Promise<CtOrder>;
}
