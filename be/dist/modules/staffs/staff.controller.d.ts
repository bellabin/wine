import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { StaffService } from './staff.service';
export declare class StaffController {
    private staffService;
    constructor(staffService: StaffService);
    findAll(): Promise<import("./entities/staff.entity").Staff[]>;
    findById(id: string): Promise<import("./entities/staff.entity").Staff>;
    create(payload: CreateStaffDto): Promise<import("./entities/staff.entity").Staff>;
    update(id: string, body: UpdateStaffDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("./entities/staff.entity").Staff>;
}
