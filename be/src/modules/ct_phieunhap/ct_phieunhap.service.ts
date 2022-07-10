import { Injectable } from '@nestjs/common';
import { CreateCtPhieunhapDto } from './dto/create-ct_phieunhap.dto';
import { UpdateCtPhieunhapDto } from './dto/update-ct_phieunhap.dto';

@Injectable()
export class CtPhieunhapService {
  create(createCtPhieunhapDto: CreateCtPhieunhapDto) {
    return 'This action adds a new ctPhieunhap';
  }

  findAll() {
    return `This action returns all ctPhieunhap`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ctPhieunhap`;
  }

  update(id: number, updateCtPhieunhapDto: UpdateCtPhieunhapDto) {
    return `This action updates a #${id} ctPhieunhap`;
  }

  remove(id: number) {
    return `This action removes a #${id} ctPhieunhap`;
  }
}
