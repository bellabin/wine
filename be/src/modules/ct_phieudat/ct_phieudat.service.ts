import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCtPhieudatDto } from './dto/create-ct_phieudat.dto';
import { UpdateCtPhieudatDto } from './dto/update-ct_phieudat.dto';
import { CtPhieudat } from './entities/ct_phieudat.entity';

@Injectable()
export class CtPhieudatService {
  @InjectRepository(CtPhieudat) private ctphieudatRepo: Repository <CtPhieudat>
  async create(payload: CreateCtPhieudatDto) { //func handle create new ctpd
    const ct_phieudat = this.ctphieudatRepo.create(payload) //create nhung chua duoc save

    await this.ctphieudatRepo.save(ct_phieudat) //khi save thi data moi duoc luu vao db

    return ct_phieudat
  }

  findAll() {
    return this.ctphieudatRepo.find({
      relations: ['phieudat', 'wineline', 'ct_phieutras'],
    })
  }

  findOne(IDCTPD: number, MAPD: string, MADONG: string) {
    return this.ctphieudatRepo.findOne({
      where: { MADONG: MADONG  , IDCTPD: IDCTPD, MAPD: MAPD },
      relations: ['phieudat', 'wineline', 'ct_phieutras'],
    })
  }

  async update(IDCTPD: number, MAPD: string, MADONG: string, body: UpdateCtPhieudatDto) {
    const ct_phieudat = await this.findOne(IDCTPD, MAPD, MADONG)

    if(!ct_phieudat) throw new NotFoundException('not found')

    return this.ctphieudatRepo
    .createQueryBuilder()
    .update(CtPhieudat) //Entity Cung cap
    .set({SOLUONG: body.SOLUONG, GIA: body.GIA})
    .where('IDCTPD = :IDCTPD', { IDCTPD })
    .andWhere('MAPD = :MAPD', {MAPD})
    .andWhere('MADONG = :MADONG', { MADONG })
    .execute()
  }

  async remove(IDCTPD: number, MAPD: string, MADONG: string) {
    const ct_phieudat = await this.findOne(IDCTPD, MAPD, MADONG)
    return this.ctphieudatRepo.remove(ct_phieudat)
  }
}
