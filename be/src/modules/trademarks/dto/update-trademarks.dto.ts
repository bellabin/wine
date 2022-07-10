import { PartialType } from "@nestjs/swagger";
import { CreateTrademarksDto } from "./create-trademarks.dto";

export class UpdateTrademarksDto extends PartialType(CreateTrademarksDto) {}
