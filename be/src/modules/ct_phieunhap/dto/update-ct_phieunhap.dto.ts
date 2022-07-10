import { PartialType } from '@nestjs/mapped-types';
import { CreateCtPhieunhapDto } from './create-ct_phieunhap.dto';

export class UpdateCtPhieunhapDto extends PartialType(CreateCtPhieunhapDto) {}
