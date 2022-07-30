import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePhieudatDto } from '../dto/create-phieudat.dto';
import { UpdatePhieudatDto } from '../dto/update-phieudat.dto';
import { Phieudat } from '../entities/phieudat.entity';

@Injectable()
export class PhieudatService {
    constructor(
        @InjectRepository(Phieudat) private phieudatRepo: Repository<Phieudat> //inject repo
    ) {}

    findAll() { //function handle get list pd
        return this.phieudatRepo.find({
            relations: ['staff', 'customer', 'ct_phieudats','bill'],
          })
    }

    findById(MAPD: string) {
        return this.phieudatRepo.findOne({
            where: { MAPD: MAPD   },
            relations: ['staff', 'customer','ct_phieudats','bill'],
          })
    }

    async create(payload: CreatePhieudatDto) { //func handle create new pd
        const phieudat = this.phieudatRepo.create(payload) //create nhung chua duoc save

        await this.phieudatRepo.save(phieudat) //khi save thi data moi duoc luu vao db

        return phieudat
    }

    async update(MAPD: string, body: UpdatePhieudatDto) {
        const phieudat = await this.findById(MAPD)
        
        if (!phieudat) throw new NotFoundException('PD is not exist')

        return this.phieudatRepo.update(MAPD, body)
    }

    async delete(MAPD: string) {
        const phieudat = await this.findById(MAPD)

        if (!phieudat) throw new NotFoundException('PD is not exist')

        return this.phieudatRepo.remove(phieudat)
    }
}
