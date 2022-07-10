import { PartialType } from '@nestjs/mapped-types';
import { CreateChangepriceDto } from './create-changeprice.dto';

export class UpdateChangepriceDto extends PartialType(CreateChangepriceDto) {}
