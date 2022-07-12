import { CreateChangepriceDto } from './dto/create-changeprice.dto';
import { UpdateChangepriceDto } from './dto/update-changeprice.dto';
import { Changeprice } from './entities/changeprice.entity';
export declare class ChangepriceService {
    private changepriceRepo;
    create(payload: CreateChangepriceDto): Promise<Changeprice>;
    findAll(): Promise<Changeprice[]>;
    findOne(MADONG: string, NGAYTHAYDOI: Date, MANV: string): Promise<Changeprice>;
    update(MADONG: string, NGAYTHAYDOI: Date, MANV: string, body: UpdateChangepriceDto): Promise<import("typeorm").UpdateResult>;
    remove(MADONG: string, NGAYTHAYDOI: Date, MANV: string): Promise<Changeprice>;
}
