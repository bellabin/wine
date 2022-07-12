import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createPool } from 'mysql2/promise';
import { getConnection, Repository } from 'typeorm';
import { CreateCungcapDto } from './dto/create-cungcap.dto';
import { UpdateCungcapDto } from './dto/update-cungcap.dto';
import { Cungcap } from './entities/cungcap.entity';

@Injectable()
export class CungcapService {
  @InjectRepository(Cungcap) private cungcapRepo: Repository<Cungcap>
  /*async create(payload: CreateCungcapDto) {
    const { MANCC, MADONG, GIA } = payload

    const query = `INSERT INTO CUNGCAP VALUES(${MANCC}, ${MADONG}, ${GIA})` 

    const connection = createPool({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'billybua7',
      database: 'banruou',
    })

    return connection.query(query)
  }*/

  async create(payload: CreateCungcapDto) { //func handle create new staff
    const cungcap = this.cungcapRepo.create(payload) //create nhung chua duoc save

    await this.cungcapRepo.save(cungcap) //khi save thi data moi duoc luu vao db

    return cungcap
  }

  findAll() {
    return  this.cungcapRepo.find()
  }

  findOne(MANCC: string, MADONG:string) {
    return this.cungcapRepo.createQueryBuilder('cungcap')
    .innerJoinAndSelect('cungcap.provider', 'nhacungcap')
    .innerJoinAndSelect('cungcap.wineline', 'dongruou')
    .where('cungcap.MANCC = :MANCC', {MANCC})
    .andWhere('cungcap.MADONG = :MADONG', {MADONG})
    .getOne() 
  }

  
 async update(MANCC: string, MADONG:string, body: UpdateCungcapDto) {
    const cungcap = await this.findOne(MANCC, MADONG)

    if(!cungcap) throw new NotFoundException('not found')

    return this.cungcapRepo
    .createQueryBuilder()
    .update(Cungcap) //Entity Cung cap
    .set({GIA: body.GIA})
    .where('MANCC = :MANCC', { MANCC })
    .andWhere('MADONG = :MADONG', { MADONG })
    .execute()
  }

  async remove(MANCC: string, MADONG: string) {
    const cungcap = await this.findOne(MANCC,MADONG)
    return this.cungcapRepo.remove(cungcap)
  }
}
