import { Repository } from 'typeorm';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { Staff } from './entities/staff.entity';
export declare class StaffService {
    private staffRepo;
    constructor(staffRepo: Repository<Staff>);
    findAll(): Promise<Staff[]>;
    findById(MANV: string): Promise<Staff>;
    create(payload: CreateStaffDto): Promise<Staff>;
    update(MANV: string, body: UpdateStaffDto): Promise<import("typeorm").UpdateResult>;
    delete(MANV: string): Promise<Staff>;
}
