"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const EmployeeSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    dob: { type: String, required: true },
    doj: { type: String, required: false },
    mobile: { type: String, required: true },
    created_at: { type: Date, required: false, default: Date.now },
    updated_at: { type: Date, required: false, default: null }
});
exports.EmployeeModel = mongoose_1.default.model('Employee', EmployeeSchema);
//# sourceMappingURL=Employee.js.map