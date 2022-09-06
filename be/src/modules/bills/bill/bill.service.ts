import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhieudatService } from 'src/modules/phieudat/phieudat/phieudat.service';
import { StaffService } from 'src/modules/staffs/staff.service';
import { Repository } from 'typeorm';
import { CreateBillDto } from '../dto/create-bill.dto';
import { UpdateBillDto } from '../dto/update-bill.dto';
import { Bill } from '../entities/bill.entity';

@Injectable()
export class BillService {
    constructor(
        @InjectRepository(Bill) private billRepo: Repository<Bill>, //inject repo
        private phieudatService: PhieudatService,
        private staffService: StaffService,
    ) {}

    findAll() { //function handle get list bill
        return this.billRepo.find({
            
            relations: ['staff', 'phieudat', 'phieutras'],
          })
    }

    findById(MAHD: string) {
        return this.billRepo.findOne({
            where: { MAHD: MAHD   },
            relations: ['staff', 'phieudat', 'phieutras'],
          })
    }

    async findByMAPD(MAPD:string){

        // console.log(MAPD)

        const pd = await this.phieudatService.findById(MAPD)

        // console.log(pd)

        return this.billRepo.findOne({
            where:{MAHD:pd.bill.MAHD},
            relations: ['staff', 'phieudat', 'phieutras'],
        })
    }

    async create(payload: CreateBillDto) { //func handle create new bill
        let bill = new Bill //create nhung chua duoc save

        const pd = await this.phieudatService.findById(payload.MAPD)

        const staff = await this.staffService.findById(payload.MANV)

        bill.MAHD = payload.MAHD
        bill.staff = staff
        bill.MASOTHUE = payload.MASOTHUE
        bill.NGAY = new Date()
        bill.THANHTIEN = payload.THANHTIEN
        bill.phieudat = pd




        await this.billRepo.save(bill) //khi save thi data moi duoc luu vao db

        return bill
    }

    async update(MAHD: string, body: UpdateBillDto) {
        const bill = await this.findById(MAHD)
        
        if (!bill) throw new NotFoundException('bill is not exist')

        return this.billRepo.update(MAHD, body)
    }

    async delete(MAHD: string) {
        const bill = await this.findById(MAHD)

        if (!bill) throw new NotFoundException('bill is not exist')

        return this.billRepo.remove(bill)
    }
}
