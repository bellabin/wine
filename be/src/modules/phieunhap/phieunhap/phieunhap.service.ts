import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePhieunhapDto } from '../dto/create-phieunhap.dto';
import { UpdatePhieunhapDto } from '../dto/update-phieunhap.dto';
import { Phieunhap } from '../entities/phieunhap.entity';

@Injectable()
export class PhieunhapService {
    constructor(
        @InjectRepository(Phieunhap) private phieunhapRepo: Repository<Phieunhap> //inject repo
    ) {}

    findAll() { //function handle get list phieunhap
        return this.phieunhapRepo.find({
            relations: ['staff', 'order','ct_phieunhaps'],
          })
    }

    findById(MAPN: string) {
        return this.phieunhapRepo.findOne({
            where: { MAPN: MAPN  },
            relations: ['staff', 'order','ct_phieunhaps'],
          })
    }

    async create(payload: CreatePhieunhapDto) { //func handle create new phieunhap
        const phieunhap = this.phieunhapRepo.create(payload) //create nhung chua duoc save

        await this.phieunhapRepo.save(phieunhap) //khi save thi data moi duoc luu vao db

        return phieunhap
    }

    async update(MAPN: string, body: UpdatePhieunhapDto) {
        const phieunhap = await this.findById(MAPN)
        
        if (!phieunhap) throw new NotFoundException('phieunhap is not exist')

        return this.phieunhapRepo.update(MAPN, body)
    }

    async delete(MAPN: string) {
        const phieunhap = await this.findById(MAPN)

        if (!phieunhap) throw new NotFoundException('phieunhap is not exist')

        return this.phieunhapRepo.remove(phieunhap)
    }
}
