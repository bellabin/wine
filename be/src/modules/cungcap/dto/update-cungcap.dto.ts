import { PartialType } from '@nestjs/mapped-types';
import { CreateCungcapDto } from './create-cungcap.dto';

export class UpdateCungcapDto extends PartialType(CreateCungcapDto) {}
