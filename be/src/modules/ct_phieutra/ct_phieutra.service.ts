import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCtPhieutraDto } from './dto/create-ct_phieutra.dto';
import { UpdateCtPhieutraDto } from './dto/update-ct_phieutra.dto';
import { CtPhieutra } from './entities/ct_phieutra.entity';

@Injectable()
export class CtPhieutraService {
  @InjectRepository(CtPhieutra) private ctphieutraRepo: Repository<CtPhieutra>
  async create(payload: CreateCtPhieutraDto) {
    const ct_phieutra = this.ctphieutraRepo.create(payload)

    await this.ctphieutraRepo.save(ct_phieutra)

    return ct_phieutra 
  }

  findAll() {
    return this.ctphieutraRepo.find({
      relations: ['phieutra'],
    })
  }

  findOne(MAPT: string, IDCTPD: number) {
    return this.ctphieutraRepo.findOne({
      where: { MAPT: MAPT, IDCTPD: IDCTPD   },
      relations: ['phieutra'],
    })
  }

  async update(MAPT: string, IDCTPD: number, body: UpdateCtPhieutraDto) {
    const ct_phieutra = await this.findOne(MAPT, IDCTPD)

    if(!ct_phieutra) throw new NotFoundException('not found')

    return this.ctphieutraRepo
    .createQueryBuilder()
    .update(CtPhieutra) //Entity Cung cap
    .set({SOLUONG: body.SOLUONG})
    .where('MAPT = :MAPT', { MAPT })
    .andWhere('IDCTPD = :IDCTPD', {IDCTPD})
    .execute()
  }

  async remove(MAPT: string, IDCTPD: number) {
    const ct_phieutra = await this.findOne(MAPT,IDCTPD)

    return this.ctphieutraRepo.remove(ct_phieutra)
  }
}
