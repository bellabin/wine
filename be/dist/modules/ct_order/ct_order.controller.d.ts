import { CtOrderService } from './ct_order.service';
import { CreateCtOrderDto } from './dto/create-ct_order.dto';
import { UpdateCtOrderDto } from './dto/update-ct_order.dto';
export declare class CtOrderController {
    private readonly ctOrderService;
    constructor(ctOrderService: CtOrderService);
    create(createCtOrderDto: CreateCtOrderDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCtOrderDto: UpdateCtOrderDto): string;
    remove(id: string): string;
}
