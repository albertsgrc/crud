"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crud_validate_enum_1 = require("./enums/crud-validate.enum");
exports.FEAUTURE_NAME_METADATA = "NESTJSX_FEAUTURE_NAME_METADATA";
exports.ACTION_NAME_METADATA = "NESTJSX_ACTION_NAME_METADATA";
exports.OVERRIDE_METHOD_METADATA = "NESTJSX_OVERRIDE_METHOD_METADATA";
exports.CREATE_UPDATE = {
    groups: [crud_validate_enum_1.CrudValidate.CREATE, crud_validate_enum_1.CrudValidate.UPDATE],
};
exports.CREATE = { groups: [crud_validate_enum_1.CrudValidate.CREATE] };
exports.UPDATE = { groups: [crud_validate_enum_1.CrudValidate.UPDATE] };
//# sourceMappingURL=constants.js.map