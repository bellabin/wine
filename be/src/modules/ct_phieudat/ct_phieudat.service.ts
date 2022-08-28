import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { WinelineService } from '../wineline/wineline.service';
import { CreateCtPhieudatDto } from './dto/create-ct_phieudat.dto';
import { UpdateCtPhieudatDto } from './dto/update-ct_phieudat.dto';
import { CtPhieudat } from './entities/ct_phieudat.entity';

@Injectable()
export class CtPhieudatService {
  constructor(
    @InjectRepository(CtPhieudat) private ctphieudatRepo: Repository <CtPhieudat>,
    private winelineService: WinelineService,
		private dataSource: DataSource

  ) {
    
  }
  
  async create(payload: CreateCtPhieudatDto) { //func handle create new ctpd
      

    // let quantity = await this.winelineService.getQuantity(payload.MADONG)
    // console.log(typeof(quantity[0].soluongton), typeof(payload.SOLUONG))

    // console.log('this is quantity',quantity[0].soluongton,'payload', payload.SOLUONG)
    // console.log('result', Number(quantity[0].soluongton) - Number(payload.SOLUONG))
    // if(Number(quantity[0].soluongton) < Number(payload.SOLUONG)){
    //   console.log('i was here')
    //   throw new Error('not enough')
    // }

    // this.winelineService.updateSLT(payload.MADONG, Number(payload.SOLUONG) )

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

  async getTotalRev(from:string,to:string) {
    return this.ctphieudatRepo.query(`
    SELECT sum(cp.GIA * cp.SOLUONG) as gia 
    FROM ct_phieudat cp
    INNER JOIN (
      SELECT * 
      FROM phieudat p
      WHERE p.NGAYDAT >= '${from}' AND p.NGAYDAT <= '${to}' AND p.TRANGTHAI = 'Đã giao'
    ) p ON cp.MAPD = p.MAPD
    `)
  }

  async getRevenueProduct(from: string, to: string){
    return this.ctphieudatRepo.query(`
    SELECT sum(cp.SOLUONG) as so_luong_ban, cp.MADONG ,  d.TENDONG , d.HINHANH 
    FROM ct_phieudat cp
    INNER JOIN (
      SELECT * 
      FROM phieudat
      WHERE NGAYDAT >= '${from}' AND NGAYDAT <= '${to}'
    ) p ON cp.MAPD = p.MAPD
    INNER JOIN dongruou d on cp.MADONG = d.MADONG 
    GROUP BY cp.MADONG
    ORDER BY so_luong_ban DESC  
    `)
    
  }

  async getTotalIncomeFromTo(from: string, to: string) {
    return this.ctphieudatRepo.query(`
    SELECT sum(cp.GIA) as gia 
    FROM ct_phieudat cp
    INNER JOIN (
      SELECT * 
      FROM phieudat p
      WHERE NGAYDAT >= '${from}' AND NGAYDAT <= '${to}'
    ) p ON cp.MAPD = p.MAPD
    `)
  }
}
//.where('phieudat.NGAYDAT >= :from and phieudat.NGAYDAT <= :to', {from: from, to: to})
