import { PartialType } from "@nestjs/swagger";
import { CreatePhieutraDto } from "./create-phieutra.dto";

export class UpdatePhieutraDto extends PartialType(CreatePhieutraDto) {}
