import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChangepriceDto } from './dto/create-changeprice.dto';
import { UpdateChangepriceDto } from './dto/update-changeprice.dto';
import { Changeprice } from './entities/changeprice.entity';

@Injectable()
export class ChangepriceService {
  @InjectRepository(Changeprice) private changepriceRepo: Repository <Changeprice>
  async create(payload: CreateChangepriceDto) { //func handle create new cp
    const changeprice = this.changepriceRepo.create(payload) //create nhung chua duoc save

    await this.changepriceRepo.save(changeprice) //khi save thi data moi duoc luu vao db

    return changeprice
  }

  findAll() {
    return this.changepriceRepo.find({
      relations: ['wineline', 'staff'],
    }
    )
  }

  findOne(MADONG: string, NGAYTHAYDOI: Date, MANV: string) {
    return this.changepriceRepo.findOne({
      where: { MADONG: MADONG , NGAYTHAYDOI:NGAYTHAYDOI, MANV:MANV  },
      relations: ['wineline', 'staff'],
    })
    // return this.changepriceRepo.createQueryBuilder('changeprice')
    // .innerJoinAndSelect('changeprice.wineline', 'dongruou')
    // .innerJoinAndSelect('changeprice.staff','nhanvien')
    // .where('changeprice.MADONG = :MADONG', {MADONG})
    // .andWhere('ct_phieudat.NGAYTHAYDOI = :NGAYTHAYDOI', {NGAYTHAYDOI})
    // .andWhere('ct_phieudat.MANV = :MANV', {MANV})
    // .getOne()
  }

  async update(MADONG: string, NGAYTHAYDOI: Date, MANV: string, body: UpdateChangepriceDto) {
    const changeprice = await this.findOne(MADONG, NGAYTHAYDOI, MANV)

    if(!changeprice) throw new NotFoundException('not found')

    return this.changepriceRepo
    .createQueryBuilder()
    .update(Changeprice)
    .set({GIA: body.GIA})
    .where('MADONG = :MADONG', {MADONG})
    .andWhere('NGAYTHAYDOI = :NGAYTHAYDOI', {NGAYTHAYDOI})
    .andWhere('MANV = :MANV', {MANV})
    .execute()
  }

  async remove(MADONG: string, NGAYTHAYDOI: Date, MANV: string) {
    const changeprice = await this.findOne(MADONG, NGAYTHAYDOI, MANV)

    return this.changepriceRepo.remove(changeprice) 
  }
}
