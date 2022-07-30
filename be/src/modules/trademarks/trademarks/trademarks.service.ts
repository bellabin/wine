import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTrademarksDto } from '../dto/create-trademarks.dto';
import { UpdateTrademarksDto } from '../dto/update-trademarks.dto';
import { Trademarks } from '../entities/trademarks.entity';

@Injectable()
export class TrademarksService { 
    constructor(
        @InjectRepository(Trademarks) private trademarkRepo: Repository<Trademarks> //inject repo
    ) {}

    findAll() { //function handle get list trademark
        return this.trademarkRepo.find({
            relations: ['winelines'],
          })
    }

    findById(MATH: string) {
        return this.trademarkRepo.findOne({
            where: { MATH: MATH  },
            relations: ['winelines'],
          })
    }

    async create(payload: CreateTrademarksDto) { //func handle create new trademark
        const trademark = this.trademarkRepo.create(payload) //create nhung chua duoc save

        await this.trademarkRepo.save(trademark) //khi save thi data moi duoc luu vao db

        return trademark
    }

    async update(MATH: string, body: UpdateTrademarksDto) {
        const trademark = await this.findById(MATH)
        
        if (!trademark) throw new NotFoundException('Trademark is not exist')

        return this.trademarkRepo.update(MATH, body)
    }

    async delete(MATH: string) {
        const trademark = await this.findById(MATH)

        if (!trademark) throw new NotFoundException('Trademark is not exist')

        return this.trademarkRepo.remove(trademark)
    }
}
