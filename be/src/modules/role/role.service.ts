import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService {
  @InjectRepository(Role) private roleRepo: Repository<Role>
  async create(payload: CreateRoleDto) {
    const role = this.roleRepo.create(payload)

    await this.roleRepo.save(role)

    return role
  }

  findAll() {
    return this.roleRepo.find()
  }

  findOne(MANQ: string) {
    return this.roleRepo
        .createQueryBuilder('role')
        .where('role.MANQ = :MANQ', {MANQ})
        .getOne()
  }

  async update(MANQ: string, body: UpdateRoleDto) {
    const role = await this.findOne(MANQ)

    if(!role) throw new NotFoundException('role not found')

    return this.roleRepo.update(MANQ, body) 
  }

  async remove(MANQ: string) {
    const role = await this.findOne(MANQ)

    if(!role) throw new NotFoundException('role not found')

    return this.roleRepo.remove(role) 
  }
}
