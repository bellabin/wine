"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateChangepriceDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_changeprice_dto_1 = require("./create-changeprice.dto");
class UpdateChangepriceDto extends (0, mapped_types_1.PartialType)(create_changeprice_dto_1.CreateChangepriceDto) {
}
exports.UpdateChangepriceDto = UpdateChangepriceDto;
//# sourceMappingURL=update-changeprice.dto.js.map