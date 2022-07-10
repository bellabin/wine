import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
export declare class RoleService {
    private roleRepo;
    create(payload: CreateRoleDto): Promise<Role>;
    findAll(): Promise<Role[]>;
    findOne(MANQ: string): Promise<Role>;
    update(MANQ: string, body: UpdateRoleDto): Promise<import("typeorm").UpdateResult>;
    remove(MANQ: string): Promise<Role>;
}
