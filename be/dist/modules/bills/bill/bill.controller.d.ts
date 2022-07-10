import { CreateBillDto } from '../dto/create-bill.dto';
import { UpdateBillDto } from '../dto/update-bill.dto';
import { BillService } from './bill.service';
export declare class BillController {
    private billService;
    constructor(billService: BillService);
    findAll(): Promise<import("../entities/bill.entity").Bill[]>;
    findById(id: string): Promise<import("../entities/bill.entity").Bill>;
    create(payload: CreateBillDto): Promise<import("../entities/bill.entity").Bill>;
    update(id: string, body: UpdateBillDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("../entities/bill.entity").Bill>;
}
