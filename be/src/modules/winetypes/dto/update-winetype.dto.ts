import { PartialType } from "@nestjs/swagger";
import { CreateWinetypeDto } from "./create-winetype.dto";

export class UpdateWinetypeDto extends PartialType(CreateWinetypeDto) {}
