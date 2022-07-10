import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePhieutraDto } from '../dto/create-phieutra.dto';
import { UpdatePhieutraDto } from '../dto/update-phieutra.dto';
import { Phieutra } from '../entities/phieutra.entity';

@Injectable()
export class PhieutraService {
    constructor(
        @InjectRepository(Phieutra) private phieutraRepo: Repository<Phieutra> //inject repo
    ) {}

    findAll() { //function handle get list phieutra
        return this.phieutraRepo.find()
    }

    findById(MAPT: string) {
        return this.phieutraRepo
            .createQueryBuilder('phieutra')
            .where('phieutra.MAPT = :MAPT', { MAPT })
            .getOne()
    }

    async create(payload: CreatePhieutraDto) { //func handle create new phieutra
        const phieutra = this.phieutraRepo.create(payload) //create nhung chua duoc save

        await this.phieutraRepo.save(phieutra) //khi save thi data moi duoc luu vao db

        return phieutra
    }

    async update(MAPT: string, body: UpdatePhieutraDto) {
        const phieutra = await this.findById(MAPT)
        
        if (!phieutra) throw new NotFoundException('phieutra is not exist')

        return this.phieutraRepo.update(MAPT, body)
    }

    async delete(MAPT: string) {
        const phieutra = await this.findById(MAPT)

        if (!phieutra) throw new NotFoundException('phieutra is not exist')

        return this.phieutraRepo.remove(phieutra)
    }
}
