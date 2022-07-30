import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProviderDto } from '../dto/create-provider.dto';
import { UpdateProviderDto } from '../dto/update-provider.dto';
import { Provider } from '../entities/provider.entity';

@Injectable()
export class ProviderService {
    constructor(
        @InjectRepository(Provider) private providerRepo: Repository<Provider> //inject repo
    ) {}

    findAll() { //function handle get list 
        return this.providerRepo.find({
            relations: ['orders', 'cungcaps'],
          })
    }

    findById(MANCC: string) {
        return this.providerRepo.findOne({
            where: { MANCC: MANCC  },
            relations: ['orders', 'cungcaps'],
          })
    }

    async create(payload: CreateProviderDto) { //func handle create new provider
        const provider = this.providerRepo.create(payload) //create nhung chua duoc save

        await this.providerRepo.save(provider) //khi save thi data moi duoc luu vao db

        return provider
    }

    async update(MANCC: string, body: UpdateProviderDto) {
        const provider = await this.findById(MANCC)
        
        if (!provider) throw new NotFoundException('provider is not exist')

        return this.providerRepo.update(MANCC, body)
    }

    async delete(MANCC: string) {
        const provider = await this.findById(MANCC)

        if (!provider) throw new NotFoundException('provider is not exist')

        return this.providerRepo.remove(provider)
    }
}
