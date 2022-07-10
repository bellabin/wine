import { PartialType } from "@nestjs/swagger";
import { CreatePhieunhapDto } from "./create-phieunhap.dto";

export class UpdatePhieunhapDto extends PartialType(CreatePhieunhapDto) {}
