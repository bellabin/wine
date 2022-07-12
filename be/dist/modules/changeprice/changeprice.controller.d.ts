import { ChangepriceService } from './changeprice.service';
import { CreateChangepriceDto } from './dto/create-changeprice.dto';
import { UpdateChangepriceDto } from './dto/update-changeprice.dto';
export declare class ChangepriceController {
    private readonly changepriceService;
    constructor(changepriceService: ChangepriceService);
    create(createChangepriceDto: CreateChangepriceDto): Promise<import("./entities/changeprice.entity").Changeprice>;
    findAll(): Promise<import("./entities/changeprice.entity").Changeprice[]>;
    findOne(MADONG: string, NGAYTHAYDOI: Date, MANV: string): Promise<import("./entities/changeprice.entity").Changeprice>;
    update(MADONG: string, NGAYTHAYDOI: Date, MANV: string, updateChangepriceDto: UpdateChangepriceDto): Promise<import("typeorm").UpdateResult>;
    remove(MADONG: string, NGAYTHAYDOI: Date, MANV: string): Promise<import("./entities/changeprice.entity").Changeprice>;
}
