import { Repository } from 'typeorm';
import { CreateBillDto } from '../dto/create-bill.dto';
import { UpdateBillDto } from '../dto/update-bill.dto';
import { Bill } from '../entities/bill.entity';
export declare class BillService {
    private billRepo;
    constructor(billRepo: Repository<Bill>);
    findAll(): Promise<Bill[]>;
    findById(MAHD: string): Promise<Bill>;
    create(payload: CreateBillDto): Promise<Bill>;
    update(MAHD: string, body: UpdateBillDto): Promise<import("typeorm").UpdateResult>;
    delete(MAHD: string): Promise<Bill>;
}
