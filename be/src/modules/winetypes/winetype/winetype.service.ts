import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWinetypeDto } from '../dto/create-winetype.dto';
import { UpdateWinetypeDto } from '../dto/update-winetype.dto';
import { Winetype } from '../entities/winetype.entity';

@Injectable()
export class WinetypeService {
    constructor(
        @InjectRepository(Winetype) private winetypeRepo: Repository<Winetype> //inject repo
    ) {}

    findAll() { //function handle get list winetype
        return this.winetypeRepo.find()
    }

    findById(MALOAI: string) {
        return this.winetypeRepo
            .createQueryBuilder('winetypes')
            .where('winetypes.MALOAI = :MALOAI', { MALOAI })
            .getOne()
    }

    async create(payload: CreateWinetypeDto) { //func handle create new winetype
        const winetype = this.winetypeRepo.create(payload) //create nhung chua duoc save

        await this.winetypeRepo.save(winetype) //khi save thi data moi duoc luu vao db

        return winetype
    }

    async update(MALOAI: string, body: UpdateWinetypeDto) {
        const winetype = await this.findById(MALOAI)
        
        if (!winetype) throw new NotFoundException('winetype is not exist')

        return this.winetypeRepo.update(MALOAI, body)
    }

    async delete(MALOAI: string) {
        const winetype = await this.findById(MALOAI)

        if (!winetype) throw new NotFoundException('winetype is not exist')

        return this.winetypeRepo.remove(winetype)
    }
}
