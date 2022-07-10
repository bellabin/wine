import { PartialType } from '@nestjs/mapped-types';
import { CreateCtPhieudatDto } from './create-ct_phieudat.dto';

export class UpdateCtPhieudatDto extends PartialType(CreateCtPhieudatDto) {}
