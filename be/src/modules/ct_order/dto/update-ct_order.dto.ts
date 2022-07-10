import { PartialType } from '@nestjs/mapped-types';
import { CreateCtOrderDto } from './create-ct_order.dto';

export class UpdateCtOrderDto extends PartialType(CreateCtOrderDto) {}
