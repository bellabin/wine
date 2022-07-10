import { PartialType } from '@nestjs/mapped-types';
import { CreateCtPhieutraDto } from './create-ct_phieutra.dto';

export class UpdateCtPhieutraDto extends PartialType(CreateCtPhieutraDto) {}
