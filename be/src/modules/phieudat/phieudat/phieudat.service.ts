import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CtPhieudatService } from 'src/modules/ct_phieudat/ct_phieudat.service';
import { CreateCtPhieudatDto } from 'src/modules/ct_phieudat/dto/create-ct_phieudat.dto';
import { Repository } from 'typeorm';
import { CreatePhieudatDto } from '../dto/create-phieudat.dto';
import { UpdatePhieudatDto } from '../dto/update-phieudat.dto';
import { Phieudat } from '../entities/phieudat.entity';
import { v4 as uuidv4 } from 'uuid';
import { DEFAULT_MANV } from 'src/constants/constant';

@Injectable()
export class PhieudatService {
    constructor(
        @InjectRepository(Phieudat) private phieudatRepo: Repository<Phieudat>, //inject repo
        private ctPhieuDatService: CtPhieudatService,
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

        const { CTPDS } = payload

        const promises = []

        for (const ct_phieudat of CTPDS) {
            const createCtPhieudatDto: CreateCtPhieudatDto = {
                MAPD: payload.MAPD,
                MADONG: ct_phieudat.MADONG,
                SOLUONG: ct_phieudat.SOLUONG,
                GIA: ct_phieudat.GIA,
                MANVD: DEFAULT_MANV,
            }

            promises.push(this.ctPhieuDatService.create(createCtPhieudatDto))
        }

        

        const cTPDs = await Promise.all(promises)
        
        phieudat.ct_phieudats = cTPDs

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
