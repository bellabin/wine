import { ChangepriceService } from './changeprice.service';
import { CreateChangepriceDto } from './dto/create-changeprice.dto';
import { UpdateChangepriceDto } from './dto/update-changeprice.dto';
export declare class ChangepriceController {
    private readonly changepriceService;
    constructor(changepriceService: ChangepriceService);
    create(createChangepriceDto: CreateChangepriceDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateChangepriceDto: UpdateChangepriceDto): string;
    remove(id: string): string;
}
