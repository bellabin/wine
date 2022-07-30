import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBillDto } from '../dto/create-bill.dto';
import { UpdateBillDto } from '../dto/update-bill.dto';
import { Bill } from '../entities/bill.entity';

@Injectable()
export class BillService {
    constructor(
        @InjectRepository(Bill) private billRepo: Repository<Bill> //inject repo
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

    async create(payload: CreateBillDto) { //func handle create new bill
        const bill = this.billRepo.create(payload) //create nhung chua duoc save

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
