"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWinelineDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_wineline_dto_1 = require("./create-wineline.dto");
class UpdateWinelineDto extends (0, swagger_1.PartialType)(create_wineline_dto_1.CreateWinelineDto) {
}
exports.UpdateWinelineDto = UpdateWinelineDto;
//# sourceMappingURL=update-wineline.dto.js.map