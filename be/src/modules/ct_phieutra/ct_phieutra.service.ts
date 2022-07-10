import { Injectable } from '@nestjs/common';
import { CreateCtPhieutraDto } from './dto/create-ct_phieutra.dto';
import { UpdateCtPhieutraDto } from './dto/update-ct_phieutra.dto';

@Injectable()
export class CtPhieutraService {
  create(createCtPhieutraDto: CreateCtPhieutraDto) {
    return 'This action adds a new ctPhieutra';
  }

  findAll() {
    return `This action returns all ctPhieutra`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ctPhieutra`;
  }

  update(id: number, updateCtPhieutraDto: UpdateCtPhieutraDto) {
    return `This action updates a #${id} ctPhieutra`;
  }

  remove(id: number) {
    return `This action removes a #${id} ctPhieutra`;
  }
}
