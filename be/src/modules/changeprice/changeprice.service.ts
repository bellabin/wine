import { Injectable } from '@nestjs/common';
import { CreateChangepriceDto } from './dto/create-changeprice.dto';
import { UpdateChangepriceDto } from './dto/update-changeprice.dto';

@Injectable()
export class ChangepriceService {
  create(createChangepriceDto: CreateChangepriceDto) {
    return 'This action adds a new changeprice';
  }

  findAll() {
    return `This action returns all changeprice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} changeprice`;
  }

  update(id: number, updateChangepriceDto: UpdateChangepriceDto) {
    return `This action updates a #${id} changeprice`;
  }

  remove(id: number) {
    return `This action removes a #${id} changeprice`;
  }
}
