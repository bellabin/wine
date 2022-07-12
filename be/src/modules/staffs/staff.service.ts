import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { Staff } from './entities/staff.entity';

@Injectable()
export class StaffService {
    constructor(
        @InjectRepository(Staff) private staffRepo: Repository<Staff> //inject repo
    ) {}

    findAll() { //function handle get list staff
        return this.staffRepo.find()
    }

    findById(MANV: string) {
        return this.staffRepo
            .createQueryBuilder('staffs')
            .where('staffs.MANV = :MANV', { MANV })
            .getOne()
    }

    async create(payload: CreateStaffDto) { //func handle create new staff
        const staff = this.staffRepo.create(payload) //create nhung chua duoc save

        await this.staffRepo.save(staff) //khi save thi data moi duoc luu vao db

        return staff
    }

    async update(MANV: string, body: UpdateStaffDto) {
        const staff = await this.findById(MANV)
        
        if (!staff) throw new NotFoundException('Staff is not exist')

        return this.staffRepo.update(MANV, body)
    }

    async delete(MANV: string) {
        const staff = await this.findById(MANV)

        if (!staff) throw new NotFoundException('Staff is not exist')

        return this.staffRepo.remove(staff)
    }
}