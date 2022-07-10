import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
export declare class OrderService {
    private ordRepo;
    create(payload: CreateOrderDto): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(MADDH: string): Promise<Order>;
    update(MADDH: string, body: UpdateOrderDto): Promise<import("typeorm").UpdateResult>;
    remove(MADDH: string): Promise<Order>;
}
