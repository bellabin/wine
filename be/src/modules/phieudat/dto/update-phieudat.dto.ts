import { PartialType } from "@nestjs/swagger";
import { CreatePhieudatDto } from "./create-phieudat.dto";

export class UpdatePhieudatDto extends PartialType(CreatePhieudatDto) {}
