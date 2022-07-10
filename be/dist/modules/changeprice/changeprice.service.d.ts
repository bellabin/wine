import { CreateChangepriceDto } from './dto/create-changeprice.dto';
import { UpdateChangepriceDto } from './dto/update-changeprice.dto';
export declare class ChangepriceService {
    create(createChangepriceDto: CreateChangepriceDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateChangepriceDto: UpdateChangepriceDto): string;
    remove(id: number): string;
}
