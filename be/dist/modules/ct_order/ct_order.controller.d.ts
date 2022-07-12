import { CtOrderService } from './ct_order.service';
import { CreateCtOrderDto } from './dto/create-ct_order.dto';
import { UpdateCtOrderDto } from './dto/update-ct_order.dto';
export declare class CtOrderController {
    private readonly ctOrderService;
    constructor(ctOrderService: CtOrderService);
    create(createCtOrderDto: CreateCtOrderDto): Promise<import("./entities/ct_order.entity").CtOrder>;
    findAll(): Promise<import("./entities/ct_order.entity").CtOrder[]>;
    findOne(MADONG: string, MADDH: string): Promise<import("./entities/ct_order.entity").CtOrder>;
    update(MADONG: string, MADDH: string, updateCtOrderDto: UpdateCtOrderDto): Promise<import("typeorm").UpdateResult>;
    remove(MADONG: string, MADDH: string): Promise<import("./entities/ct_order.entity").CtOrder>;
}
