import { CreateCtOrderDto } from './dto/create-ct_order.dto';
import { UpdateCtOrderDto } from './dto/update-ct_order.dto';
export declare class CtOrderService {
    create(createCtOrderDto: CreateCtOrderDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCtOrderDto: UpdateCtOrderDto): string;
    remove(id: number): string;
}
