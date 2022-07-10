import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateWinelineDto } from './dto/create-wineline.dto'
import { UpdateWinelineDto } from './dto/update-wineline.dto'
import { Wineline } from './entities/wineline.entity'

@Injectable()
export class WinelineService {
    constructor(
        @InjectRepository(Wineline) private winelineRepo: Repository<Wineline> //inject repo
    ) {}

    findAll() { //function handle get list wineline
        return this.winelineRepo.find()
    }

    findById(MADONG: string) {
        return this.winelineRepo
            .createQueryBuilder('wineline')
            .where('wineline.MADONG = :MADONG', { MADONG })
            .getOne()
    }

    async create(payload: CreateWinelineDto) { //func handle create new wineline
        const wineline = this.winelineRepo.create(payload) //create nhung chua duoc save

        await this.winelineRepo.save(wineline) //khi save thi data moi duoc luu vao db

        return wineline
    }

    async update(MADONG: string, body: UpdateWinelineDto) {
        const wineline = await this.findById(MADONG)
        
        if (!wineline) throw new NotFoundException('Wineline is not exist')

        return this.winelineRepo.update(MADONG, body)
    }

    async delete(MADONG: string) {
        const wineline = await this.findById(MADONG)

        if (!wineline) throw new NotFoundException('Wineline is not exist')

        return this.winelineRepo.remove(wineline)
    }
}
