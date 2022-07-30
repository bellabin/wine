import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCtPhieunhapDto } from './dto/create-ct_phieunhap.dto';
import { UpdateCtPhieunhapDto } from './dto/update-ct_phieunhap.dto';
import { CtPhieunhap } from './entities/ct_phieunhap.entity';

@Injectable()
export class CtPhieunhapService {
  @InjectRepository(CtPhieunhap) private ctphieunhapRepo: Repository <CtPhieunhap>
  async create(payload: CreateCtPhieunhapDto) { //func handle create new ctpn
    const ct_phieunhap = this.ctphieunhapRepo.create(payload) //create nhung chua duoc save

    await this.ctphieunhapRepo.save(ct_phieunhap) //khi save thi data moi duoc luu vao db

    return ct_phieunhap
  }

  findAll() {
    return this.ctphieunhapRepo.find({
      relations: ['phieunhap', 'wineline'],
    })
  }

  findOne(MAPN: string, MADONG: string) {
    return this.ctphieunhapRepo.findOne({
      where: { MADONG: MADONG , MAPN: MAPN  },
      relations: ['phieunhap', 'wineline'],
    })
  }

  async update(MAPN: string, MADONG: string, body: UpdateCtPhieunhapDto) {
    const ct_phieunhap = await this.findOne(MAPN, MADONG)

    if(!ct_phieunhap) throw new NotFoundException('not found')

    return this.ctphieunhapRepo
    .createQueryBuilder()
    .update(CtPhieunhap) //Entity Cung cap
    .set({SOLUONG: body.SOLUONG, GIA: body.GIA})
    .where('MAPN = :MAPN', { MAPN })
    .andWhere('MADONG = :MADONG', { MADONG })
    .execute()
  }

  async remove(MAPN: string, MADONG: string) {
    const ct_phieunhap = await this.findOne(MAPN,MADONG)
    return this.ctphieunhapRepo.remove(ct_phieunhap)
    
  }
}
