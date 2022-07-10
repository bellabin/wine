"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCtOrderDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ct_order_dto_1 = require("./create-ct_order.dto");
class UpdateCtOrderDto extends (0, mapped_types_1.PartialType)(create_ct_order_dto_1.CreateCtOrderDto) {
}
exports.UpdateCtOrderDto = UpdateCtOrderDto;
//# sourceMappingURL=update-ct_order.dto.js.map