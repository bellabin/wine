import { Injectable } from '@nestjs/common';
import { CreateCungcapDto } from './dto/create-cungcap.dto';
import { UpdateCungcapDto } from './dto/update-cungcap.dto';

@Injectable()
export class CungcapService {
  create(createCungcapDto: CreateCungcapDto) {
    return 'This action adds a new cungcap';
  }

  findAll() {
    return `This action returns all cungcap`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cungcap`;
  }

  update(id: number, updateCungcapDto: UpdateCungcapDto) {
    return `This action updates a #${id} cungcap`;
  }

  remove(id: number) {
    return `This action removes a #${id} cungcap`;
  }
}
