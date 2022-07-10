import { PartialType } from "@nestjs/swagger";
import { CreateWinelineDto } from "./create-wineline.dto";

export class UpdateWinelineDto extends PartialType(CreateWinelineDto) {}