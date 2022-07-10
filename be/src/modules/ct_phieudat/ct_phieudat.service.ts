import { Injectable } from '@nestjs/common';
import { CreateCtPhieudatDto } from './dto/create-ct_phieudat.dto';
import { UpdateCtPhieudatDto } from './dto/update-ct_phieudat.dto';

@Injectable()
export class CtPhieudatService {
  create(createCtPhieudatDto: CreateCtPhieudatDto) {
    return 'This action adds a new ctPhieudat';
  }

  findAll() {
    return `This action returns all ctPhieudat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ctPhieudat`;
  }

  update(id: number, updateCtPhieudatDto: UpdateCtPhieudatDto) {
    return `This action updates a #${id} ctPhieudat`;
  }

  remove(id: number) {
    return `This action removes a #${id} ctPhieudat`;
  }
}
